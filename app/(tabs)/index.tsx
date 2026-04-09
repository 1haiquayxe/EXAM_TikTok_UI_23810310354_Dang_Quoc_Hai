// app/(tabs)/index.tsx
import React, { useState } from 'react'; // Import useState
import { FlatList, View, Dimensions, Platform, StyleSheet } from 'react-native';
import VideoPost from '../../components/tiktok/VideoPost'; 
import TopHeader from '../../components/tiktok/TopHeader'; // Import TopHeader vào đây

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web' && windowWidth > 500;
const FRAME_HEIGHT = windowHeight - 60; // Khớp với VideoPost frameHeight

// --- DỮ LIỆU TÁCH BIỆT ---

// Dữ liệu cho trang Following (Chỉ có Karenne)
const followingData = [
  { 
    id: '1', 
    username: '@karennne', 
    date: '1-28',
    image: require('../../assets/images/tiktok/video_following.png'), 
    avatar: require('../../assets/images/tiktok/avatar_karen.jpg'),
    likes: '4445',
    comments: '64',
    caption: '#avicii #wflove',
    music: 'Avicii - Waiting For Love (ft. Simon Aldred)'
  },
  // Bạn có thể thêm nhiều video của Karenne vào đây nếu muốn vuốt xuống
];

// Dữ liệu cho trang For You (Chỉ có Craig Love)
const forYouData = [
  { 
    id: '2', 
    username: '@craig_love', 
    date: '2-10',
    image: require('../../assets/images/tiktok/video_foryou.png'), 
    avatar: require('../../assets/images/tiktok/avatar_craig.jpg'),
    likes: '328.7K',
    comments: '578',
    caption: 'The most satisfying job #fyp #satisfying',
    music: 'Roddy Ricch - The Box'
  },
  // Thêm video khác của Craig Love hoặc người khác vào đây
];

export default function HomeScreen() {
  // Trạng thái để quản lý tab đang chọn ('following' hoặc 'foryou')
  // Mặc định chọn 'following' để hiện ảnh Karenne trước
  const [activeTab, setActiveTab] = useState<'following' | 'foryou'>('following');

  // Quyết định danh sách dữ liệu nào sẽ được hiển thị dựa trên activeTab
  const currentData = activeTab === 'following' ? followingData : forYouData;

  return (
    <View style={styles.container}>
      {/* Đưa TopHeader lên mức cao nhất để nó không bị trượt khi vuốt video */}
      {/* Truyền trạng thái activeTab và hàm setActiveTab xuống */}
      <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <FlatList
        data={currentData} // Dùng danh sách dữ liệu đã được chọn
        renderItem={({ item }) => <VideoPost item={item} />}
        keyExtractor={(item) => item.id}
        
        // Cấu hình vuốt từng trang (Snap)
        pagingEnabled 
        snapToInterval={FRAME_HEIGHT} 
        snapToAlignment="start"
        decelerationRate="fast"
        
        // Tối ưu hiệu năng
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative', // Quan trọng để TopHeader absolute nằm đúng chỗ
  },
});