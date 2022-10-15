const initialState = {isLoading : false, Comments : []}

export const commentsReducer = (state = initialState , action) =>{
    switch(action.type){
        case "FETCH_COMMENTS_SUCCESS":
            return {
                ...state,
                Comments : [...action.payload], isLoading : false
            };
        case "FETCH_COMMENTS_STARTED":
            return {
                ...state, isLoading : true, Comments : []
            }
        default:
            
        return state
        
    }

}