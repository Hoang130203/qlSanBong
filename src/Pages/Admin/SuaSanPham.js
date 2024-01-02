import {
    Button,
    CircularProgress,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    TextareaAutosize,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from "react";
import ClassApi from '../../api/API'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import { font } from '../../Service/font'
import { getDate } from "date-fns";

const API_ADDRESS = 'https://provinces.open-api.vn/';
const theme = createTheme({
    components: {
        MuiTypography: {

            styleOverrides: {

                root: {
                    fontSize: '20px',
                    fontWeight: "500",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    //padding: "0px 30px",

                    "& .MuiInputBase-input": {
                        fontSize: "20px",
                        padding: "5px",
                    },
                },
            },
        },

    },
});
function SuaSanPham() {
    const id = useParams().id
    const [isUploading, setIsUploading] = useState(false)
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [quantity, setQuantity] = useState('')
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')
    const [color, setColor] = useState('')
    const onChange = (e) => {
        setType(e.target.value)
    }
    const [demoUrl, setDemoUrl] = useState('https://png.pngtree.com/png-vector/20210313/ourmid/pngtree-sheets-of-graph-paper-torn-writing-png-image_3055185.jpg')
    const onChangeImg = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage)
        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setDemoUrl(event.target.result);
            };

            reader.readAsDataURL(selectedImage);
        }
    }
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    useEffect(() => {
        try {
            ClassApi.GetProduct(id).then((response) => {
                setName(response.data.productName)
                setCost(response.data.price)
                setDetail(response.data.description ? response.data.description : '')
                setQuantity(response.data.quantity)
                setColor(response.data.color)
                setDemoUrl(response.data.linkimg.length > 10 ? response.data.linkimg : demoUrl)
                setType(response.data.type)
            })
        } catch (error) {

        }

    }, [])
    const handleClick = async () => {
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 2000);
        try {
            if (name.length == 0 || cost.length == 0 || type.length == 0 || quantity.length == 0) {
                toast.warning('điền đủ thông tin')
                return
            }
            setCost(parseInt(cost))
            if (image != '') {
                setIsUploading(true);
                const sendimage = await ClassApi.PostImage(image)

                ClassApi.PutProduct(id, { productid: id, quantity: parseInt(quantity), type: type, color: color, productName: name, price: cost, description: detail, linkimg: sendimage.data.url });
                setIsUploading(false);
            } else {
                ClassApi.PutProduct(id, { productid: id, quantity: parseInt(quantity), type: type, color: color, productName: name, price: cost, description: detail, linkimg: demoUrl });

            }
            await toast.success('sửa thành công')
        }
        catch {
            toast.error('lỗi')
        }

    };
    const handleExport = () => {
        const doc = new jsPDF();

        const imageUrl = demoUrl.length > 10 ? demoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoL4bX1iIJZituNk6mWAwOdD2Am1MjOdJBZQ&usqp=CAU';
        let line = 10
        doc.addFileToVFS("WorkSans-normal.ttf", font);
        doc.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
        doc.setFont("WorkSans");
        doc.setFontSize(15);
        doc.setTextColor(255, 0, 0);
        doc.text('Project 1 shop', 35, line, 'center');
        doc.setTextColor(255, 0, 0);
        doc.setFontSize(12)
        var currentDate = new Date();

        // Lấy ngày, tháng và năm hiện tại
        var day = currentDate.getDate(); // Lấy ngày (từ 1 đến 31)
        var month = currentDate.getMonth() + 1; // Lấy tháng (từ 0 đến 11), cộng thêm 1 vì tháng bắt đầu từ 0
        var year = currentDate.getFullYear(); // Lấy năm
        doc.setTextColor(0, 0, 0)
        doc.text('ngày ' + day + ', tháng ' + month + ', năm ' + year, 130, line, 'center');
        line += 30
        doc.setTextColor(11, 14, 229);
        doc.setFontSize(30)
        doc.text('Thông tin sản phẩm', 80, line, 'center');
        line += 15
        // Tải hình ảnh từ URL
        const img = new Image();
        img.src = demoUrl;

        // Đợi hình ảnh tải xong
        img.onload = () => {
            const imgWidth = 100; // Chiều rộng hình ảnh trong file PDF
            const imgHeight = 75; // Chiều cao hình ảnh trong file PDF
            doc.setTextColor(0, 0, 0);
            doc.addImage(img, 'JPEG', 35, line, imgWidth, imgHeight); // Thêm hình ảnh vào file PDF
            doc.addFileToVFS("WorkSans-normal.ttf", font);
            doc.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
            doc.setFont("WorkSans");
            doc.setFontSize(15);
            line += 82
            doc.text('Mã sản phẩm :   ' + id, 35, line);
            line += 12
            doc.text('Tên sản phẩm :   ' + name, 35, line);
            line += 12
            doc.text('Đơn giá:     ' + cost.toLocaleString() + ' đ', 35, line);
            line += 12
            doc.text('Số lượng còn lại:         ' + quantity, 35, line)
            line += 12
            const typ = (type == 1 ? '7 người' : type == 2 ? '11 người' : 'fusal')
            doc.text('Loại hàng:       ' + type, 35, line)
            line += 12
            doc.text('Mô tả:  ', 35, line)

            const maxWidth = 100; // Chiều rộng tối đa cho mỗi dòng

            let textLines = doc.splitTextToSize(detail, maxWidth); // Chia mô tả thành các dòng với độ dài tối đa

            textLines.forEach((lines) => {
                doc.text('' + lines, 70, line);
                line += 12; // Tăng y để xuống dòng cho dòng tiếp theo
            });
            // Lưu file PDF
            doc.save('thogtinsanpham_' + id + '.pdf');
        };

    };
    return (
        <Grid item container spacing={1} style={{ padding: " 30px 50px" }} width='100%'>
            {isUploading && <CircularProgress style={{ position: 'fixed', right: '20px', top: '20px' }} />}
            <ThemeProvider theme={theme}>
                <Grid item xs={12}>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Sửa sản phẩm
                    </Typography>
                </Grid>
                <Grid item container xs={12} rowSpacing={1}>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Tên sản phẩm
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px' }} value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Đơn giá
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField value={cost} onChange={(e) => { setCost(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Số lượng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '100px' }} value={quantity} onChange={(e) => { setQuantity(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Màu sắc
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField value={color} onChange={(e) => { setColor(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Mô tả
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextareaAutosize value={detail} onChange={(e) => { setDetail(e.target.value) }} style={{ width: '430px', height: '100px', overflow: 'auto', fontSize: '20px', fontFamily: 'inherit', padding: '5px' }} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Loại hàng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Select style={{ width: '150px', height: '45px' }} value={type} onChange={onChange}>
                                <MenuItem value='bóng'>Bóng</MenuItem>
                                <MenuItem value='giày'>Giày</MenuItem>
                                <MenuItem value='quần áo'>Quần áo</MenuItem>
                                <MenuItem value='dụng cụ'>Dụng cụ</MenuItem>
                                <MenuItem value='phụ kiện'>Phụ kiện</MenuItem>
                            </Select>

                        </Grid>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={12} md={4} paddingTop='20px'>
                            <Typography>
                                Hình ảnh
                            </Typography>
                            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeImg}></input>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <img style={{ maxWidth: '100%', maxHeight: '300px', boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Button variant="contained" style={{ marginRight: '30px' }} startIcon={<UpgradeIcon />} onClick={handleClick} disabled={isUploading}><Typography textTransform='none'>Sửa sản phẩm</Typography></Button>
                        <Button onClick={handleExport} color="info" startIcon={<ExitToAppIcon />} variant="contained"><Typography textTransform='none'>Export</Typography></Button>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </Grid>
    );
}

export default SuaSanPham;
