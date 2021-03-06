import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const ContactEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [contact, setContact] = useState({
    name:'',
    email:'',
    phone:''
  });
  
  const { name, email, phone } = contact;
  
  const onInputChange = (e)=>{
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  //hook
  useEffect(() => {
    let ignore =false;
    //Get single contact
    async function getContact(){
      const response = await fetch('http://localhost:8000/contacts/' + id);
      const json = await response.json();
      if(!ignore) setContact(json);
    }
    getContact();
    return()=>{ ignore = true };
  }, [id])

  //Post edited contact
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    fetch('http://localhost:8000/contacts/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    }).then(() => {
      setIsLoading(false);
      history.push('/');
    })
  }

  return (
    <div className="container">
        {contact && (
          <div className ="card">
            <div className ="card-content">
                <h5>Update Contact</h5>
                <form className="col s12" onSubmit={handleSubmit}>
                  <div className="row">
                      <div className="input-field col s12">
                          <input name="name" type="text" className="validate" placeholder="Name" value={name} onChange={(e) => onInputChange(e)} />
                      </div>
                      <div className="input-field col s12">
                          <input name="email" type="email" className="validate" placeholder="Email" value={email} onChange={(e) => onInputChange(e)} />
                      </div>
                      <div className="input-field col s12">
                          <input name="phone" type="number" className="validate" placeholder="Phone" value={phone} onChange={(e) => onInputChange(e)} />
                      </div>
                  </div>
                  { !isLoading && <button className="waves-effect waves-light btn-small"><i className="material-icons left">add</i>Update Contact</button> }
                    { isLoading && <button className="waves-effect waves-light btn-small" disabled>Updating Contact ...</button> }
                </form>
            </div>
          </div>
        )}
    </div>

  );
}
 
export default ContactEdit;