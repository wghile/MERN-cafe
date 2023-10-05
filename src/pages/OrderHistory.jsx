import * as userServices from '../utilities/users-service'

export default function OrderHistory() {

  const handleCheckToken = async () => {
    userServices.checkToken()
  }

  return (
    <div>
        <h1>Order History</h1>
        <button onClick={handleCheckToken}>
          Check When My Log In Expires
        </button>
    </div>
  )
}
