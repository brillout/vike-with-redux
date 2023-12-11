export default Page

import React from 'react'
import { navigate } from 'vike/client/router'
import { useSelector, useDispatch } from 'react-redux'

function Page() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'counter/incremented' })
  const decrement = () => dispatch({ type: 'counter/decremented' })

  return (
    <>
      <h1>Another page</h1>
      <p>Redux-Controlled Counter</p>
      Count: {count}. <button onClick={increment}>++</button> <button onClick={decrement}>--</button>
      <p>Redux Store persists on client-side routing</p>
    </>
  )
}
