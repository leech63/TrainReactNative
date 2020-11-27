/* eslint-disable prettier/prettier */
import { observable } from 'mobx';

class CounterStore {
 
    @observable counter = [{counterNum: 0}];
   
    handleAddCounter = () => {
        console.log("ADD");
        this.counter.push({counterNum: 0});
      };

      handleRemoveCounter = () => {
        console.log("REMOVE");
        this.counter.pop();
      };

      handleIncrement = (index) => {
      };

      handleDecrement = (index) => {
      };
    }
 //   decorate(CounterStore, {
  //      counter: observable,
   //     handleAddCounter: action,
    //    handleRemoveCounter: action,
       
    //  });
      
    export default new CounterStore();