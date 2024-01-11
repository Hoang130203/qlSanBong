import { ThemeProvider } from "@emotion/react";
import { Button, CircularProgress, Grid, MenuItem, Select, TextField, TextareaAutosize, Typography, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ClassApi from "../../api/API";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { font } from '../../Service/font'
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
function SuaSanBong() {
    const [isUploading, setIsUploading] = useState(false);
    const id = useParams().id
    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)
    const [address, setAddress] = useState('')
    const [decription, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [rate, setRate] = useState()
    const [type, setType] = useState('')
    const [demoUrl, setDemoUrl] = useState('')
    const [isChangImg, setIsChangeImg] = useState(false)
    const onChange = (e) => {
        setType(e.target.value)
    }
    useEffect(() => {
        try {
            ClassApi.GetField(id).then((response) => {
                console.log(id)
                let data = response.data
                setName(data.name)
                setCost(data.price)
                setAddress(data.address)
                setRate(data.rate)
                setType(data.type)
                setDescription(data.decription)
                setDemoUrl(data.linkimg)

            })
        } catch {
            toast.error('error')
        }

    }, [])
    const handleAdd = async () => {
        if (decription.length > 500) {
            toast.warn('Mô tả không quá 500 ký tự!')
            return;
        }
        try {
            setCost(parseInt(cost))
            if (name.length == 0 || address.length == 0 || type.length == 0) {
                toast.warning('điền đủ thông tin')
                return
            }
            if (isChangImg) {
                setIsUploading(true);
                const sendimage = await ClassApi.PostImage(image)
                setDemoUrl(sendimage.data.url)
                setIsUploading(false);
            }


            await ClassApi.PutField({ fieldid: id, price: cost, linkimg: demoUrl, address: address, rate: rate, decription: decription, type: type, name: name })
            await toast.success('sửa thành công')
        }
        catch {
            toast.error('lỗi')
        }

    }

    const onChangeImg = (e) => {

        setIsChangeImg(true)
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
        doc.text('Thông tin sân bóng', 80, line, 'center');
        line += 15
        // Tải hình ảnh từ URL
        const img = new Image();
        img.src = imageUrl;

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
            doc.text('Mã sân bóng :   ' + id, 35, line);
            line += 12
            doc.text('Tên sân bóng :   ' + name, 35, line);
            line += 12
            doc.text('Giá tiền/kíp:     ' + cost.toLocaleString() + ' đ', 35, line);
            line += 12
            doc.text('Địa chỉ:         ' + address, 35, line)
            line += 12
            const typ = (type == 1 ? '7 người' : type == 2 ? '11 người' : 'fusal')
            doc.text('Loại sân:       ' + typ, 35, line)
            line += 12
            doc.text('Mô tả:  ', 35, line)

            const maxWidth = 100; // Chiều rộng tối đa cho mỗi dòng

            let textLines = doc.splitTextToSize(decription, maxWidth); // Chia mô tả thành các dòng với độ dài tối đa

            textLines.forEach((lines) => {
                doc.text('' + lines, 70, line);
                line += 12; // Tăng y để xuống dòng cho dòng tiếp theo
            });
            // Lưu file PDF
            doc.save('thogtinsan_' + id + '.pdf');
        };

    };
    return (
        <Grid item container spacing={1} xs={12} width='100%' sx={{ maxWidth: { xs: '400px', sm: '100%' }, padding: { sm: " 30px 50px", xs: '30px 40px' } }}>
            {isUploading && <CircularProgress style={{ position: 'fixed', right: '20px', top: '20px' }} />}
            <ThemeProvider theme={theme}>
                <Grid item xs={12} padding='0px 0px 20px 0px'>
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2' fontSize='35px'>
                        Sửa thông tin sân
                    </Typography>
                </Grid>
                <Grid item container xs={12} rowSpacing={1} >
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Tên sân bóng
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px', maxWidth: '100%' }} value={name} onChange={(e) => { setName(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Giá tiền/ kíp
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField value={cost} onChange={(e) => { setCost(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography >
                                Địa chỉ
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField style={{ width: '430px', maxWidth: '100%' }} value={address} onChange={(e) => { setAddress(e.target.value) }}></TextField>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography >
                                Loại sân
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Select style={{ width: '120px', height: '45px' }} value={type} onChange={onChange}>
                                <MenuItem value='1'>7 người</MenuItem>
                                <MenuItem value='2'>11 người</MenuItem>
                                <MenuItem value='3'>Fusal</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center'>
                        <Grid item xs={12} md={2}>
                            <Typography>
                                Mô tả
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextareaAutosize value={decription} onChange={(e) => { setDescription(e.target.value) }} style={{ width: '430px', maxWidth: '100%', height: '70px', fontSize: '20px', fontFamily: 'inherit', padding: '5px' }} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item xs={12} md={4} paddingTop='20px'>
                            <Typography>
                                Hình ảnh
                            </Typography>
                            <input type="file" accept="image/png, image/gif, image/jpeg" onChange={onChangeImg}></input>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ maxWidth: { xs: '400px', sm: '100%' } }}>
                            <img style={{ maxWidth: '100%', maxHeight: '300px' }} src={demoUrl} alt="preview"></img>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container xs={12} sx={{ flexDirection: { xs: 'column', sm: 'row' } }} rowSpacing={2}>
                    <Grid item>
                        <Button onClick={handleAdd} disabled={isUploading} variant="contained" startIcon={<UpgradeIcon />} style={{ marginRight: '20px' }}><Typography textTransform='none'>Cập nhật</Typography></Button>
                    </Grid>
                    <Grid item>
                        <Button color="error" onClick={handleExport} startIcon={<ExitToAppIcon />} variant="contained"><Typography textTransform='none'>Export</Typography></Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Grid>
    );
}

export default SuaSanBong;