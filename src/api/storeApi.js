import axios from 'axios';


const apiUrl = 'https://fakestoreapi.com';


const fetchAllProducts = async () => {
    try
    {
        const response = await axios.get(`${apiUrl}/products`);
        return response.data
    }
    catch(error)
    {
        console.error('Error fetching products:', error);
    }
}

const fetchProductById = async (product_id) =>{
    try
    {
        const response = await axios.get(`${apiUrl}/products/${product_id}`);
        return response.data
    }
    catch(error)
    {
        console.error('Error fetching product:', error);
    }
}

export {fetchAllProducts, fetchProductById}