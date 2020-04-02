import { Page, Layout, Card, Button, Stack } from '@shopify/polaris'
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react'
import React, { useState } from 'react'
import Link from 'next/link'

//const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


const Index = () => { 
    
    
    const [open, setOpen] = useState(false)
    const handleSelection = (resources)=>{
        setOpen(false)
        console.log(resources)
    }
    
    return (
        <Page fullWidth={false}>

            <TitleBar
                primaryAction={{
                    content: 'Registro'
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          
                        </Stack>
                    </Card>
                </Layout.Section>

                <Layout.Section secondary>
                    <Card title="Envia productos a revisión" sectioned>
                        <Stack>
                            <Stack>
                               <Button fullWidth={true}> <Link href="/registro"> Registro  </Link> </Button> 
                               <Button fullWidth={true} onClick={()=>setOpen(true)}> Revisión</Button> 
                               <Button fullWidth={true} > Registro</Button>  
                            </Stack>
                        </Stack>

                    </Card>
                </Layout.Section>

            </Layout>
        </Page>    
    )
}


export default Index