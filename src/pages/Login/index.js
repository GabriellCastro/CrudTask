import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import task from '../../../task.json';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const loginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid });
        console.log(user)
      })
      .catch((error) => {
        setErrorLogin(true)
        console.log(error)
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user Login', user)
      if (user) {
        navigation.navigate("Task", { idUser: user.uid })
      }
    });
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Lottie
        autoPlay
        loop
        style={{ width: 300, height: 200 }}
        source={task} />
      <TextInput
        placeholder='Email 📩'
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Password 🔑'
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />

      {
        errorLogin === true ? (
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#f92e6a"
            />
            <Text style={styles.warningAlert}>
              Email ou Senha invalidos!
            </Text>
          </View>
        ) : (
          <View />
        )
      }

      {
        email === "" || password === "" ? (
          <TouchableOpacity
            disabled={true}
            style={styles.buttonLogin}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={loginFirebase}
            style={styles.buttonLogin}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        )
      }

      <Text style={styles.registration}>
        Você não é casdastrado?
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("Register")}
        >
          Cadastre-se Agora!
        </Text>
      </Text>

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
