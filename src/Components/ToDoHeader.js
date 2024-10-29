import { StyleSheet, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const ToDoHeader = () => {
  const [todo,setTodo]=useState("");


    const dispatch= useDispatch()

    const onSubmitTask=()=>{
        if (todo.trim().length === 0)
        {
          Alert.alert("You need to enter a task")
            setTodo("");
            return
        }
        dispatch(
          addTask(
           {
            task:todo,
           })
        )
      setTodo("");




    }



 
  return (
    <View>
      <Text style={styles.toDoHeaderText}>To Do App</Text>
      <View style={styles.textinputView}>
      <TextInput
      placeholder='Add todo'
      onChangeText={(text)=>setTodo(text)}
      value={todo}
      style={styles.textinput}
      
      />
      
      <TouchableOpacity
        style={styles.buttonView}
        onPress={onSubmitTask}
      
      >
        <Text style={styles.buttonText}>Add</Text>


      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ToDoHeader

const styles = StyleSheet.create({
    toDoHeaderText:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",marginTop:20,
    },
    textinput:{
        borderColor:"gray",
        borderWidth:1,
        padding:10,
        margin:10,
        width:"80%",
        borderRadius:5,
    },
    textinputView:{
        justifyContent:"center",
        alignItems:"center",

    },
    buttonView:{
        backgroundColor:"black",
        padding:10,
        margin:10,
        width:"80%",
        borderRadius:5,
        alignItems:"center",
    },
    buttonText:{
        color:"white",
    }





})