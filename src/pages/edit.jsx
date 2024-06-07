import React, { useState } from 'react'
import { db } from '../firebase.config'
import { ref, update } from 'firebase/database'

const edit = ({ user, onClose, onUpdate }) => {
    const [editName, setEditName] = useState(user.name)
    const [editEmail, setEditEmail] = useState(user.email)
    const [editPhone, setEditPhone] = useState(user.phone)
    const handleUpdate = async () => {
        const useRef = ref(db, `user/${user.id}`)
        try {
            await update(useRef, {
                name: editName,
                email: editEmail,
                phone: editPhone
            })
            onUpdate(user.id, editName, editEmail, editPhone)
            onClose()
        } catch (er) {
            console.log(er);
        }
    }
    return (
        <div className='contain'>
            <div className="form-signin">
                <form >
                    <h1 className="h3 mt-5 mb-4 text-center fw-bold">Edit the Details</h1>
                    <div className="form-floating">
                        <input type="name" className="form-control mb-2" id="name" name="name" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder='' required />
                        <label for="name" htmlFor="name">Name</label>
                    </div>
                    <div class="form-floating">
                        <input type="email" className="form-control mb-2" id="email" name="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder='' required />
                        <label for="email" htmlFor="email">Email</label>
                    </div>
                    <div class="form-floating">
                        <input type="tel" className="form-control mb-3" id="phone" name="phone" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} placeholder='' required />
                        <label for="phone" htmlFor="phone">Phone</label>
                    </div>
                    <div className='Btns'>
                    <button className="btnBt  py-2" onClick={handleUpdate}>Update</button>
                    <button className="btnBt  py-2" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default edit