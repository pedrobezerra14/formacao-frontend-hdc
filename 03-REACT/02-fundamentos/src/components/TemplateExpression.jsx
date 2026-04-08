// 4- template expression

import MyComponent from "./MyComponent";

const TemplateExpression = () => {
  const name = "Pedro";

  const data = {
    age: 20,
    job: "Programador"
  }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression