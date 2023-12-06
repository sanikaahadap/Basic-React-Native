import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Count numbers</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Counter: {count}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={incrementCounter}
        >
          <Text style={styles.buttonText}>Click to increase counter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Basic Counter </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    padding: 10,
    backgroundColor: '#2980b9',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default App;