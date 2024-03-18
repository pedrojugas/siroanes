import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import BottomNavigation from './screens/BottomNavigation';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar style="auto" />
      <BottomNavigation />
    </View>
  );
};