import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"
const ListItem = ({ item, deleteTodo }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listView}>
                <Text style={styles.listItemText}>{item.todo}</Text>
                <Icon name="remove" size={20} color="firebrick"
                    onPress={() => deleteTodo(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
        fontSize: 18
    }

})
export default ListItem