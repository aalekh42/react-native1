import React from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Enter Currency in Rs.</Text>
        {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        /> */}
        <TextInput placeholder='0' style={styles.input} />
        <Button
        title="Result"
        onPress={() => navigation.navigate("Details")}
      />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DetailsScreen;

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