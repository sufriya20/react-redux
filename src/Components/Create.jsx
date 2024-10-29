import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../redux/UserReducer'

function Create() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const users=useSelector((state)=>state.users);
console.log(users)
const dispatch=useDispatch();
const navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name,email}))
    navigate('/')
}

  return (
    <>
    <div className='d-flex vh-50 justify-content-center align-item-center mt-5'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3 className='text-color'>Add new user</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control form-sign' placeholder='Enter name' onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="email" name='email' className='form-control form-sign' placeholder='Enter email' onChange={e=>setEmail(e.target.value)} />
                </div>
                <br />
                <button className='btn btn-primary '>submit</button>
            </form>

        </div>

    </div>
    </>
  )
}

export default Create