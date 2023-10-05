import SignUpForm from '../components/SignUpForm'
import LoginForm from './LogInForm'

export default function Auth({setUser}) {
  return (
    <div>
      <main>
        <h1>Auth</h1>
        <SignUpForm setUser = {setUser}/>
        <LoginForm setUser = {setUser}/>
      </main>
    </div>
  )
}
