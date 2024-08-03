import React, { Component ,useEffect,useState} from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";



const News =(props)=> {
 
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const[totalArticles,settotalArticles]=useState(0)
  //document.title=`${this.captalizeFirstLetter(props.category)}-News360`

  
  const captalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);

  }
  
  

  
  const updateNews=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
    let data=await fetch(url);
    
    let parse=await data.json();
    console.log(parse);

    setArticles(parse.articles)
    settotalArticles(parse.totalResults)
    setLoading(false)
    //setPage(1)
    
  }
    
    
    
    

  useEffect(() => {
    updateNews();

    // Cleanup function to unmount the component
    
  }, [props.category]);
    
    const handleprevclick=async()=>{
      // console.log('previous');
      
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${state.page-1}&pagesize=${state.pagesize}`
      // let data=await fetch(url);
      // let parse=await data.json();
      // console.log(parse);
      
      // this.setState({
        //   page:state.page-1, 
        //   articles:parse.articles
    // })
    
    setPage(page-1)
    updateNews()
    
  }
  const handlenextclick= async()=>{
    
    
    // console.log(state.page+1 +" "+Math.ceil(state.totalArticles/state.pagesize));
    // if(state.page + 1 > Math.ceil(state.totalArticles / state.pagesize)){
      //   return;
      // }
      //   console.log('next');
      
      //   if(state.page+1>Math.ceil((state.totalResults/20))){
        
        //   }else{
          
          //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${state.page+1}&pagesize=${state.pagesize}`
          //   let data=await fetch(url);
          //   let parse=await data.json();
          //   console.log(parse);
          
          //   this.setState({
            //     page:state.page+1,
            //     articles:parse.articles
            
            //   })
            
  // }}
  setPage(page+1)
  updateNews()
}


  console.log(page+" "+totalArticles);
  //const { articles } = this.state; // Destructure articles from state
  
  return (
    <div className="container my-3">
        <div className="container justify-content-center">

        <h2>News360 -Top Headlines on {captalizeFirstLetter(props.category)} </h2>
        </div>
  
        <div className="row">
          {articles && articles.map((element) => ( // Add a conditional check
            <div className="col-md-4" key={element.title}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                />
            </div>
          ))}
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={handleprevclick}
              >
              &larr; Previous
            </button>
            <button
            disabled=
            {page + 1 > Math.ceil(totalArticles / props.pagesize)}
            
            // No more pages to load, disable the button
            
            type="button"
            className="btn btn-dark"
            onClick={handlenextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
    
  }
 News.defaultProps={
    country:'in',
    pagesize:8,
    category:'general'
  
  }
 News.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  
  }
  export default News;