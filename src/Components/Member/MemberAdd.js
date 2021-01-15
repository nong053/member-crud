import React from 'react'

function MemberAdd(props){

    const {
        memberFormChangeHandlerPF,
        memberFormSubmitPF
    } =props;

   



    return (

       
        
        <div>
            <div className="modal fade" id="addModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">

                <form onSubmit={memberFormSubmitPF}>

                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Member</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    
                    

                    <div className="mb-3">
                        <label htmlFor="inputImage" className="form-label">Image</label>
                        <input type="file" className="form-control" id="inputImage" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FIRST_NAME" className="form-label">First name</label>
                        <input type="text" className="form-control" id="FIRST_NAME" 
                        name="FIRST_NAME" onChange={memberFormChangeHandlerPF}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LAST_NAME" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="LAST_NAME" 
                        name="LAST_NAME" onChange={memberFormChangeHandlerPF}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="EMAIL" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" 
                        name="email" onChange={memberFormChangeHandlerPF}/>
                    
                    </div>

                    <div className="mb-3">
                        <label htmlFor="PASSWORD" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" 
                        name="password" onChange={memberFormChangeHandlerPF}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="POSITION" className="form-label">Position</label>
                        <input type="text" className="form-control" id="POSITION" 
                        name="POSITION" onChange={memberFormChangeHandlerPF}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputACTIVE_FLAG" className="form-label">Active</label>
                        <input type="text" className="form-control" id="ACTIVE_FLAG" 
                        name="ACTIVE_FLAG" onChange={memberFormChangeHandlerPF}/>
                    </div>

                    
                    
                    
                    
                    


                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                    </div>

                    </form>

                </div>
                </div>
            </div>
        </div>
    
    )
}
export default MemberAdd;