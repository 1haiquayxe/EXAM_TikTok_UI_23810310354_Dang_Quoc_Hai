import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web' && width > 500;
const FRAME_WIDTH = isWeb ? 414 : '100%';

// 1. CẬP NHẬT DỮ LIỆU ĐỦ 7 BÌNH LUẬN NHƯ TRONG ẢNH
const commentData = [
  { id: '1', user: 'martini_rond', text: 'How neatly I write the date in my book', time: '22h', likes: '8098', replies: '4', avatar: require('../assets/images/tiktok/user_1.jpg') },
  { id: '2', user: 'maxjacobson', text: "Now that's a skill very talented", time: '22h', likes: '8098', replies: '1', avatar: require('../assets/images/tiktok/user_2.jpg') },
  { id: '3', user: 'zackjohn', text: 'Doing this would make me so anxious', time: '22h', likes: '8098', replies: null, avatar: require('../assets/images/tiktok/user_3.jpg') },
  { id: '4', user: 'kiero_d', text: 'Use that on r air forces to whiten them', time: '21h', likes: '8098', replies: '9', avatar: require('../assets/images/tiktok/user_4.jpg') },
  { id: '5', user: 'mis_potter', text: "Spuld've used that on his forces 😅😅", time: '13h', likes: '8098', replies: '4', avatar: require('../assets/images/tiktok/avatar_craig.jpg') },
  { id: '6', user: 'karennne', text: 'No prressure', time: '22h', likes: '8098', replies: '2', avatar: require('../assets/images/tiktok/avatar_karen.jpg') },
  { id: '7', user: 'joshua_l', text: "My OCD couldn't do it", time: '15h', likes: '8098', replies: null, avatar: require('../assets/images/tiktok/user_1.jpg') },
];

export default function CommentsScreen() {
  
  // 2. CẬP NHẬT RENDER ITEM ĐỂ GIỐNG MẪU (THÊM VIEW REPLIES)
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.commentItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.commentText}>
          {item.text} <Text style={styles.footerText}>{item.time}</Text>
        </Text>
        
        {/* Nút View Replies nếu có */}
        {item.replies && (
          <TouchableOpacity style={styles.replyBtn}>
            <Text style={styles.replyBtnText}>View replies ({item.replies})</Text>
            <Ionicons name="chevron-down" size={14} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.likeSection}>
        <AntDesign name="hearto" size={18} color="#888" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.masterContainer}
    >
      <TouchableWithoutFeedback onPress={() => router.back()}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.phoneFrame}>
        <View style={styles.header}>
          <View style={{ width: 30 }} />
          <Text style={styles.headerTitle}>579 comments</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={commentData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.inputContainer}>
          <Image 
            source={require('../assets/images/tiktok/user_3.jpg')} 
            style={styles.inputAvatar} 
          />
          <View style={styles.textInputWrapper}>
            <TextInput 
              placeholder="Add comment..." 
              placeholderTextColor="#999"
              style={styles.input}
            />
            <View style={styles.inputIcons}>
              <TouchableOpacity><Text style={styles.atSymbol}>@</Text></TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="happy-outline" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  phoneFrame: {
    width: FRAME_WIDTH,
    height: '75%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  userName: {
    fontSize: 13,
    color: '#888',
    marginBottom: 2,
    fontWeight: '600',
  },
  commentText: {
    fontSize: 14,
    color: '#111',
    lineHeight: 18,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  replyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  replyBtnText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
    marginRight: 4,
  },
  likeSection: {
    alignItems: 'center',
    marginLeft: 10,
    width: 40,
  },
  likeCount: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    borderTopWidth: 0.5,
    borderTopColor: '#f2f2f2',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f1f1f2',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  inputIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  atSymbol: {
    fontSize: 18,
    fontWeight: '600',
  }
});