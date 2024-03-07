import { useEffect, useState } from 'react'
import { Container, Image ,Modal ,Button} from 'react-bootstrap'

const ImageSection = ({ keyword }) => {
    console.log("keyword", keyword)
    const [fetchedData, setfetchedData] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const api = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=10&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`

    useEffect(() => {
        const handleFetchImages = () => {

            fetch(api).then((res) => {
                return res.json()
            }).then((data) => {
                console.log("Image Data", data)
                setfetchedData(data.results)

            }).catch((e) => {
                console.log("error while fetching image")
                // handle error
            })
        }
        handleFetchImages()

    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImageClick=(src)=>{

        setSelectedImage(src)
        handleShow()
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>

                {
                    fetchedData ?
                        fetchedData.map((data) => {
                            return (
                                <>
                                    <Image onClick={()=> handleImageClick(data.urls.regular)} src={data.urls.regular} alt="image" width={200} height={200} style={{ margin: "5px" }} />
                                </>
                            )

                        })

                        : ""
                }
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Image src={selectedImage} alt='seletedimage'/>
            </Modal>
        </>
    )
}

export default ImageSection