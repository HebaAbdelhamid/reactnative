import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeUncompletedTodo } from '../Redux/slices/slice.uncompletedTodos';

const ToDoComponent = () => {
  const dispatch = useDispatch();
  const uncompletedTodos = useSelector((state) => state.uncompletedTodo.uncompletedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uncompleted Todos</Text>
      {uncompletedTodos.length > 0 ? (
        <FlatList
          data={uncompletedTodos}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noTasksText}>No uncompleted tasks available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
    paddingHorizontal: 20, // Increased horizontal padding
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
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ToDoComponent;
