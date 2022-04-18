import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import ContactForm from '../../components/ContactForm'
import {toast} from 'react-toastify'
import {contactList, reset} from '../../features/contact/contactSlice'
import Spinner from '../../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)
  const {contacts, isLoading, isError, isSuccess, message } = useSelector((state)=> state.contact)

  useEffect(()=>{
    if (isError) {
      toast.error(message)
    }
    
    if(!user){
      navigate('/login')
    }

    dispatch(contactList())

    return()=>{
      dispatch(reset())
    }
  }, [user, navigate, isError, isSuccess, message, dispatch])

  // if(isLoading){
  //   console.log('loading')
  // }

  return (
    <>
      <h1>Welcome { user && user.name }</h1>
     
    </>
  )
}

export default Dashboard