import axios from "axios"

export const getAlbumById = async(request, response) => {
    try {
        const albumImages = await axios.get("https://jsonplaceholder.typicode.com/albums/" + request.params.id + "/photos")
        const images = albumImages.data.map(elem => {
            return {
                title: elem.title,
                image: elem.thumbnailUrl
            }
        })

        response.status(200).json({
            status: true,
            data: images
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }

}