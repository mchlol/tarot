import useImage from "./useImage";

// https://stackoverflow.com/a/70024111

const CardImage = ( {fileName, alt, className, ...rest }) => {
    const { loading, error, image } = useImage(fileName);

    if (error) return <p>{alt}</p>

    return (
        <>
            { 
                loading
                ? <p>Loading</p>
                : 
                    (
                        <img
                            className={`Image${
                                className
                                ? className.padStart(className.length + 1)
                                : ''
                                }`}
                                src={image}
                                alt={alt}
                                {...rest}
                                />
                    )
            }

        </>
    )
}

export default CardImage