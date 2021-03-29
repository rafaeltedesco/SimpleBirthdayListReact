import React from 'react'
import {useState} from 'react'
import data from './data/birthdays.json'


function BirthdayCard({children}) {
  return (
    <article>
      {children}
    </article>
  )
}

function Card(props) {

  return (
    <div key={props.key}>
      <h3>{props.pName}</h3>
      <p>Date of Birth: {props.dOB}</p>
    </div>
  )
}


function App() {
   const [bODs, setBODs] = useState(data)
  return (
    <main>
      <BirthdayCard>
        <h2>{bODs.length} birthdays today!</h2>
        {bODs.map(person=> {
          return (
           <Card pName={person.name} dOB={person.dOB} />
          )
        })}
      </BirthdayCard>
      <button onClick={(event)=> {
        event.preventDefault()
        setBODs([])
      }}>Clear All</button>
      <button onClick={(event)=> {
        event.preventDefault()
        setBODs(data)
      }}>Reload</button>
    </main>
  );
}

export default App;