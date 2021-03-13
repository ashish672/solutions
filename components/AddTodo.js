import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"

const AddTodo = ({ addTodo }) => {

    const [text, setText] = useState("")

    const onChange = (textValue) => setText(textValue)


    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input}
                onChangeText={onChange} />
            <TouchableOpacity style={styles.btn}
                onPress={() => addTodo(text)}>
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} />
                Add Item
            </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5

    },
    text: {
        color: "#c2d2a1",
        fontSize: 20,
        textAlign: "center"

    }
})
export default AddTodo