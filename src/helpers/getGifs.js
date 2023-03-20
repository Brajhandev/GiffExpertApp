export const getGifs = async (cat) => {
    const key ='xfGfSpOyZyZY6dak9tLjKM2ZIDb5nCSU'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${cat}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }))
    
    return gifs
}