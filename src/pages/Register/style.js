import { PlatformColor, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "ios" ? 0 : 50
  },

  title: {
    fontSize: 48,
    color: '#f92e6a',
    marginBottom: 10,
    fontWeight: "bold"
  },

  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#f92e6a',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#4d5156'
  },

  buttonRegister: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f92e6a',
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 10
  },

  textButtonRegister: {
    color: '#fff',
  },

  contentAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  warningAlert: {
    paddingLeft: 10,
    color: 'black',
    fontSize: 16
  },

  registration: {
    marginTop: 20,
    color: '#4d5156'
  },

  linkSubscribe: {
    color: '#1877f2',
    fontSize: 16
  }
});

export default styles;