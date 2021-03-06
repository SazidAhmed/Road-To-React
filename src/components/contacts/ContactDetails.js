import { useParams} from "react-router-dom";
import useFetch from "../composables/useFetch";
import M from 'materialize-css';

const ContactDetails = () => {
  var elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);

  const { id } = useParams();
  const { data: contact, isLoading, isError } = useFetch('http://localhost:8000/contacts/' + id);

  return (
    <div className="container">
      { isLoading && <div>Loading...</div> }
      { isError && <div>{ isError }</div> }
      { contact && (
        <ul className="collapsible">
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Name</div>
            <div className="collapsible-body"><span>{ contact.name }</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Email</div>
            <div className="collapsible-body"><span>{ contact.email }</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Phone</div>
            <div className="collapsible-body"><span>{ contact.phone }</span></div>
          </li>
        </ul>
      )}
    </div>
  );
}
 
export default ContactDetails;