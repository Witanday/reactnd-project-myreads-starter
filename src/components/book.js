import React from 'react'
import PropTypes from 'prop-types'



class Book  extends React.Component{

  static propTypes = {
    book: PropTypes.object.isRequired,
    pathshelf: PropTypes.string.isRequired,
    handleShelfChangeBooks: PropTypes.func.isRequired,
  }      
        handleChange=(e)=> {
          e.preventDefault();
          e.stopPropagation()
          if(this.props.pathshelf!==e.target.value){
            this.props.handleShelfChangeBooks(e.target.value, this.props.book);
          }
          
        }
    render(){
          const {book}=this.props
    return (
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select  onClick={this.handleChange} defaultValue={this.props.pathshelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none"  >None</option>
          </select>
        </div>
      </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
}

}

export default Book
