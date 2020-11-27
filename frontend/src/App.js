import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './App.css';

// with props
const Hello = (props) => {
  return (
    <div>
    <h1> Hey!! {props.name} </h1>
     <p> You Age : {props.age}</p>
    </div>
  );
}


const nameList = [
  {id: "1", name:"charith" , age: 30},
  {id: "2", name:"janith" , age: 20},
  {id: "3", name:"kelum" , age: 25}
]

// array destructuring
const [f,k,t] = [
  "pop",
  "bob",
  "karl"
]


// using React Fragment to wrap sibling components if any <> ..... </>
const FriendstList = (props) => {
  return (
    <> 
    <ul>
    <li>{props.name}</li>
    </ul>
    </>
  );
}

// using React Fragment to wrap sibling components if any <> ..... </>
const StudentList = (props) => {
  return (
    <> 
    <ul>
    {props.names.map((name) => 
    <div key={name.id}>
    <li>{name.name} {name.age}
    </li>
    </div>)}
    </ul>
    </>
  );
}

// with iterator as the key (i)
const TeacherList = (props) => {
  return (
    <ul>
    {props.names.map((name, i) => 
    <div key={i}>
    <li>{name.name} {name.age}
    </li>
    </div>)}
    </ul>
  );
}

// Not Found
const NotFound = (props) => {
  return (
    <h1> This use case not Found!</h1>
  );
}

// Building a working checkBox with useStatus
const CheckBox = () => {
  const [checked, setChecked] = useState(true);
  return (
    <>
    <input type="checkbox" value={checked} onChange = {
      () => setChecked(checked => !checked)
    } />
    {checked ? "selected" : "not selected"}
    </>
  )
}

const App = (props) => {
  const [status, setStatus] = useState("Open"); 
  if (props.type === "student") {
     return ( 
      <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
      </Jumbotron>
      <Hello className = "h1txt" 
      name="kalum"
      age = {30}/>
      <h1>{status}</h1>
      <button onClick= {() => setStatus("Closed" + " gono") /* Any function */}>Close Now</button>
      <hr />
      <StudentList names={nameList}/>
      <FriendstList name={k}/>
      <br />
      <CheckBox />
      </Container>
    );
  } else {
    return <NotFound />;
  }
};

export default App;
