import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard} from 'react-native'
import React, {useState} from 'react'
import styles from "../Form/style";

const Form = (props) => {
    const [task, setTask] = useState('');
    const handleAddTask  = () =>{
        if(task.length == 0){
            alert('Please add any task');
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }
    return (<KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            style={styles.addTask}>
            <TextInput placeholder = "Your task"
                       value={task}
                       style={styles.input}
                       onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>)
}
export default Form;
