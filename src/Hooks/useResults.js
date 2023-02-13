import {useEffect, useState} from 'react';
import yelp from "../Services/yelp.js";


export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('');
  // console.log(term)

  const searchApi = async searchTerm => {
    try{
      const res = await yelp.get('/search', {params: {
        limit: 50,
        term: searchTerm,
        location: 'boise'
      }})
    setResults(res.data.businesses);
    console.log(results)
  } catch(err){
    setErrorMessage("something went wrong")
  }
  }
  useEffect(()=>{
    searchApi('pasta')
  }, []);
  return [searchApi, results, errorMessage];
};