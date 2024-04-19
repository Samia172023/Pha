import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignUpForm from './LoginSignUpForm';
import LoginForm from './Login';
import SignUpForm from './Signup';
import FirstPage from './FirstPage';
import OnBoarding1 from './OnBoarding1';
import OnBoarding2 from './OnBoarding2';
import OnBoarding3 from './OnBoarding3';
import OpeningPage from './OpeningPage';

const Stack = createStackNavigator();

const App = () => {
  return (

    
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="LoginSignUpForm" component={LoginSignUpForm} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="OpeningPage" component={OpeningPage} />
      </Stack.Navigator>
    </NavigationContainer> 

  );
};

export default App;
