import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ResultScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text title='0' style={styles.input} >Result:</Text>
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      paddingBottom:10
  }
});