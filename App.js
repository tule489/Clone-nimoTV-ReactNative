import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./Component/Home";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Follow from "./Component/Follow";
import Me from "./Component/Me/Index";
import Navbar from "./Component/Navbar/Index";
import Login from "./Component/Login/Index";
import Letter from "./Component/Letter/Letter";
import Discover from "./Component/Discover/Discover";

export default function App() {
  const [key, setKey] = useState(1);

  const form = {
    1: <Home />,
    2: <Discover />,
    3: <Follow />,
    4: <Letter />,
    5: <Me setKey={setKey} />,
    10: <Login setKey={setKey} />,
  };

  return (
    <SafeAreaView style={styles.container}>
      {form[key]}
      <View style={{ height: 55 }}></View>
      {key < 10 && <Navbar setKey={setKey} keys={key} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    position: "relative",
  },
});
