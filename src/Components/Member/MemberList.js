import { render } from '@testing-library/react';
import React from 'react'

function MemberList(){

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
                <th scope="col">Age</th>
                <th scope="col">Tel</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>image</td>
                <td>Kosit</td>
                <td>Aromsava</td>
                <td>34</td>
                <td>0809926565</td>
                <td>abc@gmail.com</td>
                <td>

                
                <div className='text-right'>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete</button>
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                </div>


                </td>
                </tr>

                <tr>
                <th scope="row">2</th>
                <td>image</td>
                <td>Kosit</td>
                <td>Aromsava</td>
                <td>34</td>
                <td>0809926565</td>
                <td>abc@gmail.com</td>
                <td>

                
                <div className='text-right'>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete</button>
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                </div>


                </td>
                </tr>
                
            </tbody>
            </table>
        </div>
    );
}
export default MemberList;
