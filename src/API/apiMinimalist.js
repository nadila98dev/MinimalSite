const API_MINIMALIST = "https://my-json-server.typicode.com/nadila98dev/apiMinimalist"

import axios from "axios"
import React from "react"

const axiosMinimalist = {
    minimalist: async() => await axios.get(API_MINIMALIST +'/minimalist').then((res) => res.data).catch((err) => { console.log(err)}),
    detail: async(id) => await axios.get(`${API_MINIMALIST}/minimalist/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),
}

export default axiosMinimalist