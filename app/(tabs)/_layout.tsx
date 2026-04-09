import { Tabs } from 'expo-router';
import React from 'react';
import { View, Platform, StyleSheet, Dimensions, Image } from 'react-native'; // 1. Đã thêm Image ở đây
import { Ionicons } from '@expo/vector-icons';

const { width: windowWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web' && windowWidth > 500;
const FRAME_WIDTH = 414; 

export default function TabLayout() {
  return (
    <View style={styles.masterContainer}>
      <View style={styles.phoneFrame}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#888',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#000',
              borderTopWidth: 0.5,
              borderTopColor: '#333',
              height: 60,
              paddingBottom: 5,
              position: 'absolute',
              bottom: 0,
              width: '100%', 
            },
          }}>
          
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
            }}
          />

          <Tabs.Screen
            name="discover"
            options={{
              title: 'Discover',
              tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
            }}
          />

          <Tabs.Screen
            name="create"
            options={{
              title: '',
              tabBarIcon: () => (
                <View style={styles.createButton}>
                  <View style={styles.leftAccent} />
                  <View style={styles.rightAccent} />
                  <View style={styles.centerButton}>
                    <Ionicons name="add" size={22} color="black" />
                  </View>
                </View>
              ),
            }}
          />

          {/* 4. Tab Inbox - ĐÃ SỬA DÙNG IMAGE CỦA BẠN */}
          <Tabs.Screen
            name="inbox"
            options={{
              title: 'Inbox',
              tabBarIcon: ({ focused }) => (
                <Image 
                  // Hãy đảm bảo đường dẫn và tên file chuẩn với file bạn đã tải
                  source={require('../../assets/images/tiktok/inbox.png')} 
                  style={{ 
                    width: 26, 
                    height: 26, 
                    // tintColor giúp icon tự đổi màu sáng/tối khi nhấn vào
                    tintColor: focused ? '#fff' : '#888' 
                  }} 
                  resizeMode="contain"
                />
              ),
            }}
          />

          <Tabs.Screen
            name="me"
            options={{
              title: 'Me',
              tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneFrame: {
    width: isWeb ? FRAME_WIDTH : '100%',
    height: isWeb ? '95%' : '100%',
    backgroundColor: '#111',
    overflow: 'hidden',
    borderWidth: isWeb ? 8 : 0,
    borderColor: '#333',
    borderRadius: isWeb ? 40 : 0,
    position: 'relative',
  },
  createButton: {
    width: 45,
    height: 28,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    width: 38,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  leftAccent: {
    position: 'absolute',
    left: 0,
    width: 15,
    height: '100%',
    backgroundColor: '#69C9D0',
    borderRadius: 8,
    zIndex: 1,
  },
  rightAccent: {
    position: 'absolute',
    right: 0,
    width: 15,
    height: '100%',
    backgroundColor: '#EE1D52',
    borderRadius: 8,
    zIndex: 1,
  },
});