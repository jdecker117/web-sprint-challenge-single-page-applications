import React from "react";

export default function Form(props){
const {specs, submit, change, disabled, errors} = props;

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse)
  }

    return(
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h4>Name</h4>
                <label>Enter Name
                    <input 
                    id="name-input"
                    value={specs.name}
                    type='text'
                    name='name'
                    onChange={onChange}/>
                </label>
            </div>
            <div className='form-group dropdown'>
                <h4>Size</h4>
                <label>Select Size
                    <select
                    value={specs.size}
                    name={'size'}
                    id='size-dropdown'
                    onChange={onChange}
                    >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
            </div>
            <div className="form-group check">
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={specs.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                    type='checkbox'
                    name='sausage'
                    checked={specs.sausage}
                    onChange={onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input 
                    type='checkbox'
                    name='extraCheese'
                    checked={specs.extraCheese}
                    onChange={onChange}
                    />
                </label>
                <label>Anchovies
                    <input 
                    type='checkbox'
                    name='anchovies'
                    checked={specs.anchovies}
                    onChange={onChange}
                    />
                </label>
            </div>
            <div className="form-group text">
                <label>Special Instructions
                    <input 
                    id="special-text"
                    value={specs.special}
                    name='special'
                    type='text'
                    onChange={onChange}/>
                </label>
            </div>
            <div className="form-group submit">
                <button disabled={disabled} id="order-button">Submit</button>
            </div>
            <div className='errors'>
            
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            </div>
        </form>
    )
}