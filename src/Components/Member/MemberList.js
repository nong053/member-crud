
import React from 'react'
import { Button,Modal } from 'react-bootstrap';

function MemberList(props){
    const {
        memberStateListPD,
        deleteMemberPF,
        editMemberPF
    }=props;

    const  listMemberElement = memberStateListPD.map(listMember=>{
        const {
            PROFILE_ID,
            EMAIL,
            PASSWORD,
            FIRST_NAME,
            LAST_NAME,
            POSITION,
            ACTIVE_FLAG,

        }=listMember;

        return(
        
             <tr key={PROFILE_ID}>
                <th scope="row">{PROFILE_ID}</th>
                <td>image</td>
                <td>{FIRST_NAME}</td>
                <td>{LAST_NAME}</td>
                <td>{EMAIL}</td>
                <td>{PASSWORD}</td>
                <td>{POSITION}</td>
                <td>{ACTIVE_FLAG}</td>
                
                <td>

                
                <div className='text-right'>
                <button type="button" 
                className="btn btn-danger" 
                // data-bs-toggle="modal" 
                // data-bs-target="#confirmModal"
                onClick={()=>deleteMemberPF({PROFILE_ID})}

                
                >Delete</button>
                <button type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target="#editModal"
                onClick={()=>editMemberPF({PROFILE_ID})}
                >Edit</button>
                </div>


                </td>
            </tr>
        
        )
    })




    return(
        <div>

            
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
            Add Member
            </button>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Images</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Position</th>
                <th scope="col">Status</th>
                
                
                
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                
               {listMemberElement}
                
            </tbody>
            </table>
        </div>
    );
}
export default MemberList;
