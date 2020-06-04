import React from 'react'
import BookList from './bookList';
import Loader  from './Loader'

class CurrentReadingBooks extends React.Component{


    render(){

        const{books,  handleShelfChangeBooks}= this.props
        return(

        <React.Fragment>
      {books.length!==0?(
        <BookList 
        title='Currently Reading'
        pathshelf='currentlyReading'
        books={books}
        handleShelfChangeBooks={handleShelfChangeBooks}
        />
      ):(<Loader />)}
        
        </React.Fragment>
        )
    }
}


export default CurrentReadingBooks;