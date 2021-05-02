const URL = "https://serverless-pedevdro.vercel.app/api/auth"

export const postRegister = async (data) => {
    const response = await fetch(`${URL}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    const json = await response.text()

    return json
}

export const postLogin = async (data) => {
    const response = await fetch(`${URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    const json = await response.json()
    return json
}
