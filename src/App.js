import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
     <h1> Member System By React</h1> 
    
     
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
          <button type="button" className="btn btn-danger">Delete</button>
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
          <button type="button" className="btn btn-danger">Delete</button>
          <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
          </div>


          </td>
        </tr>
        
      </tbody>
    </table>





    
      <div className="modal fade" id="addModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Member</h5>
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
  );
}

export default App;
