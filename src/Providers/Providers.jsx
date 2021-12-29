import { ProductsProvider } from "../context/CartContext"
import { AuthProvider } from "../context/contextAuth"

export const Providers = ({Children}) => {
    return(
        <AuthProvider>
            <ProductsProvider>
                {Children}
            </ProductsProvider>
        </AuthProvider>
    )
}