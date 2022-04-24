import React, { useEffect } from "react"

export const Hook = ({ 
    latestProducts,
    fetchLatestProducts,
    brandList,
    fetchBrandList
}) => {
    useEffect(() => {
        fetchLatestProducts()
        fetchBrandList()

    }, []);

    return [
        latestProducts,
        brandList
    ]
}