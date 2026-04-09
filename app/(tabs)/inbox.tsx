import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function InboxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>All activity</Text>
      <View style={styles.emptyContainer}>
        <Ionicons name="chatbox-ellipses-outline" size={80} color="#333" />
        <Text style={styles.emptyText}>Notifications will appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 50 },
  header: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#666', marginTop: 10 }
});