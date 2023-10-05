export default function OrderHistory({handleCheckToken}) {
  return (
    <div>
        <h1>Order History</h1>
        <button onClick={handleCheckToken}>
          Check When My Log In Expires
        </button>
    </div>
  )
}
