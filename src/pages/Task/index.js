import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

import firebase from "../../config/firebaseconfig";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation, route }) {
  const [taks, setTasks] = useState([]);

  const database = firebase.firestore();

  function deleteTask(id) {
    console.log(id, 'aqui id')
    console.log(route.params.idUser, 'aqui user id')
    database.collection(route.params.idUser).doc(id).delete();
  }

  function logout() {
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login")
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    database.collection(route.params.idUser)
      .onSnapshot((query) => {
        const listTask = [];
        query.forEach(element => {
          listTask.push({ ...element.data(), id: element.id })
        });
        console.log(listTask)
        setTasks(listTask);
      });
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={taks}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => deleteTask(item.id)}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() => navigation
                  .navigate("Details", {
                    idUser: route.params.idUser,
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
        onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => logout()}
      >
        <Text style={styles.iconButtonLogout}>
          <MaterialCommunityIcons
            name="location-exit"
            size={30}
            color="#F92E6A"
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
