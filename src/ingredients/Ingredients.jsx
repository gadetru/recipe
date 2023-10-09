import React from 'react'
import './ingredients.scss'
import cuchillo from './img/cuchilleria.png'
import reloj from './img/reloj-contorno-circular.png'
export const Ingredients = () => {

      
  return (
    <div className='ingredientes-leyenda'>
        <div>
            <h3 className='ingredients-title'>Ingredients</h3>
            <p>Graham Cracker Crust</p>
            <ul>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>1 and 1/2 cups (150g) <span>graham cracker crumbs</span> (about 10 full sheet graham crackers)</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>5 Tablespoons (70g) <span>unsalted butter</span>, melted</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>1/4 cup (50g) <span>granulated sugar</span></label> 
                </li>
               
            </ul>

            <p>Cheesecake</p>
            <ul>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>four 8-ounce blocks (904g) full-fat <span>cream cheese</span>, softened to room temperature</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>1 cup (200g) <span> granulated sugar</span></label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>1 cup (240g) full-fat <span>sour cream</span> , at room temperature</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>1 teaspoon <span> pure vanilla extract</span></label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>2 teaspoons <span> fresh lemon juice</span> (optional, but recommended)</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
                    />
                    <label>3 large <span>eggs</span>, at room temperature</label> 
                </li>
                <li >
                    <input
                        type='checkbox'
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
