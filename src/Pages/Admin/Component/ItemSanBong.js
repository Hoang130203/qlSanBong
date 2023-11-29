import { styled } from "@mui/system";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClassApi from '../../../api/API'
import { useEffect, useState } from "react";
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width: 'auto',
    },
}));

const StyledCardMedia = styled(CardMedia)({
    minWidth: '100px',
    minHeight: '100px',
    maxWidth: '150px',
    maxHeight: '150px'
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    width: '70%',
    [theme.breakpoints.down('md')]: {
        width: 'auto',
    },
}));


function ItemSanBong({ fields, setFields }) {

    const navigate = useNavigate()
    const handleDelete = async (id) => {
        try {
            ClassApi.DeleteField(id).then(() => {
                const updatedFields = fields.filter(field => field.id !== id);
                // Cập nhật lại danh sách sản phẩm hiển thị thông qua setFields
                setFields(updatedFields);
                toast.info('Xóa thành công')
            })

        } catch (error) {
            toast.error('lỗi')
        }
    }

    return (
        <Grid item container>
            {fields.map((field, index) => (
                <Grid item xs={12} maxWidth='100%' padding='20px 0px' key={field.id}>
                    <StyledCard>
                        <StyledCardActionArea>
                            <StyledCardMedia image={field.image} />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component='h2'>{field.name}</Typography>
                                <Typography variant="h6" component='p'>Giá: <span style={{ color: 'red' }}>{field.price}</span>đ</Typography>
                            </StyledCardContent>
                        </StyledCardActionArea>
                        <CardActionArea style={{ paddingLeft: '30px' }}>

                            <Typography>Địa chỉ</Typography>

                            <Typography variant="h5" component='p'><span style={{ color: 'green' }}>{field.address}</span></Typography>

                        </CardActionArea>

                        <CardActions >
                            <Grid container style={{ display: 'flex', flexDirection: 'row', paddingLeft: '20px' }}>
                                <Grid item display='flex ' flexDirection='row' alignItems="center" >
                                    <NavLink to={'/admin/sua-san-bong/' + field.id}>
                                        <IconButton > <SettingsIcon /></IconButton>
                                    </NavLink>
                                </Grid>
                                <Grid item >
                                    <IconButton onClick={() => { handleDelete(field.id) }} ><DeleteIcon style={{ color: 'red' }} /></IconButton>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </StyledCard>
                </Grid>

            ))}
        </Grid>
    );
}

export default ItemSanBong;