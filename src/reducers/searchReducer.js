const initialState = {
    recipe_name: '',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RECIPE_NAME':
            return {
                ...state,
                recipe_name: action.payload
            };

        default:
            return state;
    }
}

export default searchReducer;