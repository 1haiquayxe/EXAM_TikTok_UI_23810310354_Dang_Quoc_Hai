import { View, Text, StyleSheet } from 'react-native';
import { ScreenWrapper } from '@/components/tiktok/ScreenWrapper'; // Link tới file vừa tạo

export default function DiscoverScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Discover Screen</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: '#fff', fontSize: 20 },
});