const initialState = {
    recipe_name: '',
}

const searchReducer = (state = initialState, action) => {
    console.log(action.data);
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