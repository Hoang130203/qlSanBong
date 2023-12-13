import { Star } from "@mui/icons-material";
import { Box, Button, Divider, Fab, Grid, Menu, MenuItem, Rating, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import Comment from "../../Component/Comment";
import { useParams } from "react-router-dom";
import ClassAPI2 from '../../api/API2'
import { toast } from "react-toastify";
const listComment = [
    { name: 'Ayaka', avt: 'https://cdn-www.bluestacks.com/bs-images/Genshin-Impact-Ayaka-crit-stat-guide-vi-1.jpeg', time: '20-11-2022', rate: 5, comment: 'Giày đẹp quá ạ!' },
    { name: 'Raiden shogun', avt: 'https://vtcpay.vn/blog/wp-content/uploads/2021/09/Raiden-Shogun.png', time: '15-11-2022', rate: 3, comment: 'Cũng thường thôi:))' },
    { name: 'Jingliu', avt: 'https://assetsio.reedpopcdn.com/Honkai-Star-Rail-Jingliu-Eidolons-1.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp', time: '12-11-2022', rate: 4, comment: 'Cũng ổn' },

]
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ width: '100%', minHeight: '400px' }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function ChiTietSanPham() {
    const id = useParams().id
    const [value, setValue] = useState(0);
    const [colors, setColors] = useState(['xanh', 'đỏ'])
    const [product, setProduct] = useState({
        productname: 'Kamito QH19 Màu Xanh Cổ Vịt ',
        linkimg: 'https://www.sport9.vn/images/thumbs/001/0019091_kamito-qh19-mau-xanh-co-vit.jpeg?preset=large&watermark=default',
        detail: 'Sự kết hợp giữa Kamito và Quang Hải vào hồi tháng 5/2019 với siêu phẩm “QH19” đã tạo được dấu ấn lớn với người chơi bóng đá trên cả nước. Từ các sân cỏ ở thành thị cho tới vùng sâu, vùng xa, đâu đâu cũng có thể nhìn thấy QH19.',
        rate: '1', price: 150000, color: 'Đen, trắng'
    })
    const [color, setColor] = useState('')
    const [quantity, setQuantity] = useState(1)
    const handleAdd = async () => {
        try {
            await ClassAPI2.PostToCart({ userphonenumber: localStorage.getItem('usersb'), productid: id, price: product.price, quantity: quantity, color: color })
            await toast.success('đã thêm vào giỏ hàng', {
                position: 'bottom-right'
            })

        } catch (error) {
            toast.error('thêm thất bại', {
                position: 'bottom-right'
            })
        }
    }
    useEffect(() => {
        ClassAPI2.GetProductById(id).then((response) => {
            setProduct(response.data)
            setColors(response.data.color.split(/[,\s]+/))
            console.log(colors)
        })
    }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container justifyContent='center' alignContent='flex-start'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='row' height='30px' marginBottom='30px'>
                <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                    <Typography >Trang chủ    /&nbsp;</Typography>
                </a>
                <Typography color='#35c0c5'>Chi tiết sản phẩm</Typography>
            </Grid>
            <Grid container item xs={10} md={8} padding='25px 0px' display='flex ' flexDirection='row' minHeight='500px' rowSpacing={1} columnSpacing={5}>
                <Grid item xs={12} sm={10} md={4}>
                    <img style={{ maxWidth: '100%', maxHeight: '500px' }} src={product.linkimg}></img>
                </Grid>
                <Grid item container xs={12} sm={10} md={8} alignContent='flex-start'>
                    <Grid item xs={12} >
                        <Typography variant="h5">{product.productname}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography><span style={{ fontWeight: '600' }}>Tình trạng: </span>Còn hàng</Typography>
                    </Grid>
                    <Grid item xs={12} padding='10px 0px'>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Rating name="read-only" value={product.rate != null ? product.rate : 0} readOnly />
                    </Grid>
                    <Grid item xs={12} padding='0px 0px 10px 0px'>
                        <Typography><span style={{ fontSize: '30px', color: '#6dc3d0' }}>{product.price.toLocaleString()}</span><span style={{ textDecoration: 'underline', top: '-5px', fontSize: '20px', position: 'relative', color: '#ccc', marginLeft: '4px' }}>đ</span></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ fontSize: '20px', padding: '5px 0px' }}>Số lượng:</div>
                        <div style={{ width: '100px', display: 'flex', flexDirection: 'row', height: '48px', border: '1px solid #333' }}>
                            <div style={{ width: '65px', borderRight: '1px solid #333' }}>
                                <input onChange={(e) => { if (parseInt(e.target.value) > 0) { setQuantity(parseInt(e.target.value)) } }} value={quantity} type="text" style={{ maxWidth: '90%', height: '92%', fontSize: '20px', textAlign: 'center' }}></input>
                            </div>
                            <div style={{ flex: 'auto', width: '35px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '50%', borderBottom: '1px solid #333' }}>
                                    <button style={{ width: '100%', height: '100%' }} onClick={() => { setQuantity(quantity + 1) }}>
                                        <AddIcon style={{ fontSize: '20px' }} />
                                    </button>
                                </div>
                                <div style={{ flex: 'auto', height: '50%' }}>
                                    <button style={{ width: '100%', height: '100%' }} onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity) }}>
                                        <RemoveIcon style={{ fontSize: '20px' }} />
                                    </button>
                                </div>

                            </div>
                        </div>

                    </Grid>
                    <Grid item container paddingTop='15px' alignItems='center' columnSpacing={2}>
                        <Grid item>
                            <Typography variant="h6">Màu sắc: </Typography>
                        </Grid>
                        <Grid item >
                            <Select value={color} onChange={(e) => { setColor(e.target.value) }} style={{ width: '150px', height: '45px' }}>
                                {colors.map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}

                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} padding='20px 0px'>
                        <Button onClick={handleAdd} color="primary" variant="contained"><Typography variant="h7">Thêm vào giỏ hàng</Typography></Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={8}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', maxWidth: '800px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Thông tin sản phẩm" {...a11yProps(0)} />
                        <Tab label="Đánh giá" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} >
                    <Grid item><Typography variant="h6" color='#ccc'>Mô tả sản phẩm</Typography></Grid>
                    <Grid item maxWidth='700px'><Typography variant="h8" >{product.detail}</Typography></Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {listComment.map((item, index) => {
                        return (
                            <Comment key={index} name={item.name} time={item.time} rate={item.rate} avt={item.avt} comment={item.comment} />
                        )
                    })}

                </CustomTabPanel>
            </Grid>

        </Grid>
    );
}

export default ChiTietSanPham;