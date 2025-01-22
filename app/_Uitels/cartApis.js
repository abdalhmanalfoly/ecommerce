const { default: axiosClient } = require("./axiosClient");

const addTocart = (payload) => axiosClient.post('/carts', payload);

const getusercartitem = (email) =>
    axiosClient.get(`/carts?populate=*&filters[email][$eq]=${email}`);

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

export default {
    addTocart,
    getusercartitem,
    deleteCartItem, 
};
