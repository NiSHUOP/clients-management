import React, { useEffect, useState } from 'react';
import { db } from '../firebase.config';
import { ref, set } from 'firebase/database';
import { toast } from 'react-toastify';

const AddEdit = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();


  const handleSubmit = (e) => {
    
      e.preventDefault();
      const id = Date.now()
      const useRef = ref(db, 'user/'+ id)
      set(useRef, {
        name: name,
        email: email,
        phone: phone
      })
      toast.success("Data Successfully Added!");
      setName('')
      setEmail('')
      setPhone('')
  };

  return (
    <>
      <div className="form-signin">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mt-5 mb-4 text-center fw-bold">Enter the Details</h1>
          <div className="form-floating">
            <input type="name" className="form-control mb-2" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='' required />
            <label for="name" htmlFor="name">Name</label>
          </div>
          <div class="form-floating">
            <input type="email" className="form-control mb-2" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='' required />
            <label for="email" htmlFor="email">Email</label>
          </div>
          <div class="form-floating">
            <input type="tel" className="form-control mb-3" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='' required />
            <label for="phone" htmlFor="phone">Phone</label>
          </div>
          <button className="btnB w-100 py-2" type="submit" value="save">Save</button>
        </form>
      </div>
    </>
  )
}

export default AddEdit