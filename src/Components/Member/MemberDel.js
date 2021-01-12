import React from 'react'

function MemberDel(){

    return (
        <div>
            <div className="modal fade" id="confirmModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Confirm to Delete</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Do you confirm to delete this data ?
                    </div>
                    <div className="modal-footer">
                        
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Confirm</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default MemberDel;