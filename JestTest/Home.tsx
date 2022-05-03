import React from "react";
import { View, TextInput } from "react-native";
import { Button } from "../components";

export function Home() {
  function handlePress() {}
  return (
    <View>
      <TextInput
        testID="input"
        onChangeText={() => {}}
        placeholder="text"
        keyboardType="numeric"
        style={{ height: 20, borderRadius: 5 }}
      />
      <Button
        title="click"
        width={200}
        handlePress={() => {
          handlePress;
        }}
        colorContainer={"red"}
        colorTitle={"black"}
        testID="button"
      />
    </View>
  );
}
