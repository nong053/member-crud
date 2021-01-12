import React from 'react'

function MemberEdit(){

    return (
        <div>
            <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Member</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    
                    <form>

                    <div className="mb-3">
                        <label htmlFor="inputImage" className="form-label">Image</label>
                        <input type="file" className="form-control" id="inputImage" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputFirst" className="form-label">First name</label>
                        <input type="text" className="form-control" id="inputFirst" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLast" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="inputLast" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAge" className="form-label">Age</label>
                        <input type="text" className="form-control" id="inputAge" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputTel" className="form-label">Tel</label>
                        <input type="text" className="form-control" id="inputTel" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" />
                    
                    </div>
                    
                    
                    </form>


                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default MemberEdit;