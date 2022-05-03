import React from "react";
import { View, Button, TextInput } from "react-native";

const CommentForm = (props) => {
  return (
    <View>
      <TextInput
        testID={"input"}
        value={props.value}
        onChangeText={props.onChange}
      />
      <Button testID={"submit"} onPress={props.onSubmit} title={"Submit"} />
    </View>
  );
};

export default CommentForm;
