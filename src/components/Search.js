import React from 'react'
import { Input, Label} from 'semantic-ui-react'
import BookList from './bookList'
import Loader  from './Loader'


import seachTermDefault from'./searchTerm'

class  SearchBar extends React.Component {

  state={
    isLoading:false,
    searchTerm:'',
    inputValue:'',
    seachTermDefault,
    books:[],
  }
componentDidMount(){
   
}

handleFilteredSearchBooks=(books)=>{
    return books.filter(book=>{
      if(book.shelf!==('read') && book.shelf!==('currentlyReading') && book.shelf!==('wantToRead') ){
     
        return book
      }
    })}
    
  

  handleQuerry=(e)=>{
    let querry=this.state.inputValue
    return this.state.seachTermDefault.filter(s=>s.toLowerCase().includes(querry.toLowerCase()))
  }
  handleKeyDown=(e)=>{
    if(e.keyCode === 13){
      if(this.querryMatchingResults()){
 this.props.handleSearch(this.state.inputValue);
      }
      this.setState({inputValue:'', isLoading:false})
   
    }

  }
  handleSearchChange=(e)=>{
    this.setState({
      inputValue:e.target.value ,
    isLoading:true
    });
    setTimeout(() => {
      if (this.state.inputValue.length < 1) return this.setState({
        inputValue:'',
        isLoading:false
      })
    }, 300)
  
  }
  handleTagValue=(tagValue)=>()=>{
    this.setState({
      inputValue:tagValue ,
    isLoading:true
    });

    setTimeout(
      ()=>{
        this.props.searchResults(tagValue);
        this.setState({inputValue:'', isLoading:false})
       console.log(this.state.searchResults);
      }, 1000)
    ;}

  displayTag=(inputValue)=>(this.handleQuerry(inputValue).map((s,i)=>
  <div key={i}  className='label_tag__item' 
  onClick={this.handleTagValue(s)}>
  <Label color='teal' as='a' >{s}</Label>
  </div>
  )).slice(0,50)


  
  querryMatchingResults=()=>{
    let queryTerm = this.state.inputValue;
    let query=queryTerm.charAt(0).toUpperCase() +queryTerm.slice(1)
   
    return this.state.seachTermDefault.reduce((acc,searchTerm)=>{
        if(searchTerm === query ){
          return true
        }
        return acc
    },false)
}
  render(){
      const {isLoading, inputValue}= this.state
     const {handleShelfChangeBooks, books}= this.props
      return (
        <div className="list-books-content">
        <Input
            onChange={this.handleSearchChange}  
            size='mini'
            icon='search'
            value={inputValue}
            placeholder='Enter your search term'
       loading={isLoading} 
      onKeyDown={this.handleKeyDown}
       />
        {isLoading&&(<div className='tag__list'>{this.displayTag(inputValue)}</div>)}


       {isLoading?(<Loader />):(
       books.length!==0?(
        <BookList 
        title='Books suggestions ...'
        pathshelf='none'
        books={this.handleFilteredSearchBooks(books)}
        handleShelfChangeBooks={handleShelfChangeBooks}
       
        />
      ):(<Loader />))}
      </div>
      )
      }}
export default SearchBar;