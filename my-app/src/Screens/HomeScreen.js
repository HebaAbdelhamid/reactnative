
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useDispatch } from 'react-redux';
import { addCompletedTodo, removeCompletedTodo } from '../Redux/slices/slice.completedTodos';
import { addUncompletedTodo, removeUncompletedTodo } from '../Redux/slices/slice.uncompletedTodos';
import TodoForm from '../Components/TodoForm';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
    dispatch(addUncompletedTodo(task)); 
  };

  const toggleComplete = (title) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.title === title ? { ...todo, completed: !todo.completed } : todo
      );

      const todoToToggle = updatedTodos.find((todo) => todo.title === title);

      if (todoToToggle) {
        if (todoToToggle.completed) {
          dispatch(removeUncompletedTodo(todoToToggle));
          dispatch(addCompletedTodo({ ...todoToToggle, completed: true }));
        } else {
          dispatch(removeCompletedTodo(todoToToggle));
          dispatch(addUncompletedTodo({ ...todoToToggle, completed: false }));
        }

        return updatedTodos;
      }

      return prevTodos;
    });
  };

  const removeTask = (title) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== title));
    dispatch(removeUncompletedTodo({ title })); 
    dispatch(removeCompletedTodo({ title })); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO App</Text>
      <TodoForm todos={todos} onAddTask={addTask} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => toggleComplete(item.title)}>
              <Icon
                name={item.completed ? 'check-circle' : 'circle'}
                size={20}
                color={item.completed ? 'green' : 'grey'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { todo: item })} style={styles.contentContainer}>
              <View>
                <Text style={styles.todoTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => removeTask(item.title)}>
              <Icon name="trash" size={20} color="purple" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    color: 'purple',
    fontWeight: '600',
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  todoTitle: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
