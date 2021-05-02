const URL_BACKEND = "http://192.168.1.3:8000"

export const getProducts = async() => {
    const response = await fetch(`${URL_BACKEND}/List_All_Products/?page=1`)
    const data = await response.json()
    return data
}
