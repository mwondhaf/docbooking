import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useDateStore from "../zustand/store";

const BookingScreen = ({ route }) => {
  const { doctor } = route.params;

  const { date, time } = useDateStore((state) => state);

  return (
    <View style={styles.container}>
      <Text>BookingScreen</Text>
      <View>
        <Text>Your are booking {doctor.name}</Text>
        <Text>
          For {date.toDateString()} at {time}
        </Text>
      </View>
      <Button {...{ title: "Pay Consultation Fees" }} />
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
