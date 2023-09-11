// "use client"
import React from 'react'

function Home() {
  return (
    <div>
        <p>{process.env.INI_ENV}</p>
    </div>
  )
}

export default Home