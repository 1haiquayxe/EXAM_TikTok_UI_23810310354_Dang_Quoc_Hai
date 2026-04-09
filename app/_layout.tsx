import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* 1. Màn hình chính chứa Bottom Tabs */}
        <Stack.Screen name="(tabs)" />
        
        {/* 2. SỬA TÊN THÀNH "comments" ĐỂ KHỚP VỚI FILE comments.tsx */}
        <Stack.Screen 
          name="comments" 
          options={{ 
            // presentation: 'transparentModal' giúp nhìn thấy video mờ phía sau
            presentation: 'transparentModal', 
            animation: 'slide_from_bottom',
            headerShown: false,
          }} 
        />
      </Stack>
      
      <StatusBar style="light" />
    </ThemeProvider>
  );
}