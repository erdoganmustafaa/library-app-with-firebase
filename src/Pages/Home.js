
import BookList from '../Components/BookList'
import BookForm from '../Components/BookForm'
import { useCollection } from '../Hooks/useCollection'
import { useAuthContext } from '../Hooks/useAuthContext';
export default function Home() {
  const {user} = useAuthContext();
  const {documents:books} = useCollection("books",["uid","==",user.uid]);
  
  return (
    <div className="App">
      
      {books && 
      
      <BookList books={books} />}
      <BookForm />
    </div>
  );
}