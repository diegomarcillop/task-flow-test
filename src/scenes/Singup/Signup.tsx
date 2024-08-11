import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col container mx-auto px-8 py-8 relative h-screen font-poppins">
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="w-28 h-28" src={require('../../assets/img/icon.png')} />
        <h1 className="font-bold text-3xl">TaskFlow</h1>
      </div>
      <div className="w-2/5	flex flex-col gap-6 self-center p-4 mt-10">
        <input className="font-light border p-4 rounded-xl h-12" placeholder="Name" />
        <input className="font-light border p-4 rounded-xl h-12" placeholder="Last name" />
        <input className="font-light border p-4 rounded-xl h-12" placeholder="Username" />
        <input className="font-light border p-4 rounded-xl h-12" placeholder="Password" />
        <input className="font-light border p-4 rounded-xl h-12" placeholder="Repeat password" />
        <button className="font-bold bg-fuchsia-300 rounded-xl h-12">Register</button>
        <p className="font-normal self-center">
          Do you have an account?{' '}
          <button className="font-bold" onClick={() => navigate('/')}>
            LogIn
          </button>
        </p>
      </div>
    </div>
  )
}
