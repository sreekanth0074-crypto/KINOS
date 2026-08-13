import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={40} color="#00FFCC" />
        </View>
        <Text style={styles.username}>CyberKinos</Text>
        <Text style={styles.email}>kinos.creator@network.io</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="bookmark-outline" size={20} color="#00FFCC" style={styles.menuIcon} />
          <Text style={styles.menuText}>Watch History & Saved</Text>
          <Ionicons name="chevron-forward" size={18} color="#8A99AD" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="color-palette-outline" size={20} color="#00FFCC" style={styles.menuIcon} />
          <Text style={styles.menuText}>Neon Theme Settings</Text>
          <Ionicons name="chevron-forward" size={18} color="#8A99AD" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={20} color="#00FFCC" style={styles.menuIcon} />
          <Text style={styles.menuText}>App Settings</Text>
          <Ionicons name="chevron-forward" size={18} color="#8A99AD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#121826',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#00FFCC',
    marginBottom: 12,
  },
  username: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#8A99AD',
    fontSize: 13,
  },
  menuContainer: {
    marginTop: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121826',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1F293D',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    color: '#FFF',
    fontSize: 15,
  },
});
