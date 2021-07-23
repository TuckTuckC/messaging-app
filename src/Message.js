import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message({message, name}) {
    return (
        <div>
            <Card className="message">
                <CardContent>
                    <Typography
                    color='white'
                    variant='h5'
                    component='h2'
                    >
                        {message.name}: {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
