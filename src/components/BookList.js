import React from 'react'
import BookTitle from './BookTitle'

import {Menu} from "semantic-ui-react"

export default function BookList(props) {
    
    return (
        <Menu vertical inverted>
            {props.books.map(book => <BookTitle key={book.id} book={book} handleClick={props.handleClick}/>)}
        </Menu>
    )
}