import { useEffect, useState } from "react"

const useFetch = (url_data) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const obtenerData = async () => {

        const response = await fetch(`${url_data}`)
        const json = await response.json()
        if (json) {
            setData(json)
            setLoading(false)
        }
    }

    useEffect(() => {
        obtenerData()
    }, [])

    return { data, loading }

}

export default useFetch
