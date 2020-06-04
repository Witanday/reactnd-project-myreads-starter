import React from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import Book from './book'


class BookList extends React.Component{


handleHideSearch=(path)=>{
  return path=== '/'?'hideButton':''
}
  render(){
const { title,books,handleShelfChangeBooks, pathshelf }= this.props
console.log(this.props.match.path)
    return (

        <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.length!==0 && books.map((book, i)=>(
            <li key={i} > <Book  pathshelf={pathshelf} book={book} handleShelfChangeBooks={handleShelfChangeBooks}/>
            </li>
        ))}
       
        </ol>
        </div></div>
        <div  id={`${this.handleHideSearch(this.props.match.path)}`} className='open-search'>
              <Link to="/">Add a book</Link>
            </div>
        </div>
        
        </div>
    )
}
}

export default withRouter(BookList);