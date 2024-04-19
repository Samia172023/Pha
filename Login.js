import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Button,
  Image,
  SafeAreaView,
} from "react-native";


const LoginForm = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("./assets/Back.png")}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      ),
      headerTitle: "Login",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20
      },
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'white', // Couleur de fond de la barre de navigation
        height: 90, // Hauteur de la barre de navigation
        borderBottomWidth: 0, // Épaisseur de la ligne de séparation
      },
    });
  }, [navigation]);

  const handleBack = () => {
    navigation.navigate("LoginSignUpForm"); // Navigate to SignUp screen
  };
  const handleOpeningPage = () => {
    navigation.navigate("OpeningPage"); // Navigate to SignUp screen
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navigate to SignUp screen
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(true);

  const validateEmail = (email) => {
    // Expression régulière pour valider le format de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const renderEmailIcon = () => {
    if (validateEmail(email)) {
      return (
        <Image
          style={styles.icon}
          source={require("./assets/emailValid.png")}
          resizeMode="contain"
        />
      );
    } else {
      return (
        <Image
          style={styles.icon}
          source={require("./assets/email.png")}
          resizeMode="contain"
        />
      );
    }
  };

  const renderEmailCheckIcon = () => {
    if (validateEmail(email)) {
      return (
        <Image
          style={styles.valid}
          source={require("./assets/Check.png")}
          resizeMode="contain"
        />
      );
    } else {
      return null;
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password?");
  };

  const handleLogin = () => {
    var SearchAPIURL = "http://172.20.10.10/api/search.php";

    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json", // This is important for sending JSON data
    };
    var Data = {
      email: email,
      password: password,
    };
    fetch(SearchAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Login response:", response);
        if (response && Object.keys(response).length > 0) {
          Alert.alert("Success", "Login successful");
          setTimeout(() => {
            handleOpeningPage();
          }, 1500);             

        } else {
          setValidPassword(false);
          setTimeout(() => {
            setValidPassword(true);
          }, 3000); // 3 secondes
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const a = () => {
    console.log(email, password);
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container1}>
        {renderEmailIcon()}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        {renderEmailCheckIcon()}
      </View>
      <View style={!validPassword ? styles.container2Invalid : styles.container2}>
        <Image
          style={styles.icon}
          source={
  !validPassword 
  ? require("./assets/LockInvalid.png") 
  : password && password.length > 4
    ? require("./assets/LockValid.png")
    : require("./assets/Lock.png")
}


          resizeMode="contain"
        />

        <TextInput
          style={!validPassword ? styles.inputInvalid : styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            style={styles.icon}
            source={require("./assets/See.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {!validPassword && (
        <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 13, color: '#FF5C5C', marginLeft: 35 }}> *The password or email you entered is wrong </Text>
      )}
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleLogin();
            a();
          }}
        >
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.Account}> Don’t have an account ? <Text style={styles.SignUp} onPress={handleSignUp}>Sign Up</Text> </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#F9FAFB",
    borderRadius: 28,
    color: "#A1A8B0",
    height: 57,
    width: 360,
    borderWidth: 1,
    marginBottom: 0,
    borderColor: "#E5E7EB",
    paddingHorizontal: 10,
  },
  container2: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#F9FAFB",
    borderRadius: 28,
    color: "#A1A8B0",
    height: 57,
    width: 360,
    borderWidth: 1,
    marginBottom: 0,
    borderColor: "#E5E7EB",
    paddingHorizontal: 10,
  },
  container2Invalid: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "#F9FAFB",
    borderRadius: 28,
    color: "#A1A8B0",
    height: 57,
    width: 360,
    borderWidth: 1,
    marginBottom: 0,
    borderColor: "#E5E7EB",
    paddingHorizontal: 10,
    borderColor: "red", // Bordure rouge pour indiquer l'invalidité
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 10,
  },

  input: {
    flex: 1,
    width: 10,
    height: 40,
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 16,
  },
  inputInvalid: {
    flex: 1,
    width: 10,
    height: 40,
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 16,
    borderColor: "red", // Bordure rouge pour indiquer l'invalidité
  },
  buttonTextLogin: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  valid: {
    width: 25,
    height: 16,
    marginRight: 10,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#209F84",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginLeft: 25,
    marginRight: 25,
    height: 57,
    width: 360,
    marginBottom: 0,
    paddingHorizontal: 10,
  },
  Account: {
    marginTop: 20,
    textAlign: "center",
    color: "#717784",
    fontWeight: '500',
    fontSize: 15,
  },
  SignUp: {
    marginTop: 20,
    textAlign: "center",
    color: "#199A8E",
    fontWeight: '500',
    fontSize: 15,
  }
});

export default LoginForm;
