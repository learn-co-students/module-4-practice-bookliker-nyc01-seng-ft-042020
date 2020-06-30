import React from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  List,
  Image
} from "semantic-ui-react";
import BookContainer from './BookContainer'


class App extends React.Component {

  state = {
    bookList: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/books")
    .then(r => r.json())
    .then((bookArray) => {
      this.setState({
        bookList: bookArray
      })
    })
  }
  
  render() {
    // console.log(this.state)
    let {bookList} = this.state
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <BookContainer 
            books={bookList}
          />
        </main>
      </div>
    )
  }
}

export default App;
