import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { auth } from './../firebaseConfig'; // Import auth from firebaseConfig
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from "firebase/auth";

const { width } = Dimensions.get("window");

const SignUpPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [role, setRole] = useState("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [animation] = useState(new Animated.Value(0));

  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto(result.uri);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !username || !course || !name || !school) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  
    setIsLoading(true); // Start loading
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await ReactNativeAsyncStorage.setItem('userProfile', JSON.stringify({
        username,
        course,
        name,
        school,
        role,
        profilePhoto
      }));
  
      Alert.alert("Sign Up Successful", `Welcome ${username}!`);
      navigation.navigate("Login"); // Navigate to the login page
  
    } catch (error) {
      const errorMessage = error.message;
      Alert.alert("Sign Up Error", errorMessage);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  

  const handleGoogleSignUp = () => {
    Alert.alert("Google Sign Up", "Google sign-up is not implemented yet");
  };

  const handleFacebookSignUp = () => {
    Alert.alert("Facebook Sign Up", "Facebook sign-up is not implemented yet");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
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
            <TouchableOpacity
              style={styles.photoContainer}
              onPress={handlePickImage}
            >
              {profilePhoto ? (
                <Image source={{ uri: profilePhoto }} style={styles.photo} />
              ) : (
                <Feather name="camera" size={30} color="#888" />
              )}
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Feather name={passwordVisible ? "eye-off" : "eye"} size={20} color="#888" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Course of Study"
              placeholderTextColor="#888"
              value={course}
              onChangeText={setCourse}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#888"
              value={name}
              onChangeText={setName}
            />

            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={school}
                style={styles.picker}
                onValueChange={(itemValue) => setSchool(itemValue)}
              >
                <Picker.Item label="Select School" value="" />
                <Picker.Item label="School A" value="School A" />
                <Picker.Item label="School B" value="School B" />
                <Picker.Item label="School C" value="School C" />
              </Picker>
            </View>

            <View style={styles.roleContainer}>
              <TouchableOpacity
                style={[
                  styles.roleButton,
                  role === "buyer" && styles.selectedRole,
                ]}
                onPress={() => setRole("buyer")}
              >
                <Text style={styles.roleText}>Buyer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.roleButton,
                  role === "seller" && styles.selectedRole,
                ]}
                onPress={() => setRole("seller")}
              >
                <Text style={styles.roleText}>Seller</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.googleButton}
              onPress={handleGoogleSignUp}
            >
              <AntDesign name="google" size={24} color="white" />
              <Text style={styles.googleButtonText}>Sign Up with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.facebookButton}
              onPress={handleFacebookSignUp}
            >
              <FontAwesome name="facebook" size={24} color="white" />
              <Text style={styles.facebookButtonText}>Sign Up with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.signUpButton, isLoading && styles.buttonDisabled]} // Apply disabled style
              onPress={handleSignUp}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#FFF" /> // Show loader
              ) : (
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inner: {
    flex: 1,
    width: width * 0.85,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width:"100%"
  },
  eyeButton: {
    position: "absolute",
    right: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  roleButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedRole: {
    backgroundColor: "#FF6F00",
    borderColor: "#FF6F00",
  },
  roleText: {
    color: "#fff",
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
  signUpButton: {
    backgroundColor: "#FF6F00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#6c757d",
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SignUpPage;
