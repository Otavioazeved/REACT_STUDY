import './App.css';
// 2 - importando componente

import FirstComponents from './componets/FirstComponents'
import TemplateExpression from './componets/template_expression'
import MyComponents from './componets/MyComponents';

 function App() {
 

  return (
    
      <div className='App'>
        <h1>Fundamentos do react</h1>
        <FirstComponents/>
        <TemplateExpression/>
        <MyComponents />

        {/*template expression */}

      </div>

    
  )
}

export default App;
