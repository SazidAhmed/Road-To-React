import { Link } from 'react-router-dom';

const ContactList = ({ contacts, title }) => {

    const contactDelete = (id)=>{
        fetch('http://localhost:8000/contacts/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("deleted")
            // this.$emit('delete', id)
        }) 
    }
    return ( 
        <div className="container-fluid">
            <h4>{ title }</h4>
            <Link to={`/contact/create`} className="waves-effect waves-light btn right"><i className="material-icons left">add</i> New</Link>
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) =>(
                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ contact.name }</td>
                        <td>{ contact.email }</td>
                        <td>{ contact.phone }</td>
                        <td>
                            <Link to={`/contact/details/${contact.id}`}><i className="material-icons green-text">visibility</i></Link>
                            <Link to={`/contact/edit/${contact.id}`}><i className="material-icons blue-text">edit</i></Link>
                            <span onClick={()=>contactDelete(contact.id)}><i className="material-icons red-text">delete</i></span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
export default ContactList;