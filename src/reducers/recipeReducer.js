//maintaing the initial states for jobData
const initialState = {
    loading: false,
    recipes: [],
    error: '',
}

const recipeFetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RECIPE_DATA_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_RECIPE_DATA_SUCCESS':
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                recipes: action.payload,
            };

        case 'FETCH_RECIPE_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default recipeFetchDataReducer;