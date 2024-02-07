import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function TodoStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TodoList" component={TodoScreen} />
            <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
        </Stack.Navigator>
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