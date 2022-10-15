import axios from "axios";
export const FETCH_BLOGS_SUCCESS = "FETCH_BLOGS_SUCCESS";
export const FETCH_BLOGS_STARTED = "FETCH_BLOGS_STARTED";
export const Show_COMMENTS = "SHOW_COMMENTS"

export const getBlogsListData =() =>{
    return dispatch => {
    dispatch(fetchBlogStarted());
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        dispatch(fetchBlogSuccess(res.data.slice(0,12)))
    })
    
    }
}

const fetchBlogSuccess = (Blogs) =>{
    return {
        type : FETCH_BLOGS_SUCCESS,
        Blogs,
    }
}
const fetchBlogStarted =() =>{
    return {
        type : FETCH_BLOGS_STARTED,
    }
}

const comments = () =>{
    return{
        type : Show_COMMENTS
    }
}