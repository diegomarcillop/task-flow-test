import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth as AuthActions } from '../../services/Auth/AuthActions'

const initialState = {
  email: undefined,
  name: undefined,
  lastname: undefined,
  password: undefined
}

interface PropsForm {
  value: any
  key: string
}

export const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, success } = useSelector((state: any) => state.auth)

  const [form, setForm] = useState(initialState)
  const isValid = form.email && form.password && form.name

  useEffect(() => {
    if (success.register) {
      const timer = setTimeout(() => {
        setForm(initialState)
        dispatch(AuthActions.setSuccess('register', false))
        navigate('/')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [success.register])

  const handleForm = ({ value, key }: PropsForm) => {
    setForm({ ...form, [key]: value })
  }

  const onSubmit = () => {
    console.log(form)
    dispatch(AuthActions.register(form))
  }

  return (
    <div className="flex flex-col container mx-auto px-8 py-8 relative h-screen font-poppins">
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="w-28 h-28" src={require('../../assets/img/icon.png')} />
        <h1 className="font-bold text-3xl">TaskFlow</h1>
      </div>
      <div className="w-2/5	flex flex-col gap-6 self-center p-4 mt-10">
        <input
          className="font-light border p-4 rounded-xl h-12"
          placeholder="Name*"
          value={form.name}
          onChange={({ target: { value } }) => handleForm({ value, key: 'name' })}
        />
        <input
          className="font-light border p-4 rounded-xl h-12"
          placeholder="Last name"
          value={form.lastname}
          onChange={({ target: { value } }) => handleForm({ value, key: 'lastname' })}
        />
        <input
          className="font-light border p-4 rounded-xl h-12"
          placeholder="Email*"
          type="email"
          id="email"
          value={form.email}
          onChange={({ target: { value } }) => handleForm({ value, key: 'email' })}
        />
        <input
          className="font-light border p-4 rounded-xl h-12"
          placeholder="Password*"
          type="password"
          value={form.password}
          onChange={({ target: { value } }) => handleForm({ value, key: 'password' })}
        />
        <button
          className={`font-bold bg-fuchsia-300 rounded-xl h-12 ${(!isValid || loading.register) && 'opacity-35'}`}
          disabled={!isValid || loading.register}
          onClick={onSubmit}
        >
          Register
        </button>
        <p className="font-normal self-center">
          Do you have an account?{' '}
          <button className="font-bold" onClick={() => navigate('/')}>
            LogIn
          </button>
        </p>
        {success.register && (
          <span className="w-full text-center font-normal self-center text-green-600 bg-green-100 p-2 rounded-xl">
            Successfully registered user!
          </span>
        )}
      </div>
    </div>
  )
}
