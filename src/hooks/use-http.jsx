import React, { useState } from "react";

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);



    const senRequest = async () => {
        setIsLoading(false);
        setIsError(false);
        try {
            const response = await fetch(
                requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            }
            );
            if (!response) {
                throw new Error("Somthing Went Wrong.")
            }

            const data = await response.json();
            applyData(data)

        } catch (error) {
            setIsError(error.message || "Field to loaded")
        } finally {
            setIsLoading(false)
        }

    }
    return {
        isLoading,
        isError,
        senRequest
    }
}

export default useHttp;