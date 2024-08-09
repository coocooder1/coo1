import React,{useState} from 'react'
import './Contact.css'
import {ContactInfo} from '../components/ContactInfo'
import { Form } from 'react-bootstrap'

import { collection,addDoc } from 'firebase/firestore';

import { db } from '../firebase';
function Contact() {
  
   
  const [newfirstname, setFirstName] =useState("")
  const [newlastname, setLastName] = useState("")
  const [newemail, setEmail] = useState("")
  const [newphone, setPhone] = useState("")
  const [newdata, setData] = useState("")
  const [newmessage, setMessage] = useState("")



   

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 檢查是否所有必填字段都有值
    if (newfirstname.trim() === '' || newlastname.trim() === '' || newemail.trim() === '' || newphone.trim() === '' || newdata.trim() === '' ) {
      alert('請填寫所有必填項目！');
      return;
    }

    // 所有必填字段都有值，執行提交操作
    try {
      await createForm();
      alert('表單提交成功！');
      clearForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('提交表單時出錯，請稍後再試！');
    }
  };

  const createForm = async () => {
    const formssCollectionRef = collection(db, 'forms3');
    await addDoc(formssCollectionRef, {
      firstname: newfirstname,
      lastname: newlastname,
      email: newemail,
      phone: newphone,
      data: newdata,
      message: newmessage
    });
  };


  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setData('');
    setMessage('');
  };


  
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Contact</h1>

        </div>
      </header>
      <div className='container my-5'>
        <div className='col-lg-12 d-flex align-item-center justify-content-center'>
          <ContactInfo/>
        </div>
        <div className='col-lg-12 d-flex justify-content-center'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='first-name'>First Name</Form.Label>
              <Form.Control type="text"    value={newfirstname} onChange={(event) => {
        setFirstName(event.target.value) 
      }}
      
      required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='last-name'>Last Name</Form.Label>
              <Form.Control type="text"   value={newlastname}  onChange={(event) => {
        setLastName(event.target.value)
      }}required>
              </Form.Control>              
              </div>              
            </Form.Group>
            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='email-address'>Email</Form.Label>
              <Form.Control type="email"
            name="email"
             value={newemail}
            onChange={(event) => {
        setEmail(event.target.value)
      }}required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
              <Form.Control type='tel' name='phone'
               value={newphone}
              onChange={(event) => {
        setPhone(event.target.value)
      }}required>
              </Form.Control>              
              </div>              
            </Form.Group>

            <Form.Group className='row mb-3'>
              <div className='col-md-6'>
              <Form.Label htmlFor='date'>Date</Form.Label>
              <Form.Control type='date' name='date' 
               value={newdata}
              onChange={(event) => {
        setData(event.target.value)
      }}required>
              </Form.Control>              
              </div>
              <div className='col-md-6'>
              <Form.Label htmlFor='guests-number'>Number of Guests</Form.Label>
              <Form.Control type='number' id='guests-number'>
              </Form.Control>              
              </div>              
            </Form.Group>

             <Form.Group className='row mb-3'>
              
              <Form.Label htmlFor='comments'>備註</Form.Label>
              <Form.Control name="message"

              value={newmessage}
            onChange={(event) => {
        setMessage(event.target.value)
      }}>
              </Form.Control>              
                    
            </Form.Group>
             <button className='btn' type='submit ' onClick={createForm}>Submit</button>

            </Form>
            

          
          
        </div>
       
      </div>
      
     
    </div>
  )
}

export default Contact