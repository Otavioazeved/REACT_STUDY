// evento de click

const events = () => {
const Cliquei = () => {
    console.log("cliquei filho")
}
const puteiro = () =>{
  console.log("partiu zona")
}
const renderSomething = (x) =>{
  if(x) {
    return <h1>Renderizando isso !!</h1>
  }else {
    return <h1>renderizando outra coisa</h1>
  }

}
return 10 > 2 && <p>Carregando...</p>
   
  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>Clique aqui</button>
        </div>
        <div>
          <button onClick={puteiro}>clica aqui no puteiro</button>
        </div>
        <div>
            <button onClick={Cliquei}> clique aqui c função</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
       
    </div>
  )
}

export default events