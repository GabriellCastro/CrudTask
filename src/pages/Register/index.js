import React, { useState } from 'react';
import Lottie from 'lottie-react-native';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import firebase from '../../config/firebaseconfig';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import task from '../../../task.json';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorRegister, setErrorRegister] = useState('');

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid })
      })
      .catch((error) => {
        setErrorRegister(true)
      });
  }

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
        errorRegister === true ? (
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
            style={styles.buttonRegister}
          >
            <Text style={styles.textButtonRegister}>Cadastre-se</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={register}
            style={styles.buttonRegister}
          >
            <Text style={styles.textButtonRegister}>Cadastre-se</Text>
          </TouchableOpacity>
        )
      }

      <Text style={styles.registration}>
        Você já é cadastrado?
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("Login")}
        >
          Login Aqui!
        </Text>
      </Text>

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
