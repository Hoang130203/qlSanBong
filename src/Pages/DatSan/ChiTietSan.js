import { Star } from "@mui/icons-material";
import { Box, Button, Divider, Fab, Grid, MenuItem, Rating, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
import Comment from "../../Component/Comment";
import { NavLink, useParams } from "react-router-dom";
import ClassApi2 from '../../api/API2'

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
    const [rate, setRate] = useState(0)
    const [field, setField] = useState({})
    useEffect(() => {
        ClassApi2.GetFieldById(id).then((response) => {
            setField(response.data)
            setRate(response.data.rate)
        })
    }, [])
    const [listComment, setListComment] = useState([
        {
            "danhgia": {
                "fieldid": "9xvEy",
                "userphonenumber": "0973006826",
                "rate": 5,
                "comment": "sân đẹp",
                "time": "2023-12-17T12:29:54.9206553"
            },
            "user": {
                "phonenumber": "0973006826",
                "name": "lionel messi",
                "birthdate": null,
                "gender": true,
                "address": "agrentina",
                "avt": "http://res.cloudinary.com/dqwouu351/image/upload/v1702786342/Home/ttbea9jelbtkvi5gizm6.jpg"
            }
        },
        {
            "danhgia": {
                "fieldid": "9xvEy",
                "userphonenumber": "0973006825",
                "rate": 3,
                "comment": "",
                "time": "2023-12-17T12:25:03.2479076"
            },
            "user": {
                "phonenumber": "0973006825",
                "name": "mai minh hoàng",
                "birthdate": null,
                "gender": true,
                "address": "nghệ an",
                "avt": "http://res.cloudinary.com/dqwouu351/image/upload/v1702478388/Home/ihqztxdsjsmrmev1faur.jpg"
            }
        },

    ])
    useEffect(() => {
        ClassApi2.GetAllCmtOfField(id).then((response) => {
            setListComment(response.data)
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
                        <Rating name="read-only" value={rate} readOnly />
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
                            <Comment key={index} name={item.user.name} time={item.danhgia.time} rate={item.danhgia.rate} avt={item.user.avt} comment={item.danhgia.comment} />
                        )
                    })}

                </CustomTabPanel>
            </Grid>

        </Grid>
    );
}

export default ChiTietSan;