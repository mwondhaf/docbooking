import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment";
import useDateStore from "../zustand/store";
import { StackActions, useNavigation } from "@react-navigation/native";

const DayComponent = ({ date, doctor }) => {
  const navigation = useNavigation();
  const day = moment(date).format("ddd");
  const dateNumber = moment(date).format("DD");
  // zustand state
  const {
    date: selectedDate,
    setDate,
    removeTime,
  } = useDateStore((state) => state);

  // clear time from state on each day change
  React.useEffect(() => {
    removeTime();
  }, [selectedDate]);

  // check if date is selected is same like current
  const isSelected = moment(date).isSame(selectedDate, "day");

  // get days the person is not working
  const nonWorkDays = [];
  doctor.availability.map((doctor) => {
    if (doctor.onDuty === null) {
      nonWorkDays.push(doctor.day);
    }
  });
  // is today in nonWorkdays
  const isTodayInNonWorkDays = nonWorkDays.some(
    (day) => day === moment(date).format("ddd")
  );

  const handleDateChange = () => {
    let todayDate = moment().format("YYYY-MM-DD");
    let dateSelected = moment(date).format("YYYY-MM-DD");

    // if date selected is old then refresh screen
    if (moment(dateSelected).isBefore(todayDate, "day")) {
      navigation.dispatch(StackActions.replace("Details", { doctor }));
    }

    if (!isTodayInNonWorkDays) {
      setDate(date);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleDateChange}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? "pink" : "#fff",
        },
      ]}
    >
      <Text
        style={{
          opacity: isTodayInNonWorkDays ? 0.2 : 1,
        }}
      >
        {day}
      </Text>
      <Text
        style={{
          opacity: isTodayInNonWorkDays ? 0.2 : 1,
        }}
      >
        {dateNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default DayComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 6,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 6,
  },
});
