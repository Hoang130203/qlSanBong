import React from 'react';
import { Card, CardContent, Typography, ThemeProvider, createTheme, Grid } from '@mui/material';
const color = ['', 'green', 'red', 'blue', 'yellow']
const theme = createTheme({
    typography: {
        fontSize: 14,
    },
    cardStyles: {
        maxWidth: '100%',
        margin: '10px',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
    },
});

function NotificationCard({ id, orderCode, content, time, type }) {


    return (
        <ThemeProvider theme={theme}>
            <Grid item container spacing={2}>
                <Grid item xs={12} >
                    <Card sx={theme.cardStyles} style={{ boxShadow: `3px 3px 3px 0px ${color[type]}, -3px -3px 3px 0px rgba(0, 0, 0, 0.3)` }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                ID: <span style={{ color: 'green', fontWeight: '700' }}>{id}</span>
                            </Typography>
                            <Typography color="textSecondary" gutterBottom >
                                Order Code: <span style={{ color: 'red', fontWeight: '700' }}>{orderCode}</span>
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                Time: <span style={{ color: '#d6af5a', fontWeight: '600' }}>{time}</span>
                            </Typography>
                            <Typography variant="body1" component="p">
                                Nội dung:<span style={{ color: '#5a9ad6', fontWeight: '600' }}> {content}</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default NotificationCard;
