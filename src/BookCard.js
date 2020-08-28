import React from 'react'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react";

class BookCard extends React.Component {

    render() {
        let {title, description, img_url} = this.props.book
        
        let users = this.props.book.users.map((user) => {
            return (
                <li
                     user={user.username}
                />
            )
            console.log(user)
        })

        return (
            <>
            <Header>{title}</Header>
            <Image
                src={img_url}
                size="small"
            />
            <p>{description}</p>
            <Button
                color="red"
                content="Like"
                icon="heart"
                label={{
                    basic: true,
                    color: "red",
                    pointing: "left",
                    content: "2,048"
                }}
            />
            <Header>Liked by</Header>
            <List>
                <List.Item icon="user" content="User name" />
                <ol>
                    {users}
                </ol>
            </List>
            </>
        )
    };
};

export default BookCard;