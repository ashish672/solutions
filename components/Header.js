import React from "react"
import { View, Text, StyleSheet } from "react-native"
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>TodoApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "#232323"
    },
    text: {
        color: "#fff",
        fontSize: 23,
        textAlign: "center"
    }

})
export default Header