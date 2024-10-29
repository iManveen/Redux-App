import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import ToDoHeader from './src/Components/ToDoHeader'
import ToDoList from './src/Components/ToDoList'
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {

const RootApp = () => {
  return (
  <SafeAreaView>
     <ToDoHeader/>
     <ToDoList/>
     </SafeAreaView>
  )
}
return(

<Provider store={store}>
    <RootApp/>
    </Provider>
)

}