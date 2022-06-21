import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import useDateStore from "../zustand/store";
import { StackActions, useNavigation } from "@react-navigation/native";

const HourComponent = ({ hour, doctor }) => {
  const navigation = useNavigation();
  const { date, setTime, time } = useDateStore((state) => state);

  const isSelected = time === hour.hour;

  const handleSelect = () => {
    // dates comparison
    let dateFromState = moment(date).format("DD-MM-YYYY");
    let todayDate = moment().format("DD-MM-YYYY");
    // hour comparison
    let nowHour = Number(moment().format("HH:mm").replace(":", ""));
    const itemHour = Number(hour.hour.replace(":", ""));

    if (dateFromState === todayDate && itemHour < nowHour) {
      // reload screen
      navigation.dispatch(StackActions.replace("Details", { doctor }));
    } else {
      if (hour.available) {
        setTime(hour.hour);
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={[
        styles.container,
        {
          backgroundColor: isSelected ? "pink" : "#fff",
        },
      ]}
    >
      <Text
        style={{
          color: hour.available ? "black" : "gray",
          opacity: hour.available ? 1 : 0.4,
        }}
      >
        {hour.hour}
      </Text>
    </TouchableOpacity>
  );
};

export default HourComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
});
