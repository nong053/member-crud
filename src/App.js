import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios';
import MemberList from './Components/Member/MemberList';
import MemberAdd from './Components/Member/MemberAdd';
import MemberEdit from './Components/Member/MemberEdit';
import MemberDel from './Components/Member/MemberDel';



function App() {


  const [memberState, setMemberState] = useState({
    FIRST_NAME:"",
    LAST_NAME:"",
    email:"",
    password:"",
    POSITION:"",
    ACTIVE_FLAG:""
  });
  const [memberStateList, setMemberStateList] = useState([]);

  

  const token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTA0XC9tZmFcL2FwaVwvcHVibGljXC9zZXNzaW9uIiwiaWF0IjoxNjEwNjc1MzA4LCJleHAiOjE2MTA3MTEzMDgsIm5iZiI6MTYxMDY3NTMwOCwianRpIjoiNDA1N2UwMzQzM2Y2ZmY1YmM4YWU4ZTc5M2Q0M2E3MTgifQ.UYVSu5ATn5ydYurkZGHRNkL6eJUtg9kqkD464RrLKbQ';
  const memberFormSubmitF = (event)=>{
    event.preventDefault();
    
    axios.post('http://localhost/mfa/api/public/member',{
    data:memberState
    },{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(Response=>{
    console.log(Response.data.status);
      if(Response.data.status==200){
        //alert("Insert data success.");
        setMemberStateList(Response.data.data);
      }
    });

  }

  const deleteMemberF =(id)=>{
    console.log(id.PROFILE_ID);
    
    axios.delete(`http://localhost/mfa/api/public/member/${id.PROFILE_ID}`,{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(Response=>{
    console.log(Response.data.status);
      if(Response.data.status==200){
        //alert("Insert data success.");
        setMemberStateList(Response.data.data);
      }
    });

  }

  const editMemberF =(id)=>{
    console.log(id);
    axios.get(`http://localhost/mfa/api/public/member/${id.PROFILE_ID}`,{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(Response=>{
    
      if(Response.data.status==200){
        
        setMemberState(Response.data.data);
        console.log(memberState);
       
      }
    });


  }
  const memberFormUpdateSubmitF=(event)=>{
    

    event.preventDefault();
    axios.patch(`http://localhost/mfa/api/public/member/${memberState.profile_id}`,{
    data:memberState
    },{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(Response=>{
    console.log(Response.data.status);
      if(Response.data.status==200){
        //alert("Insert data success.");
        setMemberStateList(Response.data.data);
      }
    });
  }


  

  useEffect(() => {
    
    axios.get('http://localhost/mfa/api/public/member/index',{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(Response=>{
    
    setMemberStateList(Response.data);
    
    
    });


  }, []);

  



  

  const memberFormChangeHandlerF = (event)=>{
    let nam = event.target.name;
    let val = event.target.value;
    setMemberState({...memberState,[nam]:val});
  }

  //console.log(memberState);
  

  

  return (
    <div className="container">
     <h1> Member System By React</h1> 

     
     <MemberList 
      memberStateListPD={memberStateList}
      deleteMemberPF={deleteMemberF}
      editMemberPF={editMemberF}
      
      />

     <MemberAdd 
     memberFormChangeHandlerPF={memberFormChangeHandlerF} 
     memberFormSubmitPF={memberFormSubmitF} 
     />

     <MemberEdit
     memberStatePD={memberState}
     memberFormChangeHandlerPF={memberFormChangeHandlerF} 
     memberFormUpdateSubmitPF={memberFormUpdateSubmitF} 
     
     />

     <MemberDel/>



    
      






      



      


     

    </div>
  );
}

export default App;
