import { View, Text, KeyboardAvoidingView } from 'react-native';

import styles from './style';

export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
