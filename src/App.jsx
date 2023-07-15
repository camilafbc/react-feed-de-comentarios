import { useState } from 'react'
import Coment from './components/Coment';
import Form from './components/Form'


function App() {

  const [allComents, setAllComents] = useState([])

  const addComentario = ({email, texto}) => {
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date()
    const coment = {id, email, date, texto}
    setAllComents((state) => {
      return [coment, ...state]
    })
  }

  return (
    <div id='app'>
      <h1>Seção de Comentários</h1>
      <Form
        addComentario={addComentario}
      />
      <hr/>
      <div className="comentarios">
        {allComents.length > 0 ?
        allComents.map((coment) => (
          <Coment 
            key={coment.id}
            email={coment.email}
            date={coment.date.toLocaleString()}
            coment={coment.texto}
          />
        )) : 
          (<p>Seja o primeiro a comentar</p>)
        }
      </div>
    </div>
  )
}

export default App
