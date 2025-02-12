import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers :{
            Authorization : 'Client-ID s3_1JoeZ5vjnA82djdANbyzwJLN64LDw0Uqi54NUjTU'
        },
        params : {
            query:term
        }
    })

    return response.data.results;
}

export default searchImages;