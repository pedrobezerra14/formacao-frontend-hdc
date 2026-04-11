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

// 9 - desestruturando props
import CarDetails from './components/CarDetails';

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

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
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={900} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="FIAT" km={700} color="Azul" />
      <CarDetails brand="HONDA" km={100} color="Cinza" />
      {/* 11 - renderização de lista com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </div>
  )
}

export default App
