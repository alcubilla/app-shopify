import { Page, FormLayout, TextField, Button, Form, Layout, Stack } from '@shopify/polaris'
import React, { useState } from 'react'


const Registro = () => {

    const [nombre, setNombre] = useState();
    const[representante, setRepresentante] =useState();
    const[telefono, setTelefono] = useState();
    const [email, setEmail] = useState();
    const[tarjeta, setTarjeta] = useState();

    const [store,setStore] = useState();
    
    const handleSubmit= ()=>{
       console.log('Datos:', nombre, representante, telefono, email, tarjeta)
    }  

    return(
        <Page fullWidth title={"Registro"}>
            <Form onSubmit = {handleSubmit}>
                <FormLayout>
                    <Layout>

                        <Layout.Section oneHalf>
                            <TextField 
                                label="Nombre de la tienda" 
                                type="text"
                                fullWidth
                                value={nombre} 
                                onChange={(newValue) => setNombre(newValue)}  />
                            <TextField 
                                label="Nombre del representante legal" 
                                type="text"
                                fullWidth
                                value={representante} 
                                onChange={(newValue) => setRepresentante(newValue)} />
                            <TextField 
                                label="Telefóno" 
                                type="text"
                                fullWidth
                                value={telefono} 
                                onChange={(newValue) => setTelefono(newValue)} />  
                        </Layout.Section>

                        <Layout.Section oneHalf>
                            <TextField 
                                type="text" 
                                label="Email" 
                                fullWidth
                                value={email} 
                                onChange={(newValue) => setEmail(newValue)} />
                            <TextField 
                                label="Tarjeta de crédito" 
                                fullWidth
                                value={tarjeta} 
                                onChange={(newValue) => setTarjeta(newValue)} />
                            <Stack distribution="trailing">
                                <Button primary submit> Guardar </Button>
                            </Stack>

                        </Layout.Section>
                    </Layout>
                </FormLayout>   
            </Form>
        </Page>
    ) 
}
export default Registro