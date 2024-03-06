import { useState } from 'react'

import './App.css'

// const usuario = {
//   nome: 'Regis',
// }

// let numeros = [1, 5, 4, 3, 9, 5, 0];

// const tela = numeros.map(x => x * 2);

const users = [
  {
    nome: 'Regis',
    address: 'Rua X', 
    age: 22,
    isAdmin: true
  },
  {
    nome: 'Maria',
    address: 'Rua XX', 
    age: 25,
    isAdmin: false
  },
  {
    nome: 'João',
    address: 'Rua XXI', 
    age: 34,
    isAdmin: false
  },
]


function App() {

  return (
    <>
      <div>
        {users.map((user) => (
          <h1>{user.nome} , {user.address}</h1>
        ))}
      </div>
      <div>
        {users.map((user) => (
          <h1>{user.age}</h1>
        ))}
      </div>
    </>
  )
}

export default App
