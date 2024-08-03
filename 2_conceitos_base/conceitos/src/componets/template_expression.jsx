// template expression se digitar rafce ele coloca esse "cabeçario todo ja".

const template_expression = () => {
const name = "otávio"
const data = {
    age: 31,
    job: "programador"
}
 
  return (
    <div>
        <p> a soma é: {2 + 2} </p>
        <h3> bem vindo, {name}</h3>
        <p>sua idade é {data.age}, e voce é um {data.job}</p>
        <p>o resultado é: {12/3}</p>
        </div>
  )
}

export default template_expression