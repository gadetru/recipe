import React, { useState } from 'react'
import './ingredients.scss'

export const Ingredients = () => {

    // const [checkboxes, setCheckboxes] = useState([
    //     { id: 1, label: '1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)', isChecked: false },
    //     { id: 2, label: 'Texto del Checkbox 2', isChecked: false },
    //     { id: 3, label: 'Texto del Checkbox 3', isChecked: false },
    //     { id: 4, label: 'Texto del Checkbox 4', isChecked: false },
    //     { id: 5, label: 'Texto del Checkbox 5', isChecked: false },
    //     { id: 6, label: 'Texto del Checkbox 6', isChecked: false },
    //   ]);
    
    //   const handleCheckboxChange = (id) => {
    //     setCheckboxes((prevCheckboxes) =>
    //       prevCheckboxes.map((checkbox) =>
    //         checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
    //       )
    //     );
    //   };
      
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

        </div>
        <div>
            
            <p>Cheesecake</p>
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

        </div>

    </div>
  )
}
