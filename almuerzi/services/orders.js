
export const postPedido = async (token, _id) => {

    const response = await fetch(`https://serverless-pedevdro.vercel.app/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: token,
        },
        body: JSON.stringify({
            meal_id: _id
        })
    })
    const status = await  response.status
    let pedido= {}
    if(status===201){
        pedido = await response.json()
    }
    return {status, pedido}
}