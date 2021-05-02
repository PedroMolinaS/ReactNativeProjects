const URL_API = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
    const pedido = await fetch(`${URL_API}/users`)
    const data = await pedido.json()
    return data
}

export const getPosts = async () => {
    const pedido = await fetch(`${URL_API}/posts`)
    const data = await pedido.json()
    return data 
}
