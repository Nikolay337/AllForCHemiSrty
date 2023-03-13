import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {

  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/home')
  }, 2000);

  return (
    <div>Oops! Something went wrong!</div>
  )
}

export default ErrorPage