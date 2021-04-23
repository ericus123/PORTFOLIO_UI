import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import {
    faHeart,faHandHoldingHeart
  } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./likes.scss";
import {ReactOnPost, getPostReactions} from "../../../redux/actions/blog/posts";



export const BigLike = () => {
    
    let post = useSelector((state) => state.post.post);
    const dispatch = useDispatch();
    const postReactions = useSelector((state) => state.postReactions.likes);
    const postReaction = useSelector((state) => state.postReaction.msg);
    const isLoggedIn = useSelector((state) => state.checkAuth.isLoggedIn);
    const user = useSelector((state) => state.checkAuth.user);
    const [btn, setClicked] = useState(false);
    const [liked, setStatus] = useState("bg-unliked");
    let likesLen = postReactions.length ? postReactions.length : null;
   
  

   let hasLiked =  postReactions.length ? postReactions.filter((reaction) => reaction.user === user.id) : [];
   console.log(hasLiked)
   let status = "bg-unliked";
   const setColor = () => {
    hasLiked = postReactions.length ? postReactions.filter((reaction) => reaction.user === user.id) : [];
    status = isLoggedIn && hasLiked.length ? "bg-liked" : "bg-unliked";
    console.log(status);
    console.log(hasLiked)
    setStatus(status);
   }
   useEffect(() => {
    dispatch(getPostReactions(post._id));
    setColor();
   },[btn]);
   useEffect(() => {
    setColor();
   },[postReactions]);
   
    return (
        <div className="big-like">
        {
        postReactions ? 
        <span className="likes">
        <FontAwesomeIcon className={liked} icon={faHandHoldingHeart } onClick={() => { setClicked(!btn);
        dispatch(ReactOnPost(post._id))}} /> <span class="n">{likesLen}</span></span>
         : null}
        </div>
        
    )
}
