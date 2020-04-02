import { Page, FormLayout, TextField, Button } from '@shopify/polaris'
import React, { useState } from 'react'


const Registro = () => {

    const [shop, setShop] = useState();
    const[legal, setLegal] =useState();
    const[phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const[creditcart, setCreditCard] = useState();
    
    const handleSave = ()=>{
       console.log('Datos:', shop, legal, phone, email, creditcart)
    }  

    return(
        <Page fullWidth={false}>
            <FormLayout>
                <TextField label="Nombre de la tienda" value={shop} onChange={(newValue) => setShop(newValue)}  />
                <TextField label="Nombre del representante legal" value={legal} onChange={(newValue) => setLegal(newValue)} />
                <TextField label="Telefóno" value={phone} onChange={(newValue) => setPhone(newValue)} />
                <TextField type="email" label="Email" value={email} onChange={(newValue) => setEmail(newValue)} />
                <TextField label="Tarjeta de crédito" value={creditcart} onChange={(newValue) => setCreditCard(newValue)} />
                <Button onClick ={handleSave} >  Guardar </Button>
            </FormLayout>   
        </Page>
    ) 
}
export default Registro