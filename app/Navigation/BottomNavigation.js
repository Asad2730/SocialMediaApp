
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/colors';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import LogoutUser from '../screens/Logout';

const Tab = createBottomTabNavigator();

export default function BottomNavigation (){
    return (
        <Tab.Navigator
            screenOptions={(color, size) => ({
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: colors.secondary_color,
                },
            })}>

            <Tab.Screen name='home' component={Home}
               options={{
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name='home' size={size} color={color} />
                ),
               }}
            />
            <Tab.Screen name='userProfile' component={UserProfile} 
             options={{
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name='user-alt' size={size} color={color} />
                ),
             }}
            />
             <Tab.Screen name='logout' component={LogoutUser} 
             options={{
                tabBarIcon:({color,size})=>(
                    <FontAwesome5 name='sign-out-alt' size={size} color={color} />
                ),
             }}
            /> 
        </Tab.Navigator>
    )
}
