import React from 'react'
import UserList from './UserList'

import {
    Container,
    Header,
    Button,
    Image
} from "semantic-ui-react"
  
export default function BookShow(props) {

    const { id, title, img_url, description, users } = props.book
    const liked = props.book.users.map(user => user.id).includes(1)

    function handleClick () {
        if (!liked) {
            const patch = {users: [...users, {"id":1, "username":"pouros"}]}

            const configObj = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(patch)
            }

            fetch(`http://localhost:3000/books/${id}`, configObj)
                .then(resp => resp.json())
                .then(json => props.handleLike(json))
        }

        else {

            const patch = { users: users.filter(user => user.id !== 1) }

            const configObj = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(patch)
            }

            fetch(`http://localhost:3000/books/${id}`, configObj)
                .then(resp => resp.json())
                .then(json => props.handleLike(json))
        }
    }

    return (
    <Container text>
        <Header>{title}</Header>
        <Image src={img_url} size="small" alt="book-cover"/>
        <p>{description}</p>
        <Button
        color={liked ? "red" : "grey"}
        content={liked ? "Unlike" : "Like"}
        icon="heart"
        label={{
            basic: true,
            color: liked ? "red" : "grey",
            pointing: "left",
            content: users.length
        }}
        onClick={handleClick}
        />
        <Header>Liked by</Header>
        <UserList users={users}/>
    </Container>)
    
}