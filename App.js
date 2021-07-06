import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginTextContainer}>
        <Text style={styles.LoginText}>Log in</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry={true}
          placeholder="Password" />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <Text style={styles.signUpText}>SignUp</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 50
  },

  LoginText: {
    fontSize: 50,
    color: "#5100ad",

  },

  loginTextContainer: {
    marginBottom: 30
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20

  },

  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8"
  },

  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50
  },
  buttonText: {
    color: "white",
    fontSize: 25
  },

  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center"

  },

  noAccountText: {
    marginRight: 10,
    fontSize: 16
  },

  signUpText: {
    fontSize: 16,
    color: "#5100ad"
  }
})

