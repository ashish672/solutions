import React, { useState } from "react"
import { View, StyleSheet, FlatList, Alert } from "react-native"
import Header from "./components/Header"
import { uuid } from "uuidv4"
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem"
const App = () => {

  const [todos, setTodos] = useState([
    { id: uuid(), todo: "Water Plants" },
    { id: uuid(), todo: "Morning Walk" },
    { id: uuid(), todo: "Breakfast" },
    { id: uuid(), todo: "Office Work" },

  ])


  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter(t => t.id != id))
  }

  const addTodo = (t) => {

    if (!t) {
      Alert.alert("Error", "Please enter a todo", {
        text: "Ok"
      })
    }

    else {
      setTodos((prevTodo) => {
        return [{ id: uuid(), t }, ...prevTodo]
      })
    }

  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addTodo={addTodo} />
      <FlatList data={todos} renderItem={({ item }) => <ListItem item={item} deleteTodo={deleteTodo} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },

})
export default App