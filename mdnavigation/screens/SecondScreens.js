import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

const SecondScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second Screen</Text>
            <Button mode="contained" onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default SecondScreen;