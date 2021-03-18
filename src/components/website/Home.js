import useFetch from '../composables/useFetch';
import ContactList from '../contacts/ContactList';

const Home = () => {
    //State Hook
    const {data: contacts, setData,  isLoading, isError , setRefetch} = useFetch('http://localhost:8000/contacts'
    )
    const handleDelete = (id)=>{
        // setRefetch(true) 
        //uncomment above line if you want a refetch from server after delete , but leave if you 
        //manually want to remove from done as below
       const newContact = contacts.filter( contact => contact.id !== id );
       setData(newContact);
      
    }

   

    return (  
        <div className="container">
            <div className ="card">
                <div className ="card-content">
                    { isError && <div>{ isError }</div> }
                    { isLoading && <div>Loading...</div> }
                    { contacts && <ContactList contacts={ contacts } handleDelete={handleDelete} title="Contact List"/>}
                </div>
            </div>
        </div>
    );
}
 
export default Home;