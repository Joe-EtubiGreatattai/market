import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './../component/SettingsHeader';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (feedback.trim() === '') {
      Alert.alert('Validation', 'Please provide your feedback before submitting.');
      return;
    }

    // Handle form submission logic (e.g., API call)
    Alert.alert('Feedback Sent', 'Thank you for your feedback!');

    // Clear inputs
    setFeedback('');
    setName('');
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
    <Header title={"Feed back"}/>
      <Text style={styles.header}>We value your feedback</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name (optional)"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email (optional)"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.feedbackInput]}
        placeholder="Write your feedback..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
    marginHorizontal:15
  },
  feedbackInput: {
    height: 120, // larger input for feedback
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1F6CAE',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginHorizontal:15
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackPage;
