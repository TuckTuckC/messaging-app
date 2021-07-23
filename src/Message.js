import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography
                    color='white'
                    variant='h5'
                    component='h2'
                    >
                        {props.name}: {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
