import { createContext, useState } from "react";

export const ShoppingCartContext = createContext() //here we create the context to pass the state to all components

function ShoppingCartProvider({children}){
    const [count, setCount] = useState(0)//create the state that will be pass to all the children, 0 = initila state
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) //creating the state to show o close the items in product-detail
    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () => setIsProductDetailOpen(false)
    return (
        
        <ShoppingCartContext.Provider 
        //with value we pass to children te hability to read and change the state
        value={{
        count, 
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail
        }}>  
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider