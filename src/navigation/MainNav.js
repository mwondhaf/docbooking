import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../screens/BookingScreen";
import DetailsScreen from "../screens/DetailsScreen";
import DoctorsListScreen from "../screens/DoctorsListScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DoctorsList" component={DoctorsListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
