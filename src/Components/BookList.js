import { db } from '../Firebase/Config'
import { doc,deleteDoc } from 'firebase/firestore'
import {AiOutlineCloseCircle} from "react-icons/ai";
export default function BookList({ books }) {

    const handleClick = async (id) => {
      const ref = doc(db,"books",id)

      await deleteDoc(ref);
    }
  
    return (
      <div className="book-list">
        <h1 className='welcome-title'>Welcome to Library App</h1>
        <ul>
          {books.map(book => (
            <>
            
            <li key={book.id} >{book.title}
            <AiOutlineCloseCircle className='delete-btn' size={25} onClick={() => handleClick(book.id)}/>
            
            </li>
            
            </>
          ))}
        </ul>
      </div>
    )
  }