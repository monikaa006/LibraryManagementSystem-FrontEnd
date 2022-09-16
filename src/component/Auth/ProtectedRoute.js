import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();
  const login = localStorage.getItem("login")
  // console.log(role)
  useEffect(() => {
    if (!login) {
      navigate("/LoginForm")
    }
  }, [])

  return (
    <div>
      <Cmp />
    </div>
  )
}

export default ProtectedRoute
