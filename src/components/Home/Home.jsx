import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Home = () => {
  const [id, setId] = useState(null)
  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
    <main>
      <div>
          <h1>MyChat</h1>
          <input type="text" placeholder='Escribe el ID de la sala' onChange={handleChange} />
          <Link to={`/chat/${id}`}>
            <button>Ir al chat</button>
          </Link>
      </div>
    </main>
  )
}

export default Home