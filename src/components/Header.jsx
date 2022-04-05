import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
      <div className="navbar navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">TNB-Sessions</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            {user ? (
                <li>
                  <button className="btn"  onClick={onLogout}>Logout</button>
                </li>
            ) : (
              <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
          
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header