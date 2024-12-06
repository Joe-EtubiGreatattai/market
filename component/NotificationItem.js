import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationItem = ({ title, message, timestamp }) => {
  return (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
      <Text style={styles.notificationTimestamp}>{new Date(timestamp).toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: '#888',
  },
});

export default NotificationItem;
