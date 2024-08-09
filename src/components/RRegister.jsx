import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth,db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db,"Users", user.uid), {
          email:user.email,
          firstname:fname,
          lastname:lname,
        })
      }
      console.log("User Registered Successfully")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <h3>Sign Up</h3>

        <div className='mb-3'>
          <label>Firstname</label>
          <input type="text" className='form-control' placeholder='Firstname'  onChange={(e) => setFname(e.target.value)}></input>
          </div>

           <div className='mb-3'>
          <label>Firstname</label>
          <input type="text" className='form-control' placeholder='Firstname'  onChange={(e) => setLname(e.target.value)}></input>
          </div>

        <div className='mb-3'>
          <label>Email address</label>
          <input type="email" className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

        </div>
        <div className='mb-3'>
          <label>Psdsword</label>
          <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>


        </div>

        <div>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Register