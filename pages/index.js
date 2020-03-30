import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import { useState } from 'react'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


const Index = () => {

    const [open, setOpen] = useState(false)

    const handleSelection = (resources)=>{
        setOpen(false)
        console.log(resources)
    }
    
    return (
        <Page>

            <TitleBar
                primaryAction={{
                    content: 'Hola soy un primary actions'
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

            <FooterHelp>
            Soy Marina{' '}
            <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                Alcubilla
            </Link>
            </FooterHelp>
        </Page>    
    )
}


export default Index