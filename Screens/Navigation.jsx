import { createStackNavigator } from '@react-navigation/stack';
import CallScreen from './CallScreen';
import StatusScreen from './StatusScreen';
import HomeScreen from './HomeScreen';
import ChattingScreen from './ChattingScreen';   
import ProfileScreen from './ProfileScreen';
import StoryScreen from './StoryScreen';
const Stack = createStackNavigator();

const Navigation = () => {
  return <Stack.Navigator initialRouteName='home' screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="home" component={HomeScreen} options={{
          title: 'WhatsApp'
        }}/>
    <Stack.Screen name="call" component={CallScreen}/>
    <Stack.Screen name="status" component={StatusScreen}/>
    <Stack.Screen name="Mark Zukerberg2" component={ChattingScreen}/>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
    <Stack.Screen name="StoryScreen" component={StoryScreen}/>
  </Stack.Navigator>
}

export default Navigation