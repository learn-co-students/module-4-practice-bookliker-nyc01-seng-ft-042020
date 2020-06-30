import React from 'react'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react";
import BookCard from './BookCard'

let BookContainer = (props) => {
    let arrayOfBooks = props.books.map((bookPOJO) => {
        return <BookCard
            book={bookPOJO}
            key={bookPOJO.key}
        />
    })

    return (
        <>
        <Menu vertical inverted>
            <Menu.Item as={"a"} onClick={e => console.log("book clicked!")}>
              Book Title
            </Menu.Item>
        </Menu>
        <Container text>
            {arrayOfBooks}    
        </Container>
        </>
    )
}

export default BookContainer