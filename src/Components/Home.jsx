import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser } from '../redux/UserReducer'
import { useNavigate } from 'react-router-dom'

function Home() {
const users=useSelector((state)=>state.users)
const dispatch=useDispatch();
console.log(users)

const handleDelete=(id)=>{
    dispatch(deleteUser);
    Navigate(0);
console.log(id)
}

  return (
   <>
   <div className='container' style={{manginTop:'2 rem'}}>
    <h2 className='mb-5'>React-Readux App</h2>
    <Link to={'/create'} className='btn btn-primary my-3 p-3'>Create</Link>
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>ID </th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((user,index)=>(
                <tr key={index}>

                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                    <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2' >Delete</button>
                    </td>
                  
                </tr>
            ))
        }
            
            {/* <td>01</td>
            <td>Sufriya</td>
            <td>sufff2@gmail.com</td>
            <td>
                <Link className='btn btn-primary'>Edit</Link>
                <button className='btn btn-danger ms-2'>
                    Delete
                </button>
            </td> */}
        </tbody>
    </table>

   </div>
   </>
  )
}

export default Home