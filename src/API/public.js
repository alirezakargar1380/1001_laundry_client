const BASE_URL = "https://alirezakargarr.ir/api"
const axios = require("axios");

const headers = {
  headers: {
    authorization: 'Basic dmV0ZXJpbmFyeTo5N3M3cXdyMTRhczdmOTg='
  }
}

// --------------------------------------------- GET
module.exports.get_address = () => {
  return axios.get(BASE_URL+'/address/get', headers)
}

module.exports.get_customers = ({phone, name, id}) => {
  return axios.get(BASE_URL+`/customers/get?name=${name}&phone=${phone}&id=${id}`, headers)
}

module.exports.get_orders = () => {
  return axios.get(BASE_URL+'/orders/get', headers)
}

module.exports.get_products = () => {
  return axios.get(BASE_URL+'/products/get', headers)
}

module.exports.login = (body) => {
  return axios.get(BASE_URL+`/auth/login?username=${body.email}&password=${body.password}`, headers)
}

// --------------------------------------------- POST
module.exports.add_customer = (body) => {
  return axios.post(BASE_URL+'/add_customer', body, headers)
}

module.exports.add_orders = (body) => {
  return axios.post(BASE_URL+'/orders/add', body, headers)
}

module.exports.add_product = (body) => {
  return axios.post(BASE_URL+'/products/add', body, headers)
}

module.exports.add_address = (body) => {
  return axios.post(BASE_URL+'/address/add', body, headers)
}

