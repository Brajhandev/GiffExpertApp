import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = (cat) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getGifs(cat).then((res) => setimages(res))
      setIsLoading(false)
    }, []);
    
return {
    images,
    isLoading
}

}

export default useFetchGifs;