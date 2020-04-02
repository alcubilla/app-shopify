import { Page, FormLayout, TextField, Button, useCallback } from '@shopify/polaris'
import React, { useState } from 'react'


const Registro = () => {
    const [shop, setShop] = useState();
    const[legal, setLegal] =useState();
    const[phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const[creditcart, setCreditCard] = useState();

    const handleChange = ((newValue) => setValue(newValue), []);

return(
    <Page fullWidth={false}>
        <FormLayout>
             <TextField label="Nombre de la tienda" value={value} onChange={handleChange}  />
             <TextField label="Nombre del representante legal" onChange={() => {setLegal=TextField.value}} />
             <TextField label="Telefóno" onChange={() => {setPhone=TextField.value}} />
            <TextField type="email" label="Email" onChange={() => {setEmail= TextField.value}} />
            <TextField label="Tarjeta de crédito" onChange={() => {setCreditCard = TextField.value}} />
            <Button onClick = {console.log(shop,legal,phone, email,creditcart)}>Guardar</Button>
        </FormLayout>   
    </Page>
)

}
export default Registro