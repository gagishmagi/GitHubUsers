import React from 'react';
import './App.css';
//import UserList from './UserList';
import UserInfo from './UserInfo';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        {/* <UserList/> */}
        <UserInfo promise={
          fetch('https://api.github.com/users/myfishnameisqwerty')
        }/>
        <UserInfo promise={
          fetch('https://api.github.com/users/gagishmagi')
        }/>
        <UserInfo promise={
          fetch('https://api.github.com/users/Galperry')
        }/>
        < UserInfo promise = {
          fetch('https://api.github.com/users/raz-botner')
        }
        />
        < UserInfo promise = {
          fetch('https://api.github.com/users/giladdekel')
        }
        />
        < UserInfo promise = {
          fetch('https://api.github.com/users/YoniBinder')
        }
        />
      </div>
    );
  }

}

export default App;
