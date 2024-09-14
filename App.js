import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={NextPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./3d11898c-ad8b-4cb9-a101-23e06af2a165-profile_banner-480.jpeg')}
          resizeMode="cover" style={styles.image}>
        <Text>Click the button!</Text>
        <Button
        title="Next Page"
        onPress={() =>
          navigation.navigate('Profile')
        }
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const NextPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./3d11898c-ad8b-4cb9-a101-23e06af2a165-profile_banner-480.jpeg')}
          resizeMode="cover" style={styles.image}>
        <Text>Welcome to Page 2</Text>
        <Image source={require('./anime-blush.gif')}></Image>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight,
    width: screenWidth,
  },
});

export default App;
