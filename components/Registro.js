import { Page, FormLayout, TextField, Button, Form, Layout, Stack, Spinner, Toast, Frame } from '@shopify/polaris'
import  { useState } from 'react'
import { useRouter}  from 'next/router'




const Registro = ({
    shop_is_loading,
    shop_exists,
    shop,
    shop_error,

    createShop,
    clearError

    }) => {

    const router = useRouter()

    const [nombre, setNombre] = useState(shop.name);
    const[representante, setRepresentante] =useState(shop.shop_owner);
    const[telefono, setTelefono] = useState(shop.phone);
    const [email, setEmail] = useState(shop.customer_email);
    const[tarjeta, setTarjeta] = useState('');

    
    
    const handleSubmit= ()=>{
        
       console.log('Datos:', nombre, representante, telefono, email, tarjeta)

       const payload = {
           name: nombre,
           email: email,
           shop_owner: representante,
           telephone: telefono,
           shopify_shop_id: shop.id,
           myshopify_domain: shop.myshopify_domain
       }

       createShop(payload)
    }  


    const handleToastDismiss = () =>{
        clearError()
    }

    let toast = null
    
    if (shop_error !== null){
        toast = <Toast content={shop_error} onDismiss={handleToastDismiss}/>
    }

    let button = <Button primary submit > Guardar </Button>

    if(shop_is_loading){
        button =  <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
    
    }

    if(shop_exists){
        router.push('/')
    }


    return(
        <Frame> 
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
                                    {button}
                                </Stack>

                            </Layout.Section>
                        </Layout>
                    </FormLayout>   
                </Form>
               
            </Page>
            {toast}
        </Frame>
    ) 
}
export default Registro