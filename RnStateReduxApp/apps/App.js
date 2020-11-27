import React from 'react';
import {Text} from 'react-native';
 
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import CounterListContainer from './containers/CounterListContainer';
 
import reducers from './reducers';
 
const store = createStore(reducers);
 
const App = () => {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
};
 
export default App;
