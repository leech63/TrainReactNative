/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import TodoItem from './TodoItem';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Sqlite.db' });


const TodoList = ({todos,onRemove,onToggle}) => {
    db.transaction(function(txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='todo'",
          [],  
          function(tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS todo', []);
                txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT, textValue TEXT NOT NULL, checked INTEGER NOT NULL DEFAULT 0)',
                    []
                  );
            }
          }  
        );
      });
      
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
             {todos.map(todo => (
                <TodoItem key={todo.id}{...todo} onRemove={onRemove}  onToggle={onToggle}/>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',

    } 
});

export default TodoList;
