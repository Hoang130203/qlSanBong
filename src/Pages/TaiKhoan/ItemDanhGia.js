import { Button, Grid, Popover, Rating, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ClassApi2 from "../../api/API2"
import { toast } from "react-toastify";
function ItemDanhGia({ productid, time, status }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [rate, setRate] = useState(0)
    const open = Boolean(anchorEl);
    const [disabled, setDisabled] = useState(false)
    const [comment, setComment] = useState('')
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleComment = () => {
        if (status !== undefined && status.toLowerCase() == 'hoàn thành') {
            ClassApi2.PostComment({
                "productid": productid,
                "userphonenumber": localStorage.getItem('usersb'),
                "rate": rate,
                "comment": comment.length > 0 ? comment : '.',
                "time": time
            }).then((response) => {
                toast.success('Đánh giá thành công', {
                    position: 'bottom-right'
                })
                setDisabled(true)
                //   setTimeout(()=>{

                //     },[1000])
            }).catch(() => {
                toast.error('Lỗi', {
                    position: 'bottom-right'
                })
            })
        } else {
            toast.info('Đơn hàng chưa hoàn thành, không thể để lại bình luận', {
                position: 'bottom-right'
            })
        }

    }
    useEffect(() => {

        ClassApi2.GetCommentByProduct(productid, time).then((response) => {
            if (response.data.comment) {
                setComment(response.data.comment)
                console.log(response.data.comment)
                setRate(response.data.rate)
                setDisabled(true)
            }
        })

    }, [productid, time])
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid item container xs={12} justifyContent='flex-end' marginBottom='10px'>
            <Button variant="contained" color="warning" onClick={handleClick}>
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
                        <TextField disabled={disabled} value={comment} style={{ width: '90%' }} onChange={(e) => { setComment(e.target.value) }}></TextField>
                    </Grid>
                    <Grid item xs={12} paddingTop='20px'>
                        <Button variant="contained" onClick={handleComment} disabled={disabled}>Gửi đánh giá</Button>
                    </Grid>
                </Grid>
            </Popover>
        </Grid>
    );
}

export default ItemDanhGia;