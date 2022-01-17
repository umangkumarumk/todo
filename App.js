import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList,Alert,Keyboard,TouchableWithoutFeedback} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitems';
import AddTodo from './components/addtodo';

export default function App() {

  const [todos,setTodos]=useState([
    {text: 'Buy Coffe',key: '1'},
    {text: 'learn react native',key: '2'},
    {text: 'Create app',key: '3'},

  ]);

  const presshandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(
        todo=>key!=todo.key
      );
    })
  }

  const submithandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } 
    else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    
          <View style={styles.container}>
        <Header/>
          <View style={styles.content}>
            <AddTodo submithandler={submithandler}/>
            {/*todo form*/}
            <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('Dismissed keyboard')
    }}>
            <View style={styles.list}>
                <FlatList 
                  data={todos}
                  renderItem={({item})=>(
                      <TodoItem items={item} presshandler={presshandler}/>
                  )}
                />
            </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:
  {
    flex: 1,
   padding:40,
  },
  list:{
    flex: 1,
    marginTop:20,
  },
});
