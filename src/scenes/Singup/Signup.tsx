export const Signup = () => {
  return (
    <div className="flex flex-col container mx-auto px-8 py-8 relative h-screen font-poppins">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-fuchsia-300 rounded-xl w-20 h-20 flex justify-center items-center">
          <span className="material-icons text-5xl">sort</span>
        </div>
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
          Do you have an account? <button className="font-bold">LogIn</button>
        </p>
      </div>
    </div>
  )
}
