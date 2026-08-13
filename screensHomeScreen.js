import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const categories = ['All', 'Music', 'Gaming', 'Tech', 'Film', 'Sports', 'Anime'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>KINOS</Text>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={22} color="#00FFCC" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} style={[styles.chip, index === 0 && styles.activeChip]}>
              <Text style={[styles.chipText, index === 0 && styles.activeChipText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.feedContainer}>
        <Text style={styles.sectionTitle}>FEATURED</Text>
        
        <View style={styles.card}>
          <View style={styles.thumbnailContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80' }} 
              style={styles.thumbnail} 
            />
            <View style={styles.playButtonOverlay}>
              <Ionicons name="play" size={28} color="#00FFCC" />
            </View>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>2:04</Text>
            </View>
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.videoTitle}>Cyberpunk 2077 - Official Cinematic Trailer Remastered</Text>
            <Text style={styles.videoMeta}>Kinos Media • 121.4K views • 12h ago</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00FFCC',
    letterSpacing: 2,
  },
  notificationBtn: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#121826',
    borderWidth: 1,
    borderColor: '#00FFCC33',
  },
  categoryContainer: {
    height: 50,
  },
  categoryScroll: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#121826',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#1F293D',
  },
  activeChip: {
    backgroundColor: '#00FFCC22',
    borderColor: '#00FFCC',
  },
  chipText: {
    color: '#8A99AD',
    fontSize: 14,
  },
  activeChipText: {
    color: '#00FFCC',
    fontWeight: 'bold',
  },
  feedContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#8A99AD',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#121826',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#00FFCC33',
    marginBottom: 16,
  },
  thumbnailContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
    backgroundColor: '#1F293D',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playButtonOverlay: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    backgroundColor: '#0B0F19AA',
    padding: 12,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#00FFCC',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#0B0F19CC',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: '#FFF',
    fontSize: 10,
  },
  cardDetails: {
    padding: 12,
  },
  videoTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  videoMeta: {
    color: '#8A99AD',
    fontSize: 12,
  },
});
