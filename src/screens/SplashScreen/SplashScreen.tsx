import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("Home");
  }, 100);

  return (
    <View style={{ flex: 1 }}>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
