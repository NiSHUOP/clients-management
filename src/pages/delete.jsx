import {db} from '../firebase.config'
import {ref, remove} from 'firebase/database'


const deleteBtn = ({userid,onDelete}) => {
    const handleDelete = () => {
        try{
            const userRef = ref(db, `user/${userid}`)
            remove(userRef)
            onDelete(userid)
        }catch(e){
            console.log(e);
        }
    }
    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default deleteBtn