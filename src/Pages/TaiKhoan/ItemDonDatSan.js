import { Badge, Button, Divider, Grid, Popover, Rating, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClassApi2 from '../../api/API2'
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import QRThanhToan from "../../Service/QRThanhToan";
function ItemDonDatSan({ sanbongdh, sanbong, donhang }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl2, setAnchorEl2] = useState(null);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const [rate, setRate] = useState(0)
    const [comment, setComment] = useState('')
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        try {
            ClassApi2.GetCommentByField_User(sanbong.fieldid, donhang.time).then((response) => {
                if (response.data.comment) {
                    console.log(response.data.comment)
                    setRate(response.data.rate)
                    setComment(response.data.comment)
                    setDisabled(true)
                }
            })
        } catch (error) {

        }
    }, [sanbong])
    const handleSendComment = () => {
        ClassApi2.PostFieldComment({
            "fieldid": sanbong.fieldid,
            "userphonenumber": localStorage.getItem('usersb'),
            "rate": rate,
            "comment": comment.length > 0 ? comment : '.',
            "time": donhang.time
        }).then((response) => {
            toast.success('Bạn đã đánh giá thành công sân bóng ' + sanbong.name, {
                position: 'bottom-right'
            })
            setDisabled(true)
        }).catch(() => {
            toast.error('Lỗi', {
                position: 'bottom-right'
            })
        })
    }
    return (
        <Grid item container padding='10px 0px' alignContent='flex-start' rowSpacing={2} margin='15px 0px'>
            <Grid item container xs={12} justifyContent='space-between' padding='0px 10px 10px 10px' bgcolor="#ccc">
                <Grid item>
                    <Typography>Mã đơn hàng : <span style={{ color: 'red' }}>#{donhang.orderid}</span></Typography>
                </Grid>
                <Grid item>
                    <Typography>Trạng thái : <span style={{ color: donhang.status.includes("đã thanh toán") ? 'green' : 'blue' }}>{donhang.status}</span></Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} alignContent='center' >
                <Grid item container xs={2.5} alignContent='center'>
                    <Grid item >
                        <NavLink to={"/dat-san/chi-tiet-san/" + sanbong.fieldid} style={{ textDecoration: 'none' }}>
                            <img style={{ maxWidth: '100%', maxHeight: '80px' }} src={sanbong.linkimg} />
                        </NavLink>
                    </Grid>
                </Grid>
                <Grid item container xs={7} paddingLeft='10px'>
                    <Grid item xs={12}>
                        <NavLink to={"/dat-san/chi-tiet-san/" + sanbong.fieldid} style={{ textDecoration: 'none' }}>
                            <Typography fontWeight={600}>{sanbong.name}</Typography>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Kíp: <span style={{ color: 'blue' }}>{sanbongdh.kip}</span> Đã đặt đá ngày: <span style={{ color: 'green' }}>{sanbongdh.times.split("T")[0]}</span></Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={2.5} justifyContent='flex-end'>
                    <Grid item>
                        <Typography textAlign='center' color='orange'>{sanbongdh.cost.toLocaleString()} đ</Typography>
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
                    <Button variant="contained" style={{ marginRight: '10px' }}
                        onClick={handleClick2}
                        disabled={donhang.status.includes('chưa thanh toán') ? false : true}>
                        Thanh toán
                    </Button>
                    <Popover
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 400, left: 700, right: 700 }}
                        open={open2}
                        //  responsive={true}
                        anchorEl={anchorEl2}
                        onClose={handleClose2}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                    ><Grid item container sx={{ p: 2, width: '450px', maxWidth: '80vw' }}>
                            <QRThanhToan phone={donhang.phonenumber} id={donhang.orderid} />
                        </Grid>
                    </Popover>
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
                                <Rating disabled={disabled} value={rate} onChange={(e) => { setRate(parseInt(e.target.value)) }}></Rating>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Bình luận</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={comment} disabled={disabled} style={{ width: '90%' }} onChange={(e) => { setComment(e.target.value) }}></TextField>
                            </Grid>
                            <Grid item xs={12} paddingTop='20px'>

                                <Button onClick={handleSendComment} variant="contained" color="info" disabled={disabled}>Gửi đánh giá</Button>
                            </Grid>
                        </Grid>
                    </Popover>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ItemDonDatSan;