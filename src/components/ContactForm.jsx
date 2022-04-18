import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {createContact, reset} from '../features/contact/contactSlice'
import Spinner from './Spinner'

function ContactForm(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    // const [formData, setFormData]= useState({
    //     name:'',
    //     email:'',
    //     mobile:''
    //   })
    
    // const { name, email, mobile } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {contacts, isLoading, isError, isSuccess, message } = useSelector((state)=> state.contact)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/')
        }
        dispatch(reset())
    }, [contacts, isError, isSuccess, message, navigate, dispatch])

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [e.target.name]: e.target.value,
    //     }))
    // } 
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        console.log(e.target.value)
        const contactData = {
            name,
            email,
            mobile,
        }
    
        dispatch(createContact(contactData))
        setName('')
        setEmail('')
        setMobile('')
    }

    if(isLoading){
        return <Spinner />
    }
    

    return(
        <>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile</span>
                    </label>
                    <input type="text" name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="mobile" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Save</button>
                    </div>
                </ form>
                </div>
            </div>

        </>
    )
}

export default ContactForm