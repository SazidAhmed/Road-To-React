import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'

function Register() {
  const [formData, setFormData]= useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const {user, isLoading, isError, isSuccess, message } = useSelector((state)=> state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  } 

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner />
  }


  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' value={name} onChange={onChange} placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' value={email} onChange={onChange} placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' value={password} onChange={onChange} placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="text" name='password2' value={password2} onChange={onChange} placeholder="confirm password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Login</button>
            </div>
          </ form>
        </div>
      </div>
    </>
  )
}

export default Register