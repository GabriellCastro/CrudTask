import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "../../config/firebaseconfig";
import styles from "./style";

export default function Details({ navigation, route }) {
  const [editDescription, setEditDescription] = useState(route.params.description);
  const idTask = route.params.id;

  const database = firebase.firestore();

  function editTask(id) {
    database.collection(route.params.idUser).doc(id).update({
      description: editDescription,
    });
    navigation.navigate("Task");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React Native 📚"
        onChangeText={setEditDescription}
        value={editDescription}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => editTask(idTask)}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}
