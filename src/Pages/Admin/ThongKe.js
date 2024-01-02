import { Box, Button, Grid, MenuItem, Select, Tab, Tabs, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import ColumnChart from "./Component/ColumnChart";
import RowChart from "./Component/RowChart";
import LineChart from "./Component/LineChart";
import PieChart from "./Component/PieChart";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ClassApi from '../../api/API'
import { toast } from "react-toastify";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { font } from "../../Service/font";
import MenuMobile from "./MenuMobile/MenuMobile";
import BangXepHang from "./Component/BangXepHang";
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
                <Box paddingTop='20px'>
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
function Thongke() {
    const [value, setValue] = useState(0);

    const [time, setTime] = useState('7d')
    const [type, setType] = useState('c')
    const [Days, setDays] = useState([])
    const [Totals, setTotals] = useState([])
    const [Totals2, setTotals2] = useState([])
    const [listType, setListType] = useState([])
    const [totalGiay, setTotalGiay] = useState(0)
    const [totalQuanAo, setTotalQuanAo] = useState(0)
    const [totalBong, setTotalBong] = useState(0)
    const [totalDungCu, setTotalDungCu] = useState(0)
    const [totalPhuKien, setTotalPhuKien] = useState(0)
    const [totalSanbong, setTotalSanbong] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function tinhTongForEach(arr) {
        let tong = 0;
        arr.forEach((value) => {
            tong += value;
        });
        return tong;
    }
    const get7d = () => {
        ClassApi.GetDash1W().then((res) => {
            var days = [];
            var dayOfWeeks = [];
            var totals1 = [];
            var totals2 = []
            var totalG = []
            var totalDC = []
            var totalQA = []
            var totalB = []
            var totalPK = []

            res.data.forEach(function (item) {
                days.push(item.day);
                dayOfWeeks.push(item.dayOfWeek);
                totals1.push(item.totalProduct);
                totals2.push(item.totalField)
                totalB.push(item.totalBong)
                totalG.push(item.totalGiay)
                totalQA.push(item.totalQuanAo)
                totalDC.push(item.totalDungCu)
                totalPK.push(item.totalPhuKien)
            });
            setDays(days)
            setTotals(totals1)
            setTotals2(totals2)
            setTotalBong(tinhTongForEach(totalB))
            setTotalQuanAo(tinhTongForEach(totalQA))
            setTotalDungCu(tinhTongForEach(totalDC))
            setTotalGiay(tinhTongForEach(totalG))
            setTotalPhuKien(tinhTongForEach(totalPK))
            setTotalSanbong(tinhTongForEach(totals2))
            console.log(days)
            //  console.log(totals)
        })
    }
    const get1month = () => {
        ClassApi.GetDash1M().then((res) => {
            var days = [];
            var dayOfWeeks = [];
            var totals1 = [];
            var totals2 = []
            var totalG = []
            var totalDC = []
            var totalQA = []
            var totalB = []
            var totalPK = []

            res.data.forEach(function (item) {
                days.push(item.day);
                dayOfWeeks.push(item.dayOfWeek);
                totals1.push(item.totalProduct);
                totals2.push(item.totalField)
                totalB.push(item.totalBong)
                totalG.push(item.totalGiay)
                totalQA.push(item.totalQuanAo)
                totalDC.push(item.totalDungCu)
                totalPK.push(item.totalPhuKien)
            });
            setDays(days)
            setTotals(totals1)
            setTotals2(totals2)
            setTotalBong(tinhTongForEach(totalB))
            setTotalQuanAo(tinhTongForEach(totalQA))
            setTotalDungCu(tinhTongForEach(totalDC))
            setTotalGiay(tinhTongForEach(totalG))
            setTotalPhuKien(tinhTongForEach(totalPK))
            setTotalSanbong(tinhTongForEach(totals2))
            console.log(days)
        })

    }
    const get1year = (year) => {
        const currentDate = new Date()
        ClassApi.GetDash1Y(year ? year : currentDate.getFullYear()).then((res) => {
            var days = [];
            var dayOfWeeks = [];
            var totals1 = [];
            var totals2 = []
            var totalG = []
            var totalDC = []
            var totalQA = []
            var totalB = []
            var totalPK = []
            res.data.forEach(function (item) {
                days.push(item.month);
                //      dayOfWeeks.push(item.dayOfWeek);
                totals1.push(item.totalProduct);
                totals2.push(item.totalField)
                totalB.push(item.totalBong)
                totalG.push(item.totalGiay)
                totalQA.push(item.totalQuanAo)
                totalDC.push(item.totalDungCu)
                totalPK.push(item.totalPhuKien)
            });
            setDays(days)
            setTotals(totals1)
            setTotals2(totals2)
            setTotalBong(tinhTongForEach(totalB))
            setTotalQuanAo(tinhTongForEach(totalQA))
            setTotalDungCu(tinhTongForEach(totalDC))
            setTotalGiay(tinhTongForEach(totalG))
            setTotalPhuKien(tinhTongForEach(totalPK))
            setTotalSanbong(tinhTongForEach(totals2))
            console.log(days)
        })
    }
    const changeTime = (e) => {
        setTime(e.target.value)
        if (e.target.value == '7d') {
            get7d()
        } else if (e.target.value == '1m') {
            get1month()
        } else if (e.target.value == '1y') {
            get1year()
        } else {
            const currentDate = new Date()
            get1year(currentDate.getFullYear() - 1)
        }
    }
    useEffect(() => {
        const fetchIpAddress = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json')
                console.log(response.data.ip)
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIpAddress();
    }, [])
    useEffect(() => {
        get7d()
    }, [])
    useEffect(() => {

    }, [time])
    const handleExportToPdf = () => {
        const pdf = new jsPDF();
        const canvasElement = document.querySelector('canvas');
        const headerElement = document.querySelector('.MuiTypography-h4')

        if (headerElement) {
            console.log(headerElement)
            try {
                pdf.addFileToVFS("WorkSans-normal.ttf", font);
                pdf.addFont("WorkSans-normal.ttf", "WorkSans", "normal");
                pdf.setFont("WorkSans");
                pdf.setTextColor("red");
                pdf.text(20, 10, 'Project 1 Shop')
                pdf.setTextColor("#1976d2");
                const headerData = headerElement.innerHTML;
                pdf.text(60, 20, headerData + (time == '7d' ? ' tuần qua' : time == '1m' ? ' tháng qua' : time == '1y' ? ' năm nay' : ' năm trước'));
            } catch (error) {
                console.error('Lỗi khi chụp header:', error);
            }
        }

        html2canvas(canvasElement ? canvasElement : '').then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            const imgWidth = 208;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);
            pdf.save('chart' + Math.floor(Math.random() * 1000) + '.pdf');
        });
    };
    return (
        <Grid container sx={{ padding: { sm: '30px 30px', xs: '30px 5px' } }} alignContent='flex-start' rowSpacing={4}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Doanh số" {...a11yProps(0)} style={{ borderBottom: '1px solid #ccc' }} />
                <Tab label="Người dùng" {...a11yProps(1)} style={{ borderBottom: '1px solid #ccc' }} />
            </Tabs>
            <CustomTabPanel value={value} index={0} >
                <Grid item xs={12} >
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Thống kê doanh số</Typography>
                </Grid>
                <Grid item container xs={12}>
                    <Grid container item xs={12} md={4} alignItems='center' >
                        <Typography paddingRight='30px'>Thời gian</Typography>
                        <Select value={time} onChange={(e) => { changeTime(e) }} style={{ width: '150px' }}>
                            <MenuItem value='7d'>Tuần qua</MenuItem>
                            <MenuItem value='1m'>Tháng qua</MenuItem>
                            <MenuItem value='1y'>Năm nay</MenuItem>
                            <MenuItem value='1yago'>Năm trước</MenuItem>
                        </Select>
                    </Grid>
                    <Grid container item xs={12} md={5} alignItems='center' >
                        <Typography paddingRight='30px'>Loại biểu đồ</Typography>
                        <Select value={type} onChange={(e) => { setType(e.target.value) }} style={{ width: '180px' }}>
                            <MenuItem value='c'>Biểu đồ Cột</MenuItem>
                            <MenuItem value='r'>Biểu đồ Hàng</MenuItem>
                            <MenuItem value='cir'>Biểu đồ Tròn</MenuItem>
                            <MenuItem value='l'>Biểu đồ Đường</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid item container xs={11} paddingTop='30px'>
                    <Button startIcon={<ExitToAppIcon />} onClick={handleExportToPdf} variant='contained'>Export</Button>
                </Grid>
                <Grid item containar xs={11}>
                    {type == 'r' ? <RowChart data1={Totals} data2={Totals2} label={Days} /> :
                        type == 'c' ? <ColumnChart data1={Totals} data2={Totals2} label={Days} /> :
                            type == 'l' ? <LineChart data1={Totals} data2={Totals2} label={Days} /> :
                                <PieChart data1={[totalGiay, totalQuanAo, totalDungCu, totalBong, totalPhuKien, totalSanbong]} />}

                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} >
                <Grid item xs={12} >
                    <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Bảng xếp hạng</Typography>
                </Grid>
                <Grid item xs={12}>
                    <BangXepHang />
                </Grid>
            </CustomTabPanel>
        </Grid>

    );
}

export default Thongke;