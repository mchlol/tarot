import { useState, useEffect } from "react";

// https://stackoverflow.com/a/70024111

const useImage = (fileName) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const fetchImage = async () => {
            try {
                const response = await import(`./assets/cards/${fileName}.jpg`)
                setImage(response.default)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [fileName]);

    return {
        loading,
        error,
        image,
    }

}

export default useImage