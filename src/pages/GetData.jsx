import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { ref, get } from 'firebase/database'
import Delete from './delete'
import { toast } from 'react-toastify'
import Edit from './edit'
const GetData = () => {

    //edit data
    const[editUser,setEditUser] = useState(null)


    const [users, setUsers] = useState([])
    useEffect(() => {
        const featchData = async () => {
            const userRef = ref(db, 'user')
            try {
                const snapshot = await get(userRef)
                const data = snapshot.val();
                const userArray = Object.keys(data).map((key) => (
                    {
                        id: key,
                        ...data[key]
                    }
                ))
                setUsers(userArray)
                console.log("Featched Data ", userArray);
            } catch (error) {
                console.log(error);
            }
        }
        featchData()
    }, [])
    //handle delete
    const handleDelete = (deleteUserId) => {
        setUsers((PrevUser) =>
            PrevUser.filter((user) => user.id !== deleteUserId)
        )
        toast.warn("Data Deleted Successfully!")
    }
    //handle edit
    const handleEdit = (user) => {
         setEditUser(user)
    }
    //handleCloseEdit
    const handleCloseEdit = () => {
        setEditUser(null)
    }
    //handleUpdateUser
    const handleUpdateUser = (userid, updateName,updateEmail,updatePhone) => {
        setUsers((PrevUser)=>
            PrevUser.map((user)=>
            user.id === userid ? {...user, name:updateName,
                 email:updateEmail, phone:updatePhone}:user
            )
        )
    }

    return (
        <>
            <h1 className="h3 mt-5 mb-4 text-center fw-bold">Contact Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => (
                            <tr key={user.id}>
                                <td scope="row">{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Delete userid={user.id} onDelete={handleDelete} />
                                <button className='ms-3' onClick={() => handleEdit(user)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
                    {
                        editUser && (<Edit user={editUser}
                            onClose = {handleCloseEdit}
                            onUpdate = {handleUpdateUser}
                            />)
                    }
        </>
    )
}

export default GetData