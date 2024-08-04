// evento de click

const events = () => {
const Cliquei = () => {
    console.log("cliquei filho")
}
   
  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>Clique aqui</button>
        </div>
        <div>
            <button onClick={Cliquei}> clique aqui c função</button>
        </div>
       
    </div>
  )
}

export default events