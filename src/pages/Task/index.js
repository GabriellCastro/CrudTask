import React, { useEffect, useState } from "react";
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation }) {
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
    <View style={styles.container}>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        data={taks}
        renderItem={({ item }) => {
          return (
            <View style={style.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => deleteTask(item.id)}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={style.DescriptionTask}
                onPress={() => navigation
                  .navigate("Details", {
                    id: item.id,
                    description: item.description,
                  })
                }
              >
                {item.description}
              </Text>
            </View>
          )
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
