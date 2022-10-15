const initialState = {isLoading : false, Blogs : []}

export const blogReducer = (state = initialState , action) =>{
    switch(action.type){
        case "FETCH_BLOGS_SUCCESS":
            return {
                ...state,
                Blogs : [...action.Blogs], isLoading : false
            };
        case "FETCH_BLOGS_STARTED":
            return {
                ...state, isLoading : true
            }
        default:
            
        return state
        
    }

}