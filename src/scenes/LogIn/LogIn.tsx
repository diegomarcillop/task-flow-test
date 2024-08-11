import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { auth as AuthActions } from '../../services/Auth/AuthActions'

const initialState = {
  email: undefined,
  password: undefined
}

interface PropsForm {
  value: any
  key: string
}

export const LogIn = () => {
  const dispatch = useDispatch()
  const { error } = useSelector((state: any) => state.auth)

  const [form, setForm] = useState(initialState)
  const isValid = form.email && form.password

  const navigate = useNavigate()

  useEffect(() => {
    if (error.login) {
      const timer = setTimeout(() => {
        dispatch(AuthActions.setError('login', false))
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [error.login])

  const handleForm = ({ value, key }: PropsForm) => {
    setForm({ ...form, [key]: value })
  }

  const onSubmit = () => {
    dispatch(AuthActions.login(form))
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
          placeholder="Email"
          type="email"
          required
          id="email"
          value={form.email}
          onChange={({ target: { value } }) => handleForm({ value, key: 'email' })}
        />
        <input
          className="font-light border p-4 rounded-xl h-12"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={({ target: { value } }) => handleForm({ value, key: 'password' })}
        />
        <button
          className={`font-bold bg-fuchsia-300 rounded-xl h-12 ${!isValid && 'opacity-35'}`}
          disabled={!isValid}
          onClick={onSubmit}
        >
          Go!
        </button>
        <p className="font-normal self-center">
          Don't have an account?{' '}
          <button className="font-bold" onClick={() => navigate('/signup')}>
            Register
          </button>
        </p>
        {error.login && (
          <span className="w-full text-center font-normal self-center text-red-600 bg-red-100 p-2 rounded-xl">
            Email or password are incorrect!
          </span>
        )}
      </div>
    </div>
  )
}
