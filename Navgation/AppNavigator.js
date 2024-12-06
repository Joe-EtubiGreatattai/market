import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './../page/Home'; 
import ProfileScreen from './../page/Profile';
import ProductScreen from './../page/ProductDetails'; 
import Dashboard from './../page/dashboard'; 
import ConfirmOrder from './../page/ConfirmOrder'; 
import Setting from './../page/Setting'; 
import FeedBack from './../page/FeedbackPage';
import SellItemPage from '../page/SellItemPage';
import NotificationPage from '../page/NotificationPage';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       <Stack.Screen name="Login" component={LoginPage} />
       <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} /> 
        <Stack.Screen name="Feedback" component={FeedBack} />
        <Stack.Screen name="Sell" component={SellItemPage} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Notification" component={NotificationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
