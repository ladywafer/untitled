import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import axios from "axios";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title:'Javascript', body:'n'},
        {id: 2, title:'avascript 2', body:'iption'},
        {id: 3, title:'vascript 3', body:'Description'}])

    const[filter, setFilter] = useState({sort:'', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

     async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
         setPosts(response.data)
    }

    const createPost = (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }


  return (
    <div className="App">
        <button onClick={fetchPosts}> Get posts</button>
        <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
            <PostList
                remove = {removePost}
                posts={sortedAndSearchedPosts}
                title="Список постов 1"/>

    </div>
  );
}

export default App;
