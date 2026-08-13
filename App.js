import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import TrendingScreen from './screens/TrendingScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'Trending':
        return <TrendingScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />
      
      <View style={styles.content}>
        {renderScreen()}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
          <Ionicons name={activeTab === 'Home' ? 'home' : 'home-outline'} size={24} color={activeTab === 'Home' ? '#00FFCC' : '#8A99AD'} />
          <Text style={[styles.navText, activeTab === 'Home' && styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Search')}>
          <Ionicons name={activeTab === 'Search' ? 'search' : 'search-outline'} size={24} color={activeTab === 'Search' ? '#00FFCC' : '#8A99AD'} />
          <Text style={[styles.navText, activeTab === 'Search' && styles.activeNavText]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Trending')}>
          <Ionicons name={activeTab === 'Trending' ? 'trending-up' : 'trending-up-outline'} size={24} color={activeTab === 'Trending' ? '#00FFCC' : '#8A99AD'} />
          <Text style={[styles.navText, activeTab === 'Trending' && styles.activeNavText]}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Profile')}>
          <Ionicons name={activeTab === 'Profile' ? 'person' : 'person-outline'} size={24} color={activeTab === 'Profile' ? '#00FFCC' : '#8A99AD'} />
          <Text style={[styles.navText, activeTab === 'Profile' && styles.activeNavText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  content: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#121826',
    borderTopWidth: 1,
    borderTopColor: '#1F293D',
    justifyContent: 'around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#8A99AD',
    marginTop: 2,
  },
  activeNavText: {
    color: '#00FFCC',
    fontWeight: 'bold',
  },
});
