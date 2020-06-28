import React from "react";
import BookList from './components/BookList'
import BookShow from './components/BookShow'
import {Menu} from "semantic-ui-react"

class App extends React.Component {

  state = {
    books: [],
    clickedBook: {
      title: "Title",
      description: "",
      img_url: "",
      users: []
    }
  }

  handleClick = (bookObjFromChild) => {
    this.setState({clickedBook: bookObjFromChild})
  }

  handleLike = (bookObjFromChild) => {
    this.setState((prevState) => {
      const newBooks = prevState.books.map(book => { if (book.id === bookObjFromChild.id) { return bookObjFromChild } else { return book } })

      return {
        books: newBooks,
        clickedBook: bookObjFromChild
      }

    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(json => this.setState({books: json, clickedBook: json[0]}))
  }

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <BookList books={this.state.books} handleClick={this.handleClick}/>
          <BookShow book={this.state.clickedBook} handleLike={this.handleLike}/>
        </main>
      </div>
    );
  }
}

export default App;
