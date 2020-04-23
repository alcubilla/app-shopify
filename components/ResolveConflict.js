
import { 
    Modal, TextContainer, Stack, Thumbnail, Card, Button, Pagination

} from '@shopify/polaris'
import { MobileAcceptMajorMonotone } from '@shopify/polaris-icons'

import { useState, useEffect} from 'react'

const ResolveConflict = ({
    variants_with_conflict,
    variant_in_modal,
    can_solve,
    modal_open,

    closeModal,
    stepVariant
})=>{


    const [hasPaginator, setHasPaginator ] = useState({ hasNext: false, hasPrevious: false, price_selected: null })

    const {
        id,
        product_image: image_url,
        product_title: title,
        variant_price: price,
        variant_recommended_price: recommended_price,
        tax_calculated: calculated_duty=0,
        calculated_duty_original=0,
        price_selected=null

    } = variant_in_modal



    // Cada que variant_in_modal cambie verificamos el estado del paginador
    useEffect(()=>{

        const v = variants_with_conflict
        let p = { hasNext: false, hasPrevious: false, price_selected }
        if(v.length<=1) return setHasPaginator(p)
        const i = v.findIndex(element=> element.id ===id)
        if(i>0) p.hasPrevious = true;
        if(i<v.length-1) p.hasNext= true;
        setHasPaginator(p)

    },[variant_in_modal])


   

    let pagination = null
    if(variants_with_conflict.length>0){
        pagination = (
            <Pagination 
                hasPrevious={hasPaginator.hasPrevious}
                onPrevious={()=>{
                    console.log('Previous')
                    move(-1)
                }}
                hasNext={hasPaginator.hasNext}
                onNext={()=>{
                    console.log('Next')
                    move(1)
                }}
            />
        )

    }


    const handleSubmit = ()=>{

    }

    const handleClose = () =>{
        closeModal()
    }

    const handleSelectPrice = (price_selected)=>{

        setHasPaginator({ ...hasPaginator, price_selected })
        move(0, price_selected)
    }

    const move = (step, price_selected) => {
        if(price_selected===undefined) price_selected = hasPaginator.price_selected
        const v = variants_with_conflict
        let i = v.findIndex(e=> e.id===id) + step
        if(i>=0 && i<v.length){
            //paso valido
            stepVariant(price_selected, i)
        }
    }


    const footer = (
        <Stack>
            <Stack.Item fill>
                {pagination}
            </Stack.Item>

            <Stack.Item>
                <Button primary onClick={handleSubmit} disabled={ !can_solve }>Guarda mi selección</Button>
            </Stack.Item>
        </Stack>
    )

    const currentVariant = variants_with_conflict.findIndex(e=>e.id===id) + 1

    

    return (
        <Modal
            large
            open={modal_open}
            onClose={handleClose}
            title={`Conflicto ${currentVariant} de ${variants_with_conflict.length}`}
            footer={footer}
        >
            <Modal.Section>
                <TextContainer>

                    <div>Nuestros expertos sugieren diferentes impuestos que los que usted ha indicado. Seleccione cual es el correcto.</div>
                    <Stack distribution="fillEvenly">
                        <Stack.Item>
                            <Stack>
                                <Thumbnail
                                    source={image_url}
                                />
                                <div>{title}</div>
                            </Stack>
                        </Stack.Item>

                        <Stack.Item>
                            <div>Precio Regular: ${price}</div>
                            <div>Impuestos: seleccione a continuación</div>                            
                        </Stack.Item>
                    </Stack>

                    <Stack distribution="fillEvenly">
                        <Card sectioned>

                            <div className="title-wrapper">
                                <div className="subtitle">Tu ingresaste</div>
                            </div>

                            <div className="title-price">${price}</div>
                            <p className="text-center">Impuesto ${calculated_duty_original}</p>
                            <div className="text-center mt-10">
                                <Button
                                    onClick={()=>handleSelectPrice('original')}
                                    primary={hasPaginator.price_selected==='original'}
                                    icon={ hasPaginator.price_selected==='original' && MobileAcceptMajorMonotone}
                                >
                                    Seleccionar
                                </Button>
                            </div>
                        </Card>

                        <Card sectioned>

                            <div className="title-wrapper">
                                <div className="subtitle">Nosotros recomendamos</div>
                            </div>

                            <div className="title-price">${recommended_price}</div>
                            <p className="text-center">Impuesto ${calculated_duty}</p>
                            <div className="text-center mt-10">
                                <Button
                                    onClick={()=>handleSelectPrice('recommended')}
                                    primary={hasPaginator.price_selected==='recommended'}
                                    icon={ hasPaginator.price_selected==='recommended' && MobileAcceptMajorMonotone}                                    
                                >
                                    Seleccionar
                                </Button>
                            </div>
                        </Card>
                    </Stack>

                </TextContainer>
            </Modal.Section>

        </Modal>
    )

}

export default ResolveConflict