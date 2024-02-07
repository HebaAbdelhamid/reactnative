
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedTasks = () => {
  const completedTodos = useSelector((state) => state.completedTodo.completedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      {completedTodos.length > 0 ? (
        <FlatList
          data={completedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text style={styles.noTasksText}>No completed tasks available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 20,
  },
  todoItem: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
    paddingHorizontal: 20, // Increased padding
    paddingVertical: 15,
    width: '100%', // Full width
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noTasksText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default CompletedTasks;

