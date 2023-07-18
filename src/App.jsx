
import { useEffect,useState } from 'react';
import './App.css'
import Movie from './Movie.jsx'
import Axios from 'axios'

function App() {
  
    const [search, setSearch] = useState([]);
    const [text, setText] = useState("");

    const fetechMovies = async (e) => {
        e.preventDefault();
      if(text === ""){
        alert("Enter any Movie Name")
        return;
   }


        const {data} = await Axios.get(`https://www.omdbapi.com/?s=${text}&apikey=f195b326`)
        console.log("Response", data)

        const search = data.Search
        setSearch(search)
    }

    useEffect( ()=> {
      fetch(`https://www.omdbapi.com/?s=&apikey=f195b326`)
  }, [text])

  return (
     <>
       <h1>Movie App</h1>
          <form className='movieForm'>
             <input type="text" value={text} placeholder='Enter any Movie Name' onChange={(e) => setText(e.target.value)}/>
             <button onClick={fetechMovies}>Search</button>
          </form> 
           
       <Movie search={search}/>
     </>
  )
}

export default App





