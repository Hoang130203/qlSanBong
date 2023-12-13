import { Star } from "@mui/icons-material";
import { Box, Button, Divider, Fab, Grid, MenuItem, Rating, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import Comment from "../../Component/Comment";
import { NavLink, useParams } from "react-router-dom";
import ClassApi2 from '../../api/API2'
const listComment = [
    { name: 'Messi', avt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfqcIR6_q8U_vFeIxVY_Uah0hvqB6zvaC6h_jU-OMJV7PkyWrEfZ_X8kt0500NRmPk28&usqp=CAU', time: '20-11-2022', rate: 4, comment: 'Sân khá ổn.' },
    { name: 'Ronaldo', avt: 'https://nld.mediacdn.vn/291774122806476800/2022/12/9/13-ronaldo-16705925694541880121770.jpg', time: '15-11-2022', rate: 2, comment: 'Sân hơi cùi chút' },
    { name: 'Neymar', avt: 'https://nld.mediacdn.vn/291774122806476800/2023/9/9/neymar--16942333756491612020374.jpg', time: '12-11-2022', rate: 3, comment: 'Sân này đá dễ ngã quá!?!' },

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
function ChiTietSan() {
    const [value, setValue] = useState(0);
    const id = useParams().id
    const [field, setField] = useState({})
    useEffect(() => {
        ClassApi2.GetFieldById(id).then((response) => {
            setField(response.data)
        })
    }, [])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    return (
        <Grid container justifyContent='center' alignContent='flex-start'>
            <Grid container item xs={9.5} paddingTop='25px' display='flex' flexDirection='row' height='30px' marginBottom='30px'>
                <a href="/" style={{ textDecoration: 'none', color: '#333' }}>
                    <Typography >Trang chủ    /&nbsp;</Typography>
                </a>
                <Typography color='#35c0c5'>Chi tiết sân</Typography>
            </Grid>
            <Grid container item xs={10} md={8} padding='25px 0px' display='flex ' justifyContent='space-between' flexDirection='row' minHeight='500px' rowSpacing={1} >
                <Grid item xs={12} sm={10} md={6}>
                    <img style={{ maxWidth: '100%', maxHeight: '500px' }} src={field.linkimg}></img>
                </Grid>
                <Grid item container xs={12} sm={10} md={5.5} alignContent='flex-start' >
                    <Grid item xs={12} >
                        <Typography variant="h5">{field ? field.name : ''} </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography><span style={{ fontWeight: '600' }}>Tình trạng: </span><span style={{ color: 'green' }}>Đang hoạt động</span></Typography>
                    </Grid>
                    <Grid item xs={12} padding='10px 0px'>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Rating name="read-only" value={field ? field.rate : 0} readOnly />
                    </Grid>
                    <Grid item xs={12} padding='0px 0px 10px 0px'>
                        <Typography><span style={{ fontSize: '30px', color: 'red' }}>{field ? !isNaN(field.price) ? field.price.toLocaleString() : field.price : 0}</span><span style={{ textDecoration: 'underline', top: '-5px', fontSize: '20px', position: 'relative', color: '#ccc', marginLeft: '4px' }}>đ</span></Typography>
                    </Grid>

                    <Grid item container paddingTop='15px' alignItems='center' columnSpacing={2}>
                        <Grid item>
                            <Typography variant="h6">Loại sân: </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="h6" fontWeight={600}>
                                {field ? field.type == 1 ? '7 người' : field.type == 2 ? '11 người' : 'fusal' : ''}
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid item container paddingTop='15px' alignItems='center' columnSpacing={2}>
                        <Grid item>
                            <Typography variant="h6">Địa chỉ: </Typography>
                        </Grid>
                        <Grid item >
                            <Typography color='green' variant="h7" fontWeight={500}>{field ? field.address : ''}</Typography>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} padding='20px 0px'>
                        <NavLink to={'/dat-san/dat-san/' + field.fieldid}>
                            <Button color="secondary" variant="contained" ><Typography variant="h7" >Đặt sân</Typography></Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={8}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', maxWidth: '800px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Thông tin sân" {...a11yProps(0)} />
                        <Tab label="Đánh giá" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} >
                    <Grid item><Typography variant="h6" color='#ccc'>Mô tả sân</Typography></Grid>
                    <Grid item maxWidth='700px'><Typography variant="h8" >{field ? field.decription : ''}</Typography></Grid>
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

export default ChiTietSan;