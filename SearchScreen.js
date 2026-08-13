import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const recentSearches = ['Cyberpunk gameplay', 'React Native tutorial', 'Lo-fi beats', 'Tech news 2026'];

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#8A99AD" style={styles.searchIcon} />
        <TextInput 
          style={styles.input}
          placeholder="Search Kinos..."
          placeholderTextColor="#8A99AD"
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={20} color="#8A99AD" />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>RECENT SEARCHES</Text>
        {recentSearches.map((item, index) => (
          <TouchableOpacity key={index} style={styles.recentItem}>
            <Ionicons name="time-outline" size={18} color="#8A99AD" style={styles.recentIcon} />
            <Text style={styles.recentText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
    padding: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121826',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00FFCC33',
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#FFF',
    fontSize: 15,
  },
  content: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#8A99AD',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#121826',
  },
  recentIcon: {
    marginRight: 12,
  },
  recentText: {
    color: '#FFF',
    fontSize: 14,
  },
});
