import styled from "@emotion/styled";
import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React from 'react';




const useStyles = styled((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 600,
        margin: 'auto',
        marginBottom: theme.spacing(2),
    },
    media: {
        width: 200,
        height: 200,
        objectFit: 'cover',
    },
    content: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
    },
}));
function SanBong({ address, cost, special, image, title, rate }) {
    const classes = useStyles();
    return (
        <Grid container item height='247px' width='95%' padding='10px' borderLeft="1px solid #ccc">
            <Card className={classes.root} style={{ display: 'flex' }}>
                <CardMedia
                    sx={{ width: '30%' }}
                    component='img'
                    className={classes.media}
                    image={image}
                    title="title"
                />
                <CardContent className={classes.content}>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            {title}
                        </Typography>
                        <Rating value={rate} readOnly />
                        <Typography variant="body1" gutterBottom>
                            Giá tiền: <span style={{ color: 'red' }}>{cost}đ</span> / Trận
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Địa chỉ: {address}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Điểm nhấn: {special}
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                        <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                            Xem chi tiết
                        </Button>
                        <Button variant="contained" color="secondary">
                            Đặt sân
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default SanBong;