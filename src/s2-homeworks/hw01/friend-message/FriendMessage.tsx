import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type FriendMessageType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
    const {message} = props
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.avatarAndTimeBox}>
                    <img
                        alt={"photo_friend_message"}
                        id={'hw1-friend-avatar-' + props.message.id}
                        src={message.user.avatar}
                        className={s.avatar}
                    />
                    <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}>
                        {message.message.time}
                    </div>
                </div>

                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}>
                    {message.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {message.message.text}
                    </pre>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
