import React from 'react'
import BookList from './bookList';
import Loader from './Loader'



class WantToRead extends React.Component{

  

    componentDidMount(){
   
    }
    render(){
      const{books,  handleShelfChangeBooks}= this.props
      return(

      <React.Fragment>
    {books.length!==0?(
      <BookList 
      title='Want to Read...'
      pathshelf='wantToRead'
      books={books}
      handleShelfChangeBooks={handleShelfChangeBooks}
  
      />
    ):(<Loader />)}
      
      </React.Fragment>
      )
  }
}


export default WantToRead;