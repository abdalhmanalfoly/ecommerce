const { default: axiosClient } = require("./axiosClient");

const getlatestproducts = ()=>axiosClient.get(`/products`)
const getproductbyid = (documentId) => axiosClient.get(`/products?filters[documentId][$eq]=${documentId}`);
const getproductbyCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}`)
export default {
    getlatestproducts,
    getproductbyid,
    getproductbyCategory,
}