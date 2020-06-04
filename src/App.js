import React, { Component } from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route}  from 'react-router-dom'
import Header from './components/Header'
import CurrentlyRBook from './components/currentlyReading'
import Search from './components/Search'
import ReadBooks from './components/readBooks'
import WantReadBooks from './components/wantRead'

 


class App extends Component {

    state={
        books:[],
        searchBooks:[]
    }
  
    
    componentDidMount(){ 
        BooksAPI.getAll().then(books=>{
           if(books){
               this.setState({
                   books:this.state.books.concat(books)
               });
           }
        });
        this.searchResults('Art');

    }
  
    handleShelfBooks=(shelf)=>this.state.books.filter(book=>book.shelf === shelf);
    
    handleShelfChangeBooks=(shelf,book)=>{
      book.shelf=shelf;
      this.setState({
         books: [...new Set(this.state.books,book)]})
      }
      
    uniqueBook=(books)=>{
        return books.reduce((acc,val)=>{
            if(acc.id !== val.id){
                acc.push(val)
            }
            return acc
        },[])
    }
    handleFilteredSearchBooks=(books)=>{
        return books.filter(book=>{
          if(book.shelf){
            return book
          }
        })}
        
    searchResults=(query)=>{
       
        BooksAPI.search(query)
        .then(data=>{
            if(data){
                this.setState({
                    books:this.handleFilteredSearchBooks(this.state.books).concat(data.books)
                });
            }})
            .catch(err=>console.log(err));   
    }
    render() {
            const {books}=this.state;
          
        return (
            <React.Fragment>
            <Header />
            <Switch className="app">
            
            <Route  path="/current"  render={(props)=>(
                <CurrentlyRBook 
               books={this.handleShelfBooks('currentlyReading')}
               handleShelfChangeBooks={this.handleShelfChangeBooks}
                />
            )}/>

            <Route exact path="/"  render={(props)=>(
                <Search
                searchResults={this.searchResults}
                books={books}
                handleShelfChangeBooks={this.handleShelfChangeBooks}
                />
            )}/>



            <Route  path="/want"  render={(props)=>(
                <WantReadBooks 
                books={this.handleShelfBooks('wantToRead')}
                handleShelfChangeBooks={this.handleShelfChangeBooks}
                />
            )}/>
 */}
            <Route  path="/read"  render={(props)=>(
                <ReadBooks 
                books={this.handleShelfBooks('read')}
                handleShelfChangeBooks={this.handleShelfChangeBooks}
                />
            )}/>

            )}/>

            </Switch>
            </React.Fragment>
        )
    }
}



export default App