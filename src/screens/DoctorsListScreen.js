import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { doctors } from "../data/dummyData";
import useDateStore from "../zustand/store";
import { useIsFocused } from "@react-navigation/native";

const DoctorsListScreen = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const { removeDate } = useDateStore((state) => state);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    removeDate();
    setData(doctors);
  }, [isFocused]);

  return (
    <View>
      <Text>DoctorsListScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { doctor: item })}
            style={styles.doctor}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DoctorsListScreen;

const styles = StyleSheet.create({
  doctor: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
});
