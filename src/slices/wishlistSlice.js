import { createSlice } from '@reduxjs/toolkit';

const loadWishlistItemsFromLocalStorage = () => {
    try
    {
        const serializedState = localStorage.getItem("wishlistItems");
        return serializedState ? JSON.parse(serializedState) : [];
    }
    catch(error)
    {
        console.error("Could not load cart items from localstorage")
    }
}

const saveWishlistItemsToLocalStorage = (state) => {
    try
    {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('wishlistItems',serializedState);
    }   
    catch(error)
    {
        console.error("Could not load cart items from localstorage");
    }
}

const initialState = {
    items:loadWishlistItemsFromLocalStorage(),
};

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addToWishlist : (state,action) => {
            let productExistsInWishlist = state.items.find(item => item.id == action.payload.id);
            if (productExistsInWishlist) {
                return alert('Product is already added in Wishlist')
            } else{
                state.items.push(action.payload);
                saveWishlistItemsToLocalStorage(state.items);
                alert("Product added to wishlist");
            }
        },
        removeFromWishlist : (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveWishlistItemsToLocalStorage(state.items);
            alert("Product removed from wishlist");
        },
        clearWishlist : (state) => {
            state.items = [];
            saveWishlistItemsToLocalStorage(state.items);
        },
    },
});

export const {addToWishlist, removeFromWishlist, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;