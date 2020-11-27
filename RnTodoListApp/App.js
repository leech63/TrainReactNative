/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet,  View} from 'react-native';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
// todos: {id: 1, textValue: todoitem, checked: true/false }
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {id: todos.length + 1, textValue: text, checked: false},
    ]);
    console.log('App addTodo');
  };
  function onRemove(id) {
    console.log('App/delete id=>${id}');
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    console.log('App/toggle id=>${id}');
    console.log('App onToggle before=>',todos);
        setTodos( todos.map((todo) =>
        todo.id === id ? {...todo,checked:!todo.checked}:todo,
        ),
        );
        console.log('App onToggle After=>',todos);
      };
    
    return (
     <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
         <Text children= "할일 목록" style={styles.appTitle} />
           <View style={styles.card}>
            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
          </View>
       </SafeAreaView>
     </>
   );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 36,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    fontSize: 24,
    margin: 20,
  },
});

export default App;
