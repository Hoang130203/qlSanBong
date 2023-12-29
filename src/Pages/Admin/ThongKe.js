import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
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

function Thongke() {

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
    const get1year = () => {
        ClassApi.GetDash1Y(2023).then((res) => {
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
        } else {
            get1year()
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
                pdf.setTextColor("#1976d2");
                const headerData = headerElement.innerHTML;
                pdf.text(80, 20, headerData);
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
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>

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

        </Grid>
    );
}

export default Thongke;