export const REQUEST_USER = "REQUEST_USER"
export const RECEIVE_USER = "RECEIVE_USER"

export const register = (body) => ({type: "REGISTER", body})
export const login = (body) => ({type: "LOGIN", body})
export const generateNewToken = (token) => ({type: "NEW_TOKEN", token})
export const navigate = (params) => ({type: "NAVIGATE", params})