import React, { useEffect, useState } from "react";
import { 
  SafeAreaView,
  View, 
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

import database from "../../config/firebaseconfig";
import styles from "./style";

export default function Task() {
  const [taks, setTasks] = useState([]);

  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Tasks")
      .onSnapshot((query) => {
        const listTask = [];
        query.forEach(element => {
          listTask.push({...element.data(), id: element.id})
        });
        setTasks(listTask);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text>Page Tasks</Text>
    </SafeAreaView>
  );
}
