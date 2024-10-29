import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { deleteTask } from '../redux/taskSlice'
import { useDispatch } from 'react-redux'



const ToDoList = () => {
    const dispatch= useDispatch()
    const todos=useSelector((state)=>(state.tasks))
 
  
    const deleteItem = (id) => {
        dispatch(deleteTask({ id }));
    };






    const renderItem=({item})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity style={styles.deleteButton}
               onPress={() => deleteItem(item.id)}
                
                >
                <Text style={styles.delete}>Delete</Text>
                <Image source={require('../assets/red-trash.png')}
                style={styles.trashimg}
                
                />
               
                </TouchableOpacity >
                <TouchableOpacity>
                <Image style={styles.pencil} source={require('../assets/pencil.png')}/>
                </TouchableOpacity>
                

            </View>

        )

    }





  return (
    <View>
      <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#e9e9e9",
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
    title:{
        fontSize:20,
    },
    delete:{
        fontSize:15,
        color:"red",

    },
    trashimg:{
        height:20,
        width:20,
     
    },
    deleteButton:{
        flexDirection:"row",
        alignItems:"center",

       paddingRight:10,
        justifyContent:"space-between",
        
    },
    pencil:{
        height:18,
        width:18,

    }





})