import React from 'react'
import './App.css';
import MemberList from './Components/Member/MemberList';
import MemberAdd from './Components/Member/MemberAdd';
import MemberEdit from './Components/Member/MemberEdit';
import MemberDel from './Components/Member/MemberDel';

function App() {
  return (
    <div className="container">
     <h1> Member System By React</h1> 
    
     
     <MemberList/>
     <MemberAdd/>
     <MemberEdit/>
     <MemberDel/>



    
      






      



      


     

    </div>
  );
}

export default App;
