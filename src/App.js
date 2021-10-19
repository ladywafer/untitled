import React, {useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import MyInput from "./Components/UI/input/MyInput";
import MyButton from "./Components/UI/button/MyButton";
import PostForm from "./Components/PostForm";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title:'Javascript', body:'Description'},
        {id: 2, title:'Javascript 2', body:'Description'},
        {id: 3, title:'Javascript 3', body:'Description'}])

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
    }
    const removePost =(post) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
       <PostList
           remove = {removePost}
           posts={posts}
           title="Список постов 1"/>
    </div>
  );
}

export default App;
