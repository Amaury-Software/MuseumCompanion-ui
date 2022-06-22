import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Museum Companion</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text  style={styles.accountText}>Don't have an account yet ?</Text>
      </TouchableOpacity>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  button: {
    marginTop: '20%',
    borderRadius: 20,
    backgroundColor: '#1098ad',
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
    margin: 15
  },
  accountText: {
    marginTop: 10,
    color: 'gray',
  }
});