/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [images, setImgages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImgages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
    }

}
