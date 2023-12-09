export default Page

import React from 'react'
import { navigate } from 'vike/client/router'
import { useSelector, useDispatch } from 'react-redux'

function Page() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'counter/incremented' })
  const decrement = () => dispatch({ type: 'counter/decremented' })
  const navigateToAnotherPage = () => navigate('/anotherpage')

  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={increment}>++</button> <button onClick={decrement}>--</button>
      <h1>Redux Store persists on clienside routing</h1>
      <button onClick={navigateToAnotherPage}>Go to another page</button>
    </>
  )
}
