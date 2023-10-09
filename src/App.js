
import './app.scss'
import { Fragment } from 'react';
import { Title } from './title/Title';
import { Ingredients } from './ingredients/Ingredients';
import { Instructions } from './instructions/Instructions';


function App() {
  return (
    <Fragment>
    
      <Title/>
      <Ingredients/>
      <Instructions/>

    </Fragment>
      
    
  );
}


export default App;
