const bfetch = async (url, options = null) => {
    url = process.env.NEXT_PUBLIC_BACKEND_URL + url

    const res = await fetch(url, options)

    return await res.json()
}

export default bfetch