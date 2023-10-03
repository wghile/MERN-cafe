import { Link } from 'react-router-dom';

export default function Nav({user}) {
  return (
    <nav>
      <h2>Welcome, {user.name}</h2>
        <Link to='/orders'>
            Order History
        </Link>
        &nbsp; | &nbsp;
        {/* {' '} | {' '} */}
        <Link to='/orders/new'>
            New Order
        </Link>
    </nav>
  )
}
