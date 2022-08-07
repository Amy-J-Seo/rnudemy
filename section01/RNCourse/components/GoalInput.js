import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.closeModal} />
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
    marginTop: 100,
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
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
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    marginBottom: 10,
  },
});
