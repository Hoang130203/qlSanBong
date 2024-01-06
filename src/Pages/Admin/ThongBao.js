import { Grid, TablePagination, Typography } from "@mui/material";
import NotificationCard from "./Component/NotificationCard";
import ClassApi from '../../api/API'
import { useEffect, useState } from "react";
let notifications = [
    { notifid: '1', orderid: '11111', time: '2023-11-22', message: 'Tài khoản abcxyz vừa đặt sân Mỹ đình kíp 3 ngày 23/11/2023', type: '1' },
    { notifid: '2', orderid: '11131', time: '2023-12-22', message: 'Tài khoản gsđc vừa hủy đơn hàng #11131', type: '2' },
    { notifid: '3', orderid: '56111', time: '2023-11-23', message: 'Tài khoản xyz vừa thanh toán hóa đơn #56111', type: '3' },
    { notifid: '4', orderid: '113311', time: '2023-11-2', message: 'Tài khoản abc vừa đánh giá sản phẩm #3133', type: '4' },
]

function ThongBao() {
    const [notifications, setNotifications] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {
        ClassApi.GetAllNotifi().then((response) => {
            setNotifications(response.data)
        })
    }, [])
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12} >
                <Typography bgcolor='#e6f3ff' textAlign='center' fontFamily='inherit' variant="h4" color='#1976d2'>Thông báo</Typography>
            </Grid>
            <Grid item container xs={12} display='flex' flexDirection='column'>
                {notifications &&
                    (rowsPerPage > 0
                        ? notifications.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        : notifications
                    ).map((item, index) => (
                        <NotificationCard key={index} content={item.message} time={item.time} id={item.notifid} orderCode={item.orderid} type={item.type} />
                    ))}
            </Grid>
            <TablePagination
                rowsPerPageOptions={[5, 8, 10, { label: "All", value: -1 }]}
                colSpan={6}
                count={notifications.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage='Số hàng mỗi trang'
                slotProps={{
                    select: {
                        "aria-label": "Số hàng mỗi trang",
                    },
                    actions: {
                        showFirstButton: true,
                        showLastButton: true,
                    },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    "& .MuiTablePagination-input": {
                        fontSize: "16px",
                    },
                    "& .MuiTablePagination-displayedRows": {
                        fontSize: "16px",
                    },
                    "& .MuiTablePagination-selectLabel": {
                        fontSize: "16px",
                    },
                }}
            />
        </Grid>
    );
}

export default ThongBao;