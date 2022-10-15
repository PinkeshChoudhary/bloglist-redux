import axios from "axios";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_STARTED = "FETCH_COMMENTS_STARTED";


export const getCommentsData =(id) =>{
    return dispetch =>{
        dispetch(fetchcommentsStarted());
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
            dispetch(fetchcommentsSuccess(res.data))
        })
    }
}


const fetchcommentsSuccess = (comments) =>{
    return {
        type : FETCH_COMMENTS_SUCCESS,
        payload : comments
    }
}
const fetchcommentsStarted =() =>{
    return {
        type : FETCH_COMMENTS_STARTED,
    }
}