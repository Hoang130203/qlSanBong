import { Button, Divider, Grid, TextField, Tooltip, Typography, styled } from '@mui/material';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import logo from '../../Icons/mau-logo-cau-lac-bo-bong-da-dep-02.png'
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Fragment, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuSp from './MenuSp';

const cx = classNames.bind(styles)
const listHeader = [{ xs: 2, icon: <PhoneIcon sx={{ fill: '#35c0c5;' }} />, children: <Typography color="#333" >19006750</Typography>, component: Fragment },
{
    xs: 3, icon: <SearchIcon fontSize='medium' sx={{ '&:hover': { color: '#333 !important' }, cursor: 'pointer', color: '#35c0c5;' }} />, children: <TextField sx={{
        "& fieldset": { border: 'none' },
    }} placeholder='Tìm kiếm...' />
},
{ xs: 2.2, to: '/account/dang-nhap', icon: <PersonIcon fontSize='medium' />, cursor: 'pointer', children: <Typography variant='h6' fontWeight={400} fontSize={18}>Đăng nhập</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
{ xs: 2.2, to: '/account/dang-ky', icon: <LockPersonIcon fontSize='medium' />, cursor: 'pointer', children: <Typography variant='h6' fontWeight={400} fontSize={18}>Đăng ký</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
{ xs: 2.4, to: '/cart', icon: <ShoppingCartIcon />, children: <Typography variant='h6' fontWeight={400}>Giỏ hàng</Typography>, hovercolor: "c", cursor: 'pointer', background: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;", hoverBackground: "#fff" },
]
function Header() {
    const navigate = useNavigate()
    const CustomizedButton = styled(Button)
        ({
            backgroundColor: 'transparent',
            padding: '0px 20px',
            color: '#fff',
            overflow: 'hidden',
            height: '40px',
            '&:hover': { color: '#ccc !important' }
        });
    return (
        <div className={cx('wrapper')}>
            <Grid container maxHeight={70} display='flex' flexDirection='row' justifyContent='space-between'>
                <Grid item xs={2.5} md={3} justifyContent="center" display="flex" sx={{ cursor: 'pointer' }}>
                    <img src='https://divuitravel.com/wp-content/uploads/2023/05/chon-loc-25-logo-bong-da-an-tuong-va-dep-mat_28.jpg' className={cx('logo')} />
                </Grid>
                <Grid item container xs={9.5} md={9} justifyContent="center" display="flex" >
                    <Grid item container xs={9}>
                        <Divider orientation='vertical' />
                        {listHeader.map((item, index) => {
                            const Component = item.component || Fragment;
                            return (
                                <Fragment key={index} >
                                    <Component>
                                        <Grid onClick={() => { if (item.to) { navigate(item.to) } }} item container wrap='nowrap' maxHeight="70px" xs={item.xs} display="flex" flexDirection="row" justifyContent="center" alignItems="center"
                                            sx={{
                                                cursor: item.cursor, background: item.background, '&:hover': {
                                                    background: item.hoverBackground, // Change this to the desired hover color
                                                    color: item.hovercolor ? '#35c0c5' : "white !important"
                                                },
                                            }} >
                                            <Grid item display="flex" justifyItems="flex-end">{item.icon}</Grid>
                                            <Grid item xs={8.5} display="flex" justifyContent="center">{item.children}</Grid>

                                        </Grid>
                                        <Divider orientation='vertical' />
                                    </Component>
                                </Fragment>
                            )

                        })}
                    </Grid>
                </Grid>
            </Grid>
            <div className={cx('menu')}>
                <Grid container height='40px'>

                    <Grid item container xs={10} md={8} lg={7} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} overflow='hidden' >
                        <NavLink to='/'>
                            <CustomizedButton style={{ '&.hover': { color: '#333' } }}>Trang chủ</CustomizedButton>
                        </NavLink>
                        <NavLink to='/dat-san'>
                            <CustomizedButton style={{ paddingRight: '5px' }}>Đặt sân<SportsSoccerIcon style={{ paddingLeft: '5px' }} /></CustomizedButton>
                        </NavLink>
                        <Tippy interactive

                            offset={[0, 0]}
                            maxWidth="100vw" render={(attrs) => (
                                <div style={{ width: '100vw', backgroundColor: '#000000CC', height: '236px', }}  {...attrs}>
                                    <MenuSp />
                                </div>
                            )}>
                            <NavLink to='/san-pham'>

                                <CustomizedButton style={{ paddingRight: '5px' }}>Sản phẩm <KeyboardArrowDownIcon /></CustomizedButton>
                            </NavLink>
                        </Tippy>
                        <NavLink to='/tin-tuc'>
                            <CustomizedButton>Tin tức</CustomizedButton>
                        </NavLink>
                        <NavLink to='/lien-he'>
                            <CustomizedButton>Liên hệ</CustomizedButton>
                        </NavLink>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}

export default Header;