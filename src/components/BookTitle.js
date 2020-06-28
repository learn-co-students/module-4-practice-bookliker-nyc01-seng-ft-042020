import React from 'react'
import {Menu} from "semantic-ui-react"

export default function BookTitle(props) {

    function handleClick() {
        props.handleClick(props.book)
    }

    return (
        <Menu.Item as={"a"} onClick={handleClick}>
            {props.book.title}
        </Menu.Item>
    )
}