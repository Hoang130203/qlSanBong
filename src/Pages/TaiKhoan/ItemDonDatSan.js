import { Badge, Button, Divider, Grid, Popover, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";
function ItemDonDatSan({ sanbongdh, sanbong, donhang }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [rate, setRate] = useState(0)
    const [comment, setComment] = useState('')
    const open = Boolean(anchorEl);
    return (
        <Grid item container padding='10px 0px' alignContent='flex-start' rowSpacing={2} margin='15px 0px'>
            <Grid item container xs={12} justifyContent='space-between' padding='0px 10px 10px 10px' bgcolor="#ccc">
                <Grid item>
                    <Typography>Mã đơn hàng : <span style={{ color: 'red' }}>#{donhang.orderid}</span></Typography>
                </Grid>
                <Grid item>
                    <Typography>Trạng thái : <span style={{ color: donhang.status == "Hoàn thành" ? 'green' : 'blue' }}>{donhang.status}</span></Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} alignContent='center' >
                <Grid item container xs={2.5} alignContent='center'>
                    <Grid item >
                        <img style={{ maxWidth: '100%', maxHeight: '80px' }} src={sanbong.linkimg} />
                    </Grid>
                </Grid>
                <Grid item container xs={7} paddingLeft='10px'>
                    <Grid item xs={12}>
                        <Typography fontWeight={600}>{sanbong.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Kíp: <span style={{ color: 'blue' }}>{sanbongdh.kip}</span> Đã đặt đá ngày: <span style={{ color: 'green' }}>{sanbongdh.times.split("T")[0]}</span></Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={2.5} justifyContent='flex-end'>
                    <Grid item>
                        <Typography textAlign='center' color='orange'>{sanbong.price.toLocaleString()} đ</Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12}><Divider /></Grid>
            <Grid item container xs={12} justifyContent='flex-end'>
                <Grid item >
                    <Typography>Thành tiền: <span style={{ color: 'orange' }}>{donhang.totalcost.toLocaleString()}</span> đ</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} item container justifyContent='flex-end'>
                <Grid item >
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Đánh giá
                    </Button>
                    <Popover

                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Grid item container sx={{ p: 2, width: '400px' }}>
                            <Grid item xs={3}>
                                <Typography>Đánh giá</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Rating value={rate} onChange={(e) => { setRate(parseInt(e.target.value)) }}></Rating>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Bình luận</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={comment} style={{ width: '90%' }} onChange={(e) => { setComment(e.target.value) }}></TextField>
                            </Grid>
                            <Grid item xs={12} paddingTop='20px'>
                                <Button variant="contained" color="info">Gửi đánh giá</Button>
                            </Grid>
                        </Grid>
                    </Popover>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ItemDonDatSan;