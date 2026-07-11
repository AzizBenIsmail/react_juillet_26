import './App.css';
import React  , {useState ,useEffect}from 'react';
// import Navbar from './composant/Navbar';
function App() {  
  //logic
  //const name = "Aziz";
  const [name, setName] = useState("Aziz");
  //const age = 30;
  const [age, setAge] = useState(0);
  const element = <h1>Hello, {name}!</h1>;
  const isLoggedIn = true;
  const message = isLoggedIn ? "Welcome back!" : "Please log in.";

  const etudiant = {
    nom: "Aziz",
    age: 30,
    ville: "Casablanca"
  };

  function greetUser(user) {
    return `Hello, ${user.nom}! You are ${user.age} years old and live in ${user.ville}.`;
  }
  
  const listEtudiants = [
    { nom: "Aziz", age: 30, ville: "Casablanca" },
    { nom: "Sara", age: 25, ville: "Rabat" },
    { nom: "Youssef", age: 28, ville: "Marrakech" }
  ];

  return (
    <div className="App">
      <header className="App-header"> 

        {name}
        {age}
        {message}
        {isLoggedIn}
        {element}

        {etudiant.nom}
        {etudiant.age}
        {etudiant.ville}

        {greetUser(etudiant)}

        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Age</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>
            {listEtudiants.map((etudiant, index) => (
              <tr key={index}>
                <td>{etudiant.nom}</td>
                <td>{etudiant.age}</td>
                <td>{etudiant.ville}</td>
              </tr>
            ))}
          </tbody>          
        </table>

{age}
<button onMouseEnter={() => setAge(age + 1)}>Increment Age</button>
<button onMouseLeave={() => setAge(age - 1)}>Decrement Age</button>
{name}
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
