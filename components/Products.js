import { Page, FooterHelp, Link, ResourceList, ResourceItem, 
        Avatar, Card, TextStyle, Stack, Badge, Button } from '@shopify/polaris'
import { useEffect } from 'react'

import ResolveConflict from '../containers/ResolveConflict'



const Products = ({
    getShopifyData,
    solveVariant,

    variant_is_loading,
    variants
   
    
    })=>{
    

    useEffect(()=>{
        getShopifyData()

    },[]) //Se ejecuta 1 sola vez al montarse el componente



const resourceName = {
    singular: 'variant',
    plural: 'variants'
}

    const renderItem = item =>{

        const {
            _id: id, 
            product_title: Title,
            variant_title,
            product_image: image_url,
            final_price = 0,
            status,
            tax_calculated: final_duty
        } = item

        let statusColor = null
        let columA= null
        let columB = null


        switch(status){
            case 'Calculando': 
                statusColor='attention'; 
                break;
            case 'Sin Conflicto': 
            case 'Completo':
                statusColor='success'; 
                columA = `$${final_price} Subtotal`
                columB = `$${final_duty} Impuesto`
                break;
            case 'Conflicto':
                statusColor='warning';
                columA = <Button size= "slim" onClick={()=> solveVariant(id)}> Resolver </Button>
                break;
        }




        const media = <Avatar customer size = "medium" source={image_url}/>
        console.log('variants', variants)
        return (
            <ResourceItem id={id} media={media}>
                <Stack>
                    <Stack.Item fill>
                        <h3><TextStyle variantion="strong">{Title} - {variant_title}</TextStyle></h3>
                    </Stack.Item>
                        
                    <Stack.Item>
                        {columA}
                    </Stack.Item>
                    <Stack.Item>
                        {columB}
                    </Stack.Item>

                    <Stack.Item>
                        <Badge status={statusColor}>{status}</Badge>
                    </Stack.Item>

                </Stack>
            </ResourceItem>
           
        )
       
    }

    return (
        <Page fullWidth>
            <Card>
                 <ResourceList 

                    resourceName = { resourceName }
                    items= {variants}
                    showHeader = {false}
                    loading = {variant_is_loading}
                    renderItem = {renderItem}
            
                />   
            </Card>

            <ResolveConflict />

            <FooterHelp>
                Soy Marina{''}
                <Link>Alcubilla
                </Link>

            </FooterHelp>
        
        </Page>

    )

}

export default Products