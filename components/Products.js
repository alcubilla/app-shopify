import { Page, FooterHelp, Link, ResourceList, ResourceItem, Avatar, Card, TextStyle } from '@shopify/polaris'
import { useEffect } from 'react'



const Products = ({
    getShopifyData,

    variant_is_loading,
    variants
   
    
    })=>{
    

    useEffect(()=>{
        getShopifyData()

    },[]) //Se ejecuta 1 sola vez al montarse el componente

console.log('variants', variants)

const resourceName = {
    singular: 'variant',
    plural: 'variants'
}

    const renderItem = item =>{

        const {
            _id: id, 
            product_title: Title,
            product_image: image_url,
            final_price = 0,
            status,
            final_duty = 0
        } = item

        const media = <Avatar customer size = "medium" source={image_url}/>

        return (
            <ResourceItem id={id} media={media}>
       
       
       

       
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


            <FooterHelp>
                Soy Marina{''}
                <Link>Alcubilla
                </Link>

            </FooterHelp>
        
        </Page>

    )

}

export default Products