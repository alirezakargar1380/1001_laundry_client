const BASE_URL = "http://localhost:4999/api"
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

module.exports.get_customers = () => {
  return axios.get(BASE_URL+'/customers/get', headers)
}

module.exports.get_orders = () => {
  return axios.get(BASE_URL+'/orders/get', headers)
}

module.exports.get_products = () => {
  return axios.get(BASE_URL+'/products/get', headers)
}

// --------------------------------------------- POST
module.exports.add_customer = (body) => {
  return axios.post(BASE_URL+'/add_customer', body, headers)
}

module.exports.add_orders = (body) => {
  return axios.post(BASE_URL+'/orders/add', body, headers)
}

