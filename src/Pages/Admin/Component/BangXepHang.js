import React, { Fragment, useEffect, useState } from 'react';
import ClassApi from '../../../api/API'
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ExportToExcel from '../../../Service/ExportToExcel';

const tableHead = ['Xếp hạng',
    'Tên',
    'Địa chỉ',
    'Số điện thoại',
    'Số tiền đã tiêu']
const BangXepHang = () => {
    const [bxh, setBxh] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {
        ClassApi.GetBXH().then((res) => {
            setBxh(res.data)
        })
    }, [])

    const users = [
        { id: 1, name: 'John Doe', address: '123 Main St', phone: '123-456-7890', spent: 100 },
        { id: 2, name: 'Jane Smith', address: '456 Elm St', phone: '987-654-3210', spent: 150 },
        { id: 3, name: 'Alice Johnson', address: '789 Oak St', phone: '555-555-5555', spent: 80 },
        { id: 4, name: 'Alice Johnson', address: '789 Oak St', phone: '555-555-5555', spent: 80 },

        // Thêm các người dùng khác nếu cần
    ];
    function reorderProperties(obj) {
        const reorderedObj = [
            obj.stt,
            obj.name,
            obj.address,
            obj.phone,
            obj.spent,

        ]
        return reorderedObj;
    }
    const handleExport = () => {
        const newArr = bxh.map((obj, index) => ({
            stt: index + 1,
            ...obj,
        }))
        const reorderedArray = [tableHead, ...newArr.map(obj => reorderProperties(obj))];

        ExportToExcel.export(reorderedArray, 'Xếp hạng người dùng')
    }
    return (
        <Grid item container xs={12}>
            <Grid item xs={12} container justifyContent='flex-end' paddingRight='20px'>
                <Button onClick={() => { handleExport() }} startIcon={<ExitToAppIcon />} color="success" variant="contained">Excel</Button>
            </Grid>
            <TableContainer sx={{ width: { xs: '350px', sm: '800px' }, minWidth: '100%' }} component={Paper}>
                <Table>
                    <TableHead padding='0px'>
                        <TableRow >
                            {tableHead.map((col, index) => (
                                <TableCell key={index} >
                                    <Typography
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        sx={{ fontSize: { sm: '17px', xs: '12px' } }}
                                        padding={0}
                                    >
                                        {col}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bxh &&
                            (rowsPerPage > 0
                                ? bxh.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : bxh
                            ).map(
                                (colume, index) =>
                                    colume &&
                                    colume.ownerName !== null && (
                                        <TableRow key={index}>
                                            <TableCell >
                                                <Typography
                                                    variant="h5"
                                                    padding={0}
                                                    sx={{ fontSize: { sm: '17px', xs: '12px' } }}
                                                >
                                                    {page * rowsPerPage + index + 1}
                                                </Typography>
                                            </TableCell>
                                            <TableCell sx={{ fontSize: { sm: '17px', xs: '12px' } }} >{colume.name}</TableCell>
                                            <TableCell sx={{ fontSize: { sm: '17px', xs: '12px' } }}>{colume.address}</TableCell>
                                            <TableCell sx={{ fontSize: { sm: '17px', xs: '12px' } }}>{colume.phone}</TableCell>
                                            <TableCell sx={{ fontSize: { sm: '17px', xs: '12px' } }}>{colume.spent.toLocaleString() + ' đ'}</TableCell>

                                        </TableRow>
                                    ))}
                    </TableBody>
                    <tfoot>
                        <tr>
                            <TablePagination
                                rowsPerPageOptions={[5, 8, 10, { label: "All", value: -1 }]}
                                colSpan={6}
                                count={bxh.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                labelRowsPerPage='Số hàng mỗi trang'

                                slotProps={{
                                    select: {
                                        "aria-label": "rows per page",
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
                        </tr>
                    </tfoot>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default BangXepHang;
