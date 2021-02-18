import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Enter Temperature</Text>
        <TextInput placeholder='0' style={styles.input} />
      <Button
        title="Result"
        onPress={() => navigation.navigate("ResultScreen")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input:{
      borderWidth:2,
      justifyContent:'center',
      paddingBottom:10
  }
});