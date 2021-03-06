import { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactCreate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email, phone };
    setIsLoading(true);

    fetch('http://localhost:8000/contacts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    }).then(() => {
      // history.go(-1);
      setIsLoading(false);
      history.push('/');
    })
  }

  return (
    <div className="container">
        <div className ="card">
            <div className ="card-content">
                <h5> Create New Contact </h5>
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field col s12">
                            <input id="phone" type="number" className="validate" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    { !isLoading && <button className="waves-effect waves-light btn-small"><i className="material-icons left">add</i>Contact</button> }
                    { isLoading && <button className="waves-effect waves-light btn-small" disabled>Adding Contact ...</button> }
                </form>
            </div>
        </div>
    </div>

  );
}
 
export default ContactCreate;