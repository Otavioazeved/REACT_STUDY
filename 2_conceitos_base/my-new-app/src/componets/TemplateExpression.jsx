const TemplateExpression = () =>{
    const name = "otavio"
    const data = {
        job: "programador",
        name: "jorge"
    }
    return(
        <div>
            <p> a soma é: {2 + 2}</p>
            <p>bem vindo, {name}</p>
            <p>ola, {data.name}, aqui esta seu pc sei que vc é um otimo{data.job} </p>
        </div>
    
    )
}

export default TemplateExpression