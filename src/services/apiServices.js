import axios from "../ultils/axiosCustomize"

const postSignup = (email, password, checkedPassword) => {
    return axios.post('/auth/signup', { email, password, checkedPassword });
}

const postLogin = (email, password) => {
    return axios.post('/auth/login', { email, password });
}
const postUpdateUser = (user, id) => {
    return axios.post("/auth/update", { user, id })
}

const getProduct = (count) => {
    return axios.get(`/product/getproduct?count=${count}`);
}

const getCategory = () => {
    return axios.get("/category/gethome")
}

const getProductById = (id) => {
    return axios.get(`/product/getbyid?id=${id}`)
}

const createOrder = (data) => {
    return axios.post("/order/create", { listProduct: data.listProduct, customer_id: data.customer_id })
}

const addNewProduct = (data) => {
    return axios.post("/product/create", { data: data });
}
const getProductPaginate = (limit, page) => {
    return axios.get(`/product/paginate?page=${page}&limit=${limit}`)
}
const getUserPageinate = (limit, page) => {
    return axios.get(`/auth/paginate?page=${page}&limit=${limit}`)
}
const getOrderAdmin = (limit, page) => {
    return axios.get(`/order/paginate?page=${page}&limit=${limit}`)
}
const getRevenue = (year) => {
    return axios.get(`/order/revenue?year=${year}`)
}
const getProductStat = (year) => {
    return axios.get(`/order/product`)
}

const getProductRenevue = (year) => {
    return axios.get(`/order/productrenevue`)
}

const postUpdateOrder = (id, role) => {
    return axios.post("/order/update", { id: id, role: role })
}

const postCancelOrder = (id) => {
    return axios.post("/order/cancel", { id: id })
}

const getMyOrder = (limit, page, id) => {
    return axios.get(`/order/myorder?page=${page}&limit=${limit}&id=${id}`)
}

const getOrderById = (id) => {
    return axios.get(`/order/${id}`)
}
export {
    postSignup, postLogin, getProduct, getCategory, getProductById, createOrder, addNewProduct, getProductPaginate, getUserPageinate,
    getOrderAdmin, getRevenue, getProductStat, getProductRenevue, postUpdateOrder, getOrderById, postUpdateUser, getMyOrder, postCancelOrder
}