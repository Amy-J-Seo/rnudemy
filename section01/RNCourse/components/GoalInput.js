import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Ionicons
          style={styles.closeIcon}
          name="md-close"
          size={32}
          color="#696969"
          onPress={props.closeModal}
        />
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#7e54b4" />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.closeModal} color="#e95da3" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  closeIcon: {
    marginBottom: 10,
    alignSelf: "flex-end",
    marginRight: 50,
  },
  btnContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  btn: {
    width: "30%",
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    color: "#120438",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
