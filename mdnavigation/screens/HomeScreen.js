import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* The button could also be removed from here, but I just pot it there for fun */}
      <Button mode="contained" onPress={() => navigation.navigate('SecondScreen')}>Go to second screen</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
    },
  text: { 
    fontSize: 20, 
    },
});

export default HomeScreen;