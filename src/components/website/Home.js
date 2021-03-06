import useFetch from '../composables/useFetch';
import ContactList from '../contacts/ContactList';

const Home = () => {
    //State Hook
    const {data: contacts, isLoading, isError} = useFetch('http://localhost:8000/contacts'
    )
    const handleDelete = (id)=>{
        contacts.filter( contact => contact.id !== id )
    }

    return (  
        <div className="container">
            <div className ="card">
                <div className ="card-content">
                    { isError && <div>{ isError }</div> }
                    { isLoading && <div>Loading...</div> }
                    { contacts && <ContactList contacts={ contacts } delete={handleDelete} title="Contact List"/>}
                </div>
            </div>
        </div>
    );
}
 
export default Home;