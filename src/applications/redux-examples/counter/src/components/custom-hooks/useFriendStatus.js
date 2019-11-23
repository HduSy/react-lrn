import React, {useState, useEffect} from 'react'

export default function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = useState(null);
    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }
    // 将 friendID 作为参数
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        // 每个 effect 都可以返回一个清除函数
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });
    return isOnline;
}
