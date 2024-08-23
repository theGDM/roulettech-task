import { getAllRecipes } from "../services/api";

export const RecipeDataRequest = () => ({
    type: 'FETCH_RECIPE_DATA_REQUEST',
});

export const RecipeDataSuccess = (data) => ({
    type: 'FETCH_RECIPE_DATA_SUCCESS',
    payload: data,
});

export const RecipeDataFailure = (data) => ({
    type: 'FETCH_RECIPE_DATA_FAILURE',
    payload: data,
});

export const fetchRecipesData = () => {
    return async (dispatch) => {
        try {
            let data_retries = 1;
            dispatch(RecipeDataSuccess([]));
            while (data_retries < 4) {
                dispatch(RecipeDataRequest());
                await getAllRecipes()
                    .then((response) => {
                        const recipeData = response.data;
                        console.log(recipeData);
                        if (recipeData === null || recipeData.length == 0) {
                            dispatch(RecipeDataSuccess([]));
                        } else {
                            dispatch(RecipeDataSuccess(recipeData));
                        }
                        data_retries = 4;
                    }).catch((err) => {
                        data_retries++;
                    });
            }
        } catch (err) {
            dispatch(RecipeDataFailure(err));
        }
    };
};