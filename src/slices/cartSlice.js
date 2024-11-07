import { createSlice } from "@reduxjs/toolkit";



const loadCartItemsFromLocalStroage = () => {
    try
    {
        const serializedState = localStorage.getItem("cartItems");
        return serializedState ? JSON.parse(serializedState) : [];
    }
    catch(error)
    {
        console.error("Could not load Cart items from localstorage",error)
    }
}

const saveCartToLocalStorage = (state) => {
    try
    {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cartItems",serializedState)
    }catch(error)
    {
        console.error("Could not load Cart items from localstorage",error)
    }
}

const initialState = {
    items: loadCartItemsFromLocalStroage(),
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            let productExistsInCart = state.items.find(item => item.id == action.payload.id);
            if (productExistsInCart) {
                return alert('Product is already added in cart')
            } else{
                state.items.push(action.payload);
                saveCartToLocalStorage(state.items);
                alert('Product added to Cart');
            }
            console.log('state items',state.items);

        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(state.items);
            alert('Product removed to Cart')
        },
        clearCart: (state) => {
            state.items = [];
            saveCartToLocalStorage(state.items);
            alert('Order has been placed')
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;