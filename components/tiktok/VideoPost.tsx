import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router'; // 1. Thêm import router

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const isWeb = Platform.OS === 'web' && windowWidth > 500;
const frameWidth = isWeb ? 414 : windowWidth;
const frameHeight = windowHeight - 60; 

const VideoPost = ({ item }: { item: any }) => {
  return (
    <View style={styles.container}>
      
      {/* 1. Ảnh nền (Giả Video) */}
      <Image 
        source={item.image} 
        style={styles.backgroundImage} 
        resizeMode="cover" 
      />

      {/* 2. Cột Icon tương tác bên phải */}
      <View style={styles.rightBar}>
        <View style={styles.avatarContainer}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.plusIcon}>
            <Ionicons name="add" size={14} color="white" />
          </View>
        </View>
        
        {/* Nút Like */}
        <TouchableOpacity style={styles.iconItem} activeOpacity={0.7}>
          <FontAwesome name="heart" size={35} color="white" />
          <Text style={styles.iconText}>{item.likes}</Text>
        </TouchableOpacity>

        {/* 2. CẬP NHẬT: Nút Comment - Thêm onPress để mở trang bình luận */}
        <TouchableOpacity 
          style={styles.iconItem} 
          activeOpacity={0.7}
          onPress={() => router.push('/comments')} 
        >
          <Ionicons name="chatbubble-ellipses" size={35} color="white" />
          <Text style={styles.iconText}>{item.comments}</Text>
        </TouchableOpacity>

        {/* Nút Share */}
        <TouchableOpacity style={styles.iconItem} activeOpacity={0.7}>
          <FontAwesome name="share" size={30} color="white" />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>

        {/* Đĩa nhạc xoay */}
        <View style={styles.musicDisc}>
          <Image source={item.avatar} style={styles.discImage} />
        </View>
      </View>

      {/* 3. Thông tin Caption phía dưới */}
      <View style={styles.bottomInfo}>
        <Text style={styles.username}>{item.username} · {item.date}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
        
        <View style={styles.musicRow}>
          <Ionicons name="musical-notes" size={18} color="white" />
          <Text style={styles.musicText} numberOfLines={1}>
            {item.music}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: frameWidth, 
    height: frameHeight, 
    backgroundColor: 'black',
    position: 'relative',
    overflow: 'hidden', 
    borderRadius: isWeb ? 30 : 0, 
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: frameWidth,
    height: frameHeight,
  },
  rightBar: { 
    position: 'absolute', 
    right: 15, 
    bottom: 50, 
    alignItems: 'center' 
  },
  iconItem: { 
    alignItems: 'center', 
    marginBottom: 20 
  },
  iconText: { 
    color: 'white', 
    fontSize: 12, 
    marginTop: 5, 
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  avatarContainer: { 
    marginBottom: 30, 
    position: 'relative' 
  },
  avatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderWidth: 1.5, 
    borderColor: 'white' 
  },
  plusIcon: { 
    position: 'absolute', 
    bottom: -5, 
    alignSelf: 'center', 
    backgroundColor: '#fe2c55', 
    borderRadius: 10, 
    width: 20, 
    height: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  bottomInfo: { 
    position: 'absolute', 
    left: 20, 
    bottom: 20, 
    width: '75%' 
  },
  username: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
  caption: { 
    color: 'white', 
    fontSize: 14, 
    marginBottom: 10,
    lineHeight: 20
  },
  musicRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  musicText: { 
    color: 'white', 
    marginLeft: 10, 
    fontSize: 14, 
    flex: 1 
  },
  musicDisc: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    backgroundColor: '#222', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
    borderWidth: 8, 
    borderColor: '#333' 
  },
  discImage: { 
    width: 25, 
    height: 25, 
    borderRadius: 12.5 
  }
});

export default VideoPost;