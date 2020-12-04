/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View,Button} from 'react-native';
import TodoItem from './TodoItem';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Sqlite.db' });

const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');
 
    const handleTodoInput =(newTodo) => {
        setNewTodoItem(newTodo);
    };
    const handleAddTodo = (e) => {
        if(newTodoItem ===''){
            return;
        }
        
     console.log('newTodoItem=>${newTodoItem}');
      onAddTodo(newTodoItem.replace('\n',' '));
      setNewTodoItem('');
    };

   // const handleKeyPress = (e) => {
   //     if (e.nativeEvent.key === "Enter") {
   //         handleAddTodo();
    //    }
   // };
   db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO todo (id, textValue, checked) VALUES (?,?,?)',
      [id, textValue, checked],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('TodoList'),
              },
            ],
            { cancelable: false }
          );
        } else alert('Registration Failed');
      }
    );
  });
//};


    return (
    <View style={styles.inputContainer}>
     <TextInput 
        style={styles.input}
        placeholder={"할일을 입력하세요"}
        autoCorrect={false}
        value={newTodoItem}
        onChangeText={handleTodoInput}
       // onKeyPress={handleKeyPress}
        /> 
     <View style={styles.button}>
         <Button title={'ADD'} 
                onPress={handleAddTodo}/>
      </View>

    </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    input: {
        padding: 20,
        borderBottomColor: '#9E9E9E',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        width:'75%',
      },
      button: {
        marginRight: 20,
    },
});

export default TodoInsert;
