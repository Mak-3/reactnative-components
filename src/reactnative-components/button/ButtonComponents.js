import React from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, Expo on Web!</Text>
      <Button title="Press me" onPress={() => alert("Button pressed!")} />
    </View>
  );
};

export default App;