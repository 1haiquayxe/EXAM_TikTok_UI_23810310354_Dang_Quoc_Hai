// components/tiktok/TopHeader.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Định nghĩa kiểu dữ liệu cho props
interface TopHeaderProps {
  activeTab: 'following' | 'foryou';
  setActiveTab: (tab: 'following' | 'foryou') => void;
}

export default function TopHeader({ activeTab, setActiveTab }: TopHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Nút Following */}
      <TouchableOpacity onPress={() => setActiveTab('following')}>
        <Text style={[
          styles.text, 
          activeTab === 'following' && styles.activeText // Tô đậm nếu được chọn
        ]}>
          Following
        </Text>
        {/* Thanh gạch chân nếu được chọn */}
        {activeTab === 'following' && <View style={styles.activeUnderline} />}
      </TouchableOpacity>

      <View style={styles.separator} />

      {/* Nút For You */}
      <TouchableOpacity onPress={() => setActiveTab('foryou')}>
        <Text style={[
          styles.text, 
          activeTab === 'foryou' && styles.activeText // Tô đậm nếu được chọn
        ]}>
          For You
        </Text>
        {/* Thanh gạch chân nếu được chọn */}
        {activeTab === 'foryou' && <View style={styles.activeUnderline} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50, // Căn chỉnh theo tai thỏ điện thoại
    alignSelf: 'center',
    zIndex: 10, // Đảm bảo nằm đè lên video
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    opacity: 0.6, // Mờ đi khi không được chọn
    textAlign: 'center',
  },
  activeText: {
    opacity: 1, // Hiện rõ khi được chọn
  },
  activeUnderline: {
    height: 2,
    backgroundColor: '#fff',
    width: 30, // Chiều rộng thanh gạch chân
    alignSelf: 'center',
    marginTop: 5,
  },
  separator: {
    width: 1,
    height: 15,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    opacity: 0.3,
  },
});