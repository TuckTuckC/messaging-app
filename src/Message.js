import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message({message, name}) {
    const isUser = name === message.username;
    return (
        <div>
            <Card className={`message ${isUser && 'message_user'}`}>
                <CardContent>
                    <Typography
                    color='white'
                    variant='h5'
                    component='h2'
                    >
                        {message.username}: {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
