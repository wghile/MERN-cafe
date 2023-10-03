import SignUpForm from '../components/SignUpForm'

export default function Auth({setUser}) {
  return (
    <div>
      <main>
        <h1>Auth</h1>
        <SignUpForm setUser = {setUser}/>
      </main>
    </div>
  )
}
