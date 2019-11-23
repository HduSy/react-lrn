import React, {useState, useEffect} from 'react'
import useFriendStatus from "./custom-hooks/useFriendStatus"

export default function FriendStatus() {
    const isOnline = useFriendStatus(props.friend.id)
    if (isOnline === null) {
        return 'Loading...'
    }
    return isOnline ? 'Online' : 'Offline'
}
