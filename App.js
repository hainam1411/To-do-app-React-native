import {StatusBar} from 'expo-status-bar';
import {Alert, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";
import {useState} from "react";

export default function App() {
    const [taskList, setTaskList] = useState([])
    const handleAddTask = (task) => {
        // TODO: add task
        setTaskList([...taskList, task])
    }
    const handleDeleteTask = (index) => {
        Alert.alert('Delete task', 'Are you sure delete this task?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () =>{
                let taskListTmp = [...taskList];
                taskListTmp.splice(index,1);
                setTaskList(taskListTmp);
                }},
        ]);
    }
    return (<View style={styles.container}>
            {/*body*/}
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                {/*List*/}
                <ScrollView style={styles.items}>
                    {taskList.map((item, index) => {
                        return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)}/>
                    })}

                </ScrollView>
            </View>

            {/*input*/}
            <Form onAddTask={handleAddTask}/>
        </View>);
}


