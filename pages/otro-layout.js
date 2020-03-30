//import {TextStyle, Page, Layout, EmptyState} from '@shopify/polaris'
import {
    Card,
    Layout, 
    Page,
    Button,
    Form,
    FormLayout,
    Stack,
    TextField
    } from '@shopify/polaris'

import  {useState} from 'react'


const OtroLayout = ()=>{

    const [descuento, setDescuento] =useState('10%')
    const [total, setTotal] =useState('2000')
    

    const handleSubmit =()=>{
        console.log('Formulario enviado', descuento, total)
    }

    const handleChange =(valor)=>{
        console.log(valor)
        setDescuento(valor)
    }
    const handleChangeTotal =(valor)=>{
        console.log(valor)
        setTotal(valor)
    }

    return(
        <Page>
            <Layout>
                <Layout.AnnotatedSection
                    title="Algun titulo"
                    description="Alguna descripcion"
                >
                    <Card sectioned>
                        <Form onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField
                                    value={descuento}
                                    onChange={handleChange}
                                    label= "Descuento"
                                />
                                <TextField
                                    value={total}
                                    onChange={handleChangeTotal}
                                    label= "Total"
                                />
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Guardar
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    )
}

export default OtroLayout