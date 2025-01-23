import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const SecondScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second Screen</Text>
            <Button title="back" mode="contained" onPress={() => navigation.goBack()}></Button>
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