/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Routes/tabNavigate';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';


export default function App() {
    
    return (
        <Provider store={store}>
      <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </Provider>
       /* <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={TodoStackScreen} />
                <Tab.Screen name="Completetodo" component={Completetodo} />
            </Tab.Navigator>
        </NavigationContainer>*/
    );
}

/*function TodoStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TodoList" component={TodoScreen} />
            <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
        </Stack.Navigator>
    );
}

function TodoScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);

    const renderItem = ({ item, index }) => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                width: "100%",
                padding: 5
            }}
        >
            <TouchableOpacity onPress={() => navigation.navigate('TodoDetails', { item })}>
                <Text style={{ fontSize: 20, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                    {` ${item.id} ${item.title}`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleToggleComplete(index, item.title)}>
                {item.completed ? (
                    <Ionicons name="checkmark-done" size={24} color="green" />
                ) : (
                    <Ionicons name="checkmark-outline" size={24} color="blue" />
                )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
        </View> 
    );

    const handleAdd = () => {
        const isItemExist = data.some((item) => item.title === `${title} ${description}`);

        if (!isItemExist) {
            const newItem = {
                id: (data.length + 1).toString(),
                title: `${title} ${description}`,
                completed: false,
            };

            setData([...data, newItem]);
            setTitle('');
            setDescription('');
        } else {
            Alert.alert('Duplicate Item', 'This item already exists in the Todo list.');
        }
    };

    const handleDelete = (itemId) => {
        const updatedData = data.filter(item => item.id !== itemId);
        setData(updatedData);
    };

    const handleToggleComplete = (index, itemTitle) => {
        const updatedData = [...data];
        updatedData[index].completed = !updatedData[index].completed;

        if (updatedData[index].completed) {
            Alert.alert('Todo Completed', `Task "${itemTitle}" has been marked as completed.`);
        }

        setData(updatedData);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.baseLine}>TODO APP</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTitle(text)}
                value={title}
                placeholder="title"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setDescription(text)}
                value={description}
                placeholder="description"
            />

            <TouchableOpacity
                style={{
                    marginLeft: 10,
                    padding: 10,
                    backgroundColor: "green",
                    borderRadius: 5,
                    width: 100,
                }}
                onPress={handleAdd}
            >
                <Text style={{ color: "white", textAlign: "center" }}>Add</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ width: '100%', marginVertical: 10 }}
            />
        </View>
    );
}

function TodoDetailsScreen({ route }) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.baseLine}>Todo Details</Text>
            <Text>{`ID: ${item.id}`}</Text>
            <Text>{`Title: ${item.title}`}</Text>
        </View>
    );
}

function Completetodo() {
    return (
        <View style={styles.container}>
            <Text style={styles.baseLine}>Completetodo Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    baseLine: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 350,
    },
});*/
