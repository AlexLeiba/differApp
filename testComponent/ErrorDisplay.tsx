import React from "react";
import { View, Text } from "react-native";

const ErrorDisplay = (props) => {
  return (
    <View style={{ flex: 1 }} testID={"wrapper"}>
      <Text style={{ color: "red" }} testID={"text"}>
        {props.value}
      </Text>
    </View>
  );
};

export default ErrorDisplay;
