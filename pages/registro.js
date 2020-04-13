import { Page, FormLayout, TextField, Button, Form, Layout, Stack } from '@shopify/polaris'
import React, { useState } from 'react'


const Registro = () => {

    const [shop, setShop] = useState();
    const[legal, setLegal] =useState();
    const[phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const[creditcart, setCreditCard] = useState();
    
    const handleSubmit= ()=>{
       console.log('Datos:', shop, legal, phone, email, creditcart)
    }  

    return(
        <Page fullWidth={false}>
            <Form onSubmit = {handleSubmit}>
                <FormLayout>

                    <Layout.Section oneHalf>
                        <TextField 
                            label="Nombre de la tienda" 
                            type="text"
                            value={shop} 
                            onChange={(newValue) => setShop(newValue)}  />
                        <TextField 
                            label="Nombre del representante legal" 
                            type="text"
                            value={legal} 
                            onChange={(newValue) => setLegal(newValue)} />
                        <TextField 
                            label="Telefóno" 
                            type="text"
                            value={phone} 
                            onChange={(newValue) => setPhone(newValue)} />  
                    </Layout.Section>

                    <Layout.Section oneHalf>
                        <TextField 
                            type="email" 
                            label="Email" 
                            value={email} 
                            onChange={(newValue) => setEmail(newValue)} />
                        <TextField 
                            label="Tarjeta de crédito" 
                            value={creditcart} 
                            onChange={(newValue) => setCreditCard(newValue)} />
                        <Stack distribution="trailing">
                             <Button primary submit> Guardar </Button>
                        </Stack>

                    </Layout.Section>
                </FormLayout>   
            </Form>
        </Page>
    ) 
}
export default Registro