//import { TextStyle } from '@shopify/polaris'
import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link, Card, Stack, Button } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = ({ 
    shop_is_loading, 
    shop_exists, 
    shop_status, 
    getShopifyData 
}) => {

    //variable
    //props.nombre

    //funcion
    //props.mifuncion()
    useEffect(()=>{
        getShopifyData()
    },[])//Se ejecuta 1 sola vez al montarse el componente

    const [open, setOpen] = useState(false)

    
    

    const handleSelection = (resources)=>{
        setOpen(false)
        //console.log(resources)        
    }
    
    return (
        <Page fullWidth>

            <TitleBar
                primaryAction={{
                    content: 'Hola soy un primary ---'
                }}

                
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={handleSelection}
                onCancel={()=> setOpen(false)}
            />
            {/*
            <Layout>
                <EmptyState
                    heading="Soy un titulo"
                    action={{
                        content: 'Click on me',
                        onAction: ()=> setOpen(true)
                    }}
                    image={img}
                >
                    <p>Selecciona productos</p>
                </EmptyState>
            </Layout>
                */}
            <Layout>
                <Layout.Section>
                    <Card title="Home" sectioned>
                        <Stack>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend metus non vestibulum faucibus. Duis interdum vel arcu imperdiet tempus. Mauris nec suscipit nisi. Sed malesuada vehicula diam, sit amet ornare libero rutrum nec. Nam ultricies aliquet mi id mattis. Proin iaculis sem mi, id elementum felis facilisis id. Mauris semper, quam non hendrerit sollicitudin, diam diam lacinia ante, a elementum eros ipsum non nulla. Nullam et lacus in dui ultrices ullamcorper. Vivamus consequat tortor eu risus mattis, imperdiet iaculis arcu porta. Nulla neque velit, ullamcorper vel imperdiet non, volutpat a orci. Suspendisse purus dolor, vestibulum et orci eget, convallis tincidunt nisi. Suspendisse in cursus est. In quis urna nec eros volutpat faucibus. Vivamus malesuada metus et erat vulputate semper.</p>

                            <p>Aliquam suscipit interdum nisl. Integer maximus erat non iaculis vulputate. Nulla lacus est, consequat a hendrerit at, posuere feugiat neque. Mauris lectus sem, malesuada id est quis, vehicula tempor magna. Mauris pharetra sed velit sed lobortis. Aliquam at risus euismod, convallis turpis vitae, cursus felis. Mauris commodo ex venenatis nisi imperdiet, eu iaculis libero commodo. Quisque scelerisque dolor eget placerat pharetra. Nulla iaculis quam tincidunt enim tempus malesuada.</p>
                        </Stack>                        
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card sectioned>                        
                            
                        <Button fullWidth={true} url={'/registro'}>Registro</Button>
                        <Button fullWidth={true} onClick={ () => setOpen(true)}>Enviar productos a revisión</Button>                            
                        
                    </Card>
                </Layout.Section>
            </Layout>    

            <FooterHelp>
                Soy Fernando{' '}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    Castillo
                </Link>
            </FooterHelp>
        </Page>    
    )
}


export default Index