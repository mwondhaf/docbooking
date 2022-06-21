import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DayComponent from "../components/DayComponent";
import HourComponent from "../components/HourComponent";
import dateCalc from "../utils/calcDates";
import useDateStore from "../zustand/store";

export default function DetailsScreen({ route, navigation }) {
  const [dates, setDates] = React.useState([]);

  const { daysAndDatesToShow } = dateCalc();

  // zustand state
  const { date: selectedDate, time } = useDateStore((state) => state);

  const { doctor } = route.params;

  const doctorAvailableDays = doctor.availability;

  // get doctor hours
  const availableHours = [];
  doctorAvailableDays.map((day) => {
    if (day.day === moment(selectedDate).format("ddd")) {
      availableHours.push(day.hours);
    }
  });

  // dates comparison
  let todayDate = moment().format("DD-MM-YYYY");
  let dateFromState = moment(selectedDate).format("DD-MM-YYYY");

  React.useEffect(() => {
    setDates(daysAndDatesToShow());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View style={{ paddingHorizontal: 10 }}>
        <Text>{doctor.name}</Text>
        <Text style={{ paddingTop: 40 }}>
          Currently in {moment().format("MMMM")}
        </Text>
        {/* select date  */}
        <View style={styles.datesContainer}>
          {dates.map((date) => (
            <DayComponent {...{ key: date, date, doctor }} />
          ))}
        </View>
        <Text style={{ marginTop: 30 }}>Select hours</Text>
        <FlatList
          data={availableHours[0]}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text>Choose date to see available hours</Text>
          )}
          renderItem={({ item }) => {
            let itemHourToNumber = Number(item.hour.replace(":", ""));
            let nowHour = moment().format("HH:mm");
            let nowHourToNumber = Number(nowHour.replace(":", ""));

            if (
              todayDate === dateFromState &&
              itemHourToNumber > nowHourToNumber
            ) {
              return <HourComponent {...{ hour: item, doctor }} />;
            } else if (todayDate !== dateFromState) {
              return <HourComponent {...{ hour: item, doctor }} />;
            }
          }}
        />
      </View>
      <Button
        disabled={!time || !selectedDate}
        {...{
          title: "Book Now",
          onPress: () => {
            navigation.navigate("Booking", {
              doctor,
            });
          },
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
  },
  datesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
