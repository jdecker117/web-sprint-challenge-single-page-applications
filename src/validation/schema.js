import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    extraCheese: yup.boolean(),
    anchovies: yup.boolean(),
    special: yup.string()
})

export default schema;