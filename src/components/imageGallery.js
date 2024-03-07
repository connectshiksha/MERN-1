import { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import ImageSection from './ImageSection'

const ImageGallery = () => {
   
   
    return (
        <>
            <Container>


                <h1 className='mt-4 text-center'>
                    Image galary
                </h1>
                <h3 className='mt-4 text-center'>
                    Dog
                </h3>

                <ImageSection keyword="dog"/>
                <h3 className='mt-4 text-center'>
                    Cat
                </h3>

                <ImageSection keyword="cat"/>
                <h3 className='mt-4 text-center'>
                    Lion
                </h3>

                <ImageSection keyword="lion"/>

            </Container>
        </>
    )
}
export default ImageGallery