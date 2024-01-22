import "react-native-gesture-handler";
import ProvidersWrapper from "./ProvidersWrapper";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { MainNavigator } from "@navigation/navigators";
function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <MainNavigator />
    </View>
  );
}
const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};
export default AppWithProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
