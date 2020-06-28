import React from 'react'
import {List} from "semantic-ui-react"

export default function User(props) {
    
    return <List.Item icon="user" content={props.user.username} />
}