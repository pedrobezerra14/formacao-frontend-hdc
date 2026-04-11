import './App.css'

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3- useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imgaem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/* 7 - condicional render */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Pedro" />
    </div>
  )
}

export default App
