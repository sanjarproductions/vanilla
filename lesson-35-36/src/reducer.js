// const initialState = {
//     user: null
// }

// const registerReducer = (state = initialState, action) => {
//     // console.log(action)
//     switch (action.type) {
//         case "REGISTER_USER":
//             return ({
//                 user: action.data
//             })
//             default:
//                 return state 
//     }
// }

// export default registerReducer


const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            return({
                cartProducts: [...state.cartProducts, action.addedProduct]
            })
    }
}


export default cartReducer