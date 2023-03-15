import React from "react"
import { View, Text, StyleSheet } from "react-native"

// components
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
