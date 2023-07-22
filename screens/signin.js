import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Toast from "react-native-toast-message";
import { TextInput, List, Button } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
// import { navigate } from "../node_modules/@react-navigation/routers/src/CommonActions";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      Toast.show({
        type: "error",
        text1: "Oops",
        text2: "Data not filled",
      });
      return;
    }
    console.log({
      email,
      password,
      // role,
    });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      Toast.show({
        type: "success",
        text1: "Sign In",
        text2: "Signed in successfully",
      });
      navigation.navigate("Home");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Toast.show({
        type: "error",
        text1: "Oops",
        text2: errorMessage,
      });
    }
  };

  return (
    <View style={tw`flex justify-center bg-blue-200 py-3 px-3 flex-1`}>
      <View style={tw`px-[50px] py-[200px] flex justify-start `}>
        <Text style={tw`text-2xl mb-3`}>Sign Up / Register</Text>
        <View>
          <TextInput
            label="Email"
            value={email}
            inputMode="email"
            keyboardType="email-address"
            style={tw`mb-3`}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Password"
            value={password}
            style={tw`mb-3`}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <Button style={tw`mt-3`} mode="contained" onPress={handleSubmit}>
            Sign In
          </Button>
          <Button
            // icon="camera"
            mode="text"
            onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
          >
            First time user. Sign up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
