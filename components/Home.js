//import { TextStyle } from '@shopify/polaris'
import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link, Card, Stack, Button,Spinner } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = ({ 
    shop_is_loading, 
    shop_exists, 
    shop_status, 
    getShopifyData 
}) => {

    useEffect(()=>{

        getShopifyData()

    },[])//Se ejecuta 1 sola vez al montarse el componente

    const [open, setOpen] = useState(false)

    const router = useRouter()
    

    const handleSelection = (resources)=>{
        setOpen(false)
        //console.log(resources)        
    }

    let accionBotones = <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
    
    if(shop_is_loading===false){
        accionBotones=(
            <Card sectioned>                        
                            
                <Button fullWidth={true} onClick={()=>router.push('/registro')} disabled={shop_exists===true}>Registro</Button>
                <Button fullWidth={true} onClick={ () => setOpen(true)} disabled={shop_exists===false}>Enviar productos a revisión</Button>                            
                        
            </Card>
       
        )
    }

    return (
        <Page fullWidth>

            <TitleBar
                primaryAction={{
                    content: 'Hola soy un primary'
                }}

                
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={handleSelection}
                onCancel={()=> setOpen(false)}
            />
           
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
                    {accionBotones}
                </Layout.Section>
            </Layout>    

            <FooterHelp>
                MARINA{' '}
                <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                    ALCUBILLA
                </Link>
            </FooterHelp>
        </Page>    
    )
}


export default Index