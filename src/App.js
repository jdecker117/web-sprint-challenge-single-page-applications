import React, {useState, useEffect} from "react";
import Form from './Form';
import Home from './Homepage';
import { Link, Route, Switch } from "react-router-dom";
import axios from 'axios';
import * as yup from "yup";
import schema from './validation/schema'

const App = () => {

  const initialSpecs = {
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    extraCheese: false,
    anchovies: false,
    special: ''
  }

  const initialFormErrors = {
    name: '',
    size: '',
  }

  const initialZas = [];
  const initialDisabled = true;

  const [specs, setSpecs] = useState(initialSpecs);
  const [errors, setErrors] = useState(initialFormErrors);
  const [pizzas, setPizzas] = useState(initialZas);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleSubmit = () => {
    axios.post("https://reqres.in/api/orders", specs)
    .then(res => {
      console.log(res)
      setPizzas([res.data, ...pizzas])
    }).catch(err => console.error(err))
    .finally(() => setSpecs(initialSpecs))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setSpecs({
      ...specs,[name]:value
    })
  }
  useEffect(() => {
    schema.isValid(specs).then(valid => setDisabled(!valid))
  }, [specs])

  return (
    <Switch>
      <Route path='/'>
        <Home 
        specs={specs}
        change={inputChange}
        errors={errors}
        submit={handleSubmit}
        disabled={disabled}/>
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </Switch>
  );
};
export default App;
