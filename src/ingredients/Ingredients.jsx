import React,{useState,useEffect} from 'react'
import './ingredients.scss'
import cuchillo from './img/cuchilleria.png'
import reloj from './img/reloj-contorno-circular.png'

export const Ingredients = () => {

    // const opciones ={
    //     option1: false,
    //     option2: false,
    //     option3: false,
    //     option4: false,
    //     option5: false,
    //     option6: false,
    //     option7: false,
    //     option8: false,
    //     option9: false,
    //     option10: false,
    // Agrega más opciones según sea necesario
    
    
    const [checkboxValues, setCheckboxValues] = useState('');


    // Manejar el cambio de las casillas de verificación
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const body =  {...checkboxValues, [name]: checked,}

        setCheckboxValues(body);
        localStorage.setItem('checkboxValues', JSON.stringify(body));
    };


    // Recuperar los valores del localStorage al cargar la página
    useEffect(() => {
        const savedCheckboxValues = JSON.parse(localStorage.getItem('checkboxValues'));
        if (savedCheckboxValues) {
            setCheckboxValues(savedCheckboxValues);
        }
    }, []);



      
  return (
    <div className='ingredientes-leyenda'>
        <div>
            <h3 className='ingredients-title'>Ingredients</h3>
            <p>Graham Cracker Crust</p>
            <ul>
                <li >
                    <input
                        type="checkbox"
                        name="option1"
                        checked={checkboxValues.option1}
                        onChange={handleCheckboxChange}
                    />
                    <label>1 and 1/2 cups (150g) <span>graham cracker crumbs</span> (about 10 full sheet graham crackers)</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option2"
                        checked={checkboxValues.option2}
                        onChange={handleCheckboxChange}
                    />
                    <label>5 Tablespoons (70g) <span>unsalted butter</span>, melted</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option3"
                        checked={checkboxValues.option3}
                        onChange={handleCheckboxChange}
                    />
                    <label>1/4 cup (50g) <span>granulated sugar</span></label> 
                </li>
               
            </ul>

            <p>Cheesecake</p>
            <ul>
                <li >
                    <input
                        type="checkbox"
                        name="option4"
                        checked={checkboxValues.option4}
                        onChange={handleCheckboxChange}
                    />
                    <label>four 8-ounce blocks (904g) full-fat <span>cream cheese</span>, softened to room temperature</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option5"
                        checked={checkboxValues.option5}
                        onChange={handleCheckboxChange}
                    />
                    <label>1 cup (200g) <span> granulated sugar</span></label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option6"
                        checked={checkboxValues.option6}
                        onChange={handleCheckboxChange}
                    />
                    <label>1 cup (240g) full-fat <span>sour cream</span> , at room temperature</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option7"
                        checked={checkboxValues.option7}
                        onChange={handleCheckboxChange}
                    />
                    <label>1 teaspoon <span> pure vanilla extract</span></label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option8"
                        checked={checkboxValues.option8}
                        onChange={handleCheckboxChange}
                    />
                    <label>2 teaspoons <span> fresh lemon juice</span> (optional, but recommended)</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option9"
                        checked={checkboxValues.option9}
                        onChange={handleCheckboxChange}
                    />
                    <label>3 large <span>eggs</span>, at room temperature</label> 
                </li>
                <li >
                    <input
                        type="checkbox"
                        name="option10"
                        checked={checkboxValues.option10}
                        onChange={handleCheckboxChange}
                    />
                    <label>topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)</label> 
                </li>
               
            </ul>

        </div>
        <div className='detalles'>
            <div className='detalles-column'>
                <div className='detalles-row'>
                <img alt='cuchillo' src={cuchillo}></img>
                <div>
                    <h4>yields</h4>
                    <p className='servings'>12 servings</p>
                </div>
            </div>  
            </div>
            <div className='detalles-column'>
                <div className='detalles-row'>
                    <img alt='reloj' src={reloj}></img>
                    <div>
                        <h4>Prep TIme</h4>
                        <p>45 minutes</p>
                    </div>
                </div>  
                <div className='detalles-row'>
                    <img alt='reloj' src={reloj}></img>
                    <div>
                        <h4>Cook Time</h4>
                        <p>1 hour</p>
                    </div>
                </div>  
                <div className='detalles-row'>
                    <img alt='reloj' src={reloj}></img>
                    <div>
                        <h4>Total Time</h4>
                        <p>7,75 hours</p>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
