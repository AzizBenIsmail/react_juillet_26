import React from 'react'

export default function Navbar(props) {
    //logic
  return (
    <div>
      {/* html + js */}
      {props.name}
      {props.etudiants.map((etudiant, index) => (
        <div key={index}>
          <p>Nom: {etudiant.nom}</p>
          <p>Age: {etudiant.age}</p>
          <p>Ville: {etudiant.ville}</p>
        </div>
      ))}
      Navbar
    </div>
  )
}
