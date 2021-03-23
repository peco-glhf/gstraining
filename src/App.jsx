import React, {useState, useEffect}from 'react';
import BookList from './components/BookList'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import axios from 'axios';

const App = () => {
  const [searchWord, setSearchWord] = useState("")
  const languages = ['山崎大助', '稲盛和夫', '庵野秀明','池田晶子','西森博之',searchWord];
  const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }

  const handleChange = (e) => {
    setSearchWord(e.target.value)
  }

  useEffect(() => {
    getDataFromAPI(searchWord)
  }, [searchWord])

  return (
    <BrowserRouter>
      <div>
        <h1>著者検索</h1>
        <ul>
          <li><Link to = '/山崎大助'>山崎大助</Link></li>
          <li><Link to = '/庵野秀明'>庵野秀明</Link></li>
          <li><Link to = '/稲盛和夫'>稲盛和夫</Link></li>
          <li><Link to = '/池田晶子'>池田晶子</Link></li>
          <li><Link to = '/西森博之'>西森博之</Link></li>
          <li>
            <input
              type="text"
              placeholder="著者"
              onChange={handleChange}
              />
            <Link to = {`/search/${searchWord}`}><button>検索</button></Link>
          </li>
        </ul>
        <hr/>
        <Route 
          exact 
          path = '/' 
          render = {
            props => 
              <BookList
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
                
        <Route 
          path = '/山崎大助' 
          render = {
            props => 
              <BookList
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
                
        <Route 
          path = '/稲盛和夫' 
          render = {
            props => 
              <BookList
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
                
        <Route 
          path = '/庵野秀明' 
          render = {
            props => 
              <BookList
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
                
        <Route 
          path = '/池田晶子' 
          render = {
            props => 
              <BookList
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
                
        <Route 
          path = '/西森博之' 
          render = {
            props => 
              <BookList
                language={languages[4]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>

        <Route 
          path = {`/search/${searchWord}`}
          render = {
            props => 
              <BookList
                language={languages[5]}
                getData={keyword => getDataFromAPI(keyword)}
                /> }/>
      </div>
    </BrowserRouter>
  ) 
}; 
export default App;　 