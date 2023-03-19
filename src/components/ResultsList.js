import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ResultsList = ({ title, results }) => {
  const ResultItem = ({ result }) => {
    return (
      <Text key={result.item.id} style={styles.resultText}>
        {result.item.name}
      </Text>
    )
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={(item) => {
          return <ResultItem result={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default ResultsList
