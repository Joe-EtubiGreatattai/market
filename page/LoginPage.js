import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"; // Import sendPasswordResetEmail
import { auth } from "./../firebaseConfig";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";



const { width } = Dimensions.get("window");

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const [animation] = useState(new Animated.Value(0));


  // Animation for the form
  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login", "Login successful");
      navigation.navigate("Home");
    } catch (error) {
      const errorMessage = error.message;
      Alert.alert("Error", `Login failed: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email to reset the password");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Password Reset", "A password reset email has been sent!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    Alert.alert("Google Sign Up", "Google sign-up is not implemented yet");
  };

  const handleFacebookSignUp = () => {
    Alert.alert("Facebook Sign Up", "Facebook sign-up is not implemented yet");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./../assets/logo.png")} style={styles.logo} />
      </View>
      <Animated.View
        style={[
          styles.formContainer,
          {
            opacity: animation,
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle secure text entry
          />
          <TouchableOpacity
            style={styles.togglePasswordButton}
            onPress={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            <Text style={styles.togglePasswordText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.loginButton, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignUp}
        disabled={loading }
      >
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.googleButtonText}>
          {loading ? "Signing in..." : "Sign in with Google"}
        </Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.facebookButton}
          onPress={handleFacebookSignUp}
        >
          <FontAwesome name="facebook" size={24} color="white" />
          <Text style={styles.facebookButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 70,
    resizeMode: "contain",
  },
  formContainer: {
    width: width * 0.85,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  togglePasswordButton: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  togglePasswordText: {
    color: "#FF6F00",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#B0BEC5",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DB4437",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  googleButtonText: {
    color: "#fff",
    marginLeft: 10,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4267B2",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  facebookButtonText: {
    color: "#fff",
    marginLeft: 10,
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#FF6F00",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default LoginPage;
