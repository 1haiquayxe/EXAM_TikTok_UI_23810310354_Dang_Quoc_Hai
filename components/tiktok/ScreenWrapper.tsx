import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');
const isWeb = Platform.OS === 'web' && windowWidth > 500;
const frameWidth = isWeb ? 414 : '100%';

export const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.phoneFrame}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#000', // Nền đen bên ngoài máy tính
    alignItems: 'center',
  },
  phoneFrame: {
    width: frameWidth,
    height: '100%',
    backgroundColor: '#000',
    overflow: 'hidden',
    // Nếu thích bo góc cả app thì thêm dòng dưới
    // borderRadius: isWeb ? 40 : 0,
  },
});