const URL_BACKEND = "https://serverless-pedevdro.vercel.app"

export const getMeals = async () => {
    const consulta = await fetch(`${URL_BACKEND}/api/meals`)
    const data = await consulta.json()
    return data
}

