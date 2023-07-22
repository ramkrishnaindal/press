import { useDeviceContext, useAppColorScheme } from "twrnc";
import tw from "twrnc";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import {
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import SignUp from "./screens/signup";
import SignIn from "./screens/signin";
import Home from "./screens/Home";
export default function App() {
  // 1️⃣  opt OUT of listening to DEVICE color scheme events
  useDeviceContext(tw, { withDeviceColorScheme: false });

  // 2️⃣  use the `useAppColorScheme` hook to get a reference to the current color
  // scheme, with some functions to modify it (triggering re-renders) when you need to
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  /* 3️⃣ use one of the setter functions, like `toggleColorScheme` in your app */

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: "Sign In" }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: "Sign Up" }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      {/* <View style={{ backgroundColor: "pink", flex: 1 }}>
        <TouchableOpacity onPress={toggleColorScheme}>
          <Text style={tw`text-black dark:text-white p-[100px]`}>
            Switch Color Scheme
          </Text>
        </TouchableOpacity>
      </View> */}
      <Toast />
    </SafeAreaView>
  );
}
