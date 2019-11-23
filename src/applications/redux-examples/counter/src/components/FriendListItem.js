import React, {useState, useEffect} from 'react'
import useFriendStatus from "./custom-hooks/useFriendStatus"

export default function FriendListItem() {
    const isOnline = useFriendStatus(props.friend.id)
    return (
        <li style={{color: isOnline ? 'green' : 'red'}}>{props.friend.name}</li>
    )
}
