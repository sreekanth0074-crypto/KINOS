import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrendingScreen() {
  const trendingItems = [
    { id: '1', title: 'Top 10 Futuristic UI Design Trends', views: '450K views', time: '2 days ago' },
    { id: '2', title: 'Building Mobile Apps with AI in 2026', views: '320K views', time: '1 day ago' },
    { id: '3', title: 'Synthwave & Cyberpunk Mix - Live Stream', views: '1.2M views', time: 'Streaming now' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="trending-up" size={22} color="#00FFCC" />
        <Text style={styles.headerTitle}>TRENDING</Text>
      </View>

      <ScrollView contentContainerStyle={styles.feed}>
        {trendingItems.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankText}>#{index + 1}</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>{item.views} • {item.time}</Text>
            </View>
          </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 8,
    letterSpacing: 1,
  },
  feed: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#121826',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#00FFCC33',
    alignItems: 'center',
  },
  rankBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00FFCC22',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#00FFCC',
  },
  rankText: {
    color: '#00FFCC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardInfo: {
    flex: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  meta: {
    color: '#8A99AD',
    fontSize: 12,
  },
});
