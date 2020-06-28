import React from 'react'
import User from './User'
import {List} from "semantic-ui-react"

export default function UserList(props) {

    function renderUsers() {
        return props.users.map(user => <User key={user.id} user={user}/>)
    }

    return (
        <List>
          {renderUsers()}
        </List>
    )
}