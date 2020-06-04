import React from 'react'
import BookList from './bookList';
import Loader  from './Loader'



const  ReadBooks=({books, handleShelfChangeBooks})=> {
    return (
        <React.Fragment>
      {books.length!==0?(
        <BookList 
        title='Want to Read'
        pathshelf='read'
        books={books}
        handleShelfChangeBooks={handleShelfChangeBooks}
        />
      ):(<Loader />)}
        
        </React.Fragment>
    )
} 


export default ReadBooks;