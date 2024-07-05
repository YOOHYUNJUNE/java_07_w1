import { Typography } from "@mui/material"
import PostList from "../timeline/PostList";
import { useEffect, useReducer } from "react";
import { postReducer } from "../../hooks/reducer";
import PostWrite from "../timeline/PostWrite";
import { postApi } from "../../api/services/posts";
import { userApi } from "../../api/services/users";


const TimeLine = () => {
    const [posts, dispatch] = useReducer(postReducer, []);

    const getPosts = async() => {
        try { // 총 4번 요청
            const res = await postApi.getPosts();
            const posts = res.data;
            const postList = [];
            for (let post of posts) {
                const res2 = await userApi.getUser(post.userId)
                post.user = res2.data;
                postList.push(post);
            }
            console.log(postList);
            if (res.status === 200) {
                dispatch({type: 'SET_POSTS', payload: posts});
            } 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);



    return ( 
        <>
            <Typography variant="h4">타임라인</Typography>
            <PostWrite dispatch={dispatch}></PostWrite>
            <PostList posts={posts} ></PostList>
        </>
     );
}
 
export default TimeLine;