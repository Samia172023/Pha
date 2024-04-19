import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const LoginSignUpForm = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navigate to SignUp screen
  };

  const handleLogin = () => {
    navigation.navigate("Login"); // Navigate to Login screen
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={styles.iHealthLogo}
          source={require("./assets/we.png")}
          resizeMode="contain"
        />
        <Text style={styles.iHealthText}> iHealth</Text>

        <Text style={styles.title}>Let's get started!</Text>
        <Text style={styles.subtitle}>
          Login to enjoy the features we've provided, and stay healthy!
        </Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <View style={styles.buttonTextSignContainer}>
            <Text style={styles.buttonTextSign}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iHealthLogo: {
    width: 2000, // Adjust this value to ensure the entire logo is visible
    height: 100,
    marginLeft: -34,
    marginBottom: -35,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  iHealthText: {
    fontWeight: "bold",
    color: "#209F84",
    fontSize: 27,
    textAlign: "center", // Center the text horizontally
    lineHeight: 100, // Adjust the line height to center vertically (assuming the height of the logo is 100)
    marginBottom: 20, // Adjust as needed
  },

  subtitle: {
    fontSize: 18,
    color: "#717784",
    textAlign: "center",
    marginBottom: 40,
    marginLeft: 39,
    marginRight: 32,
    alignItems: "center", // Align the text horizontally
  },

  loginButton: {
    backgroundColor: "#209F84",
    borderRadius: 32,
    width: 263,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: "white", // Set the background color to white
    borderRadius: 32,
    width: 263,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    color: "#199A8E", // Set the text color to #199A8E
  },

  buttonTextLogin: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextSignContainer: {
    borderWidth: 2,
    borderColor: "#199A8E",
    borderRadius: 32,
    width: 263,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
  },
  buttonTextSign: {
    color: "#199A8E",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default LoginSignUpForm;
