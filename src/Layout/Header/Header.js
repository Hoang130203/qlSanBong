import { Avatar, Button, Divider, Grid, TextField, Tooltip, Typography, styled } from '@mui/material';
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
import { Fragment, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuSp from './MenuSp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ClassApi2 from '../../api/API2'
const cx = classNames.bind(styles)

function Header() {
    const user = localStorage.getItem('namesb')
    const [avt, setAvt] = useState()
    useEffect(() => {
        ClassApi2.GetInfo().then((response) => {
            setAvt(response.data.avt)
        })
    }, [])
    const listHeader = [{ xs: 2, icon: <PhoneIcon sx={{ fill: '#35c0c5;' }} />, children: <Typography color="#333" >19006750</Typography>, component: Fragment },
    {
        xs: 3, icon: <SearchIcon fontSize='medium' sx={{ '&:hover': { color: '#333 !important' }, cursor: 'pointer', color: '#35c0c5;' }} />, children: <TextField sx={{
            "& fieldset": { border: 'none' },
        }} placeholder='Tìm kiếm...' />
    },
    { xs: 2.5, to: '/account/dang-nhap', icon: <PersonIcon fontSize='medium' />, cursor: 'pointer', children: <Typography variant='h6' fontWeight={400} fontSize={18}>Đăng nhập</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
    { xs: 2.0, to: '/account/dang-ky', icon: <LockPersonIcon fontSize='medium' />, cursor: 'pointer', children: <Typography variant='h6' fontWeight={400} fontSize={18}>Đăng ký</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
    { xs: 2.4, to: '/cart', icon: <ShoppingCartIcon />, children: <Typography variant='h6' fontWeight={400}>Giỏ hàng</Typography>, hovercolor: "c", cursor: 'pointer', background: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;", hoverBackground: "#fff" },
    ]
    const listHeader2 = [
        { xs: 4, to: '/account/dang-nhap', icon: <PersonIcon fontSize='small' />, cursor: 'pointer', children: <Typography variant='h9' fontWeight={400} fontSize={18}>Đăng nhập</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
        { xs: 3, to: '/account/dang-ky', icon: <LockPersonIcon fontSize='small' />, cursor: 'pointer', children: <Typography variant='h9' fontWeight={400} fontSize={18}>Đăng ký</Typography>, hoverBackground: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;" },
        { xs: 3.5, to: '/cart', icon: <ShoppingCartIcon fontSize='small' />, children: <Typography variant='h9' fontWeight={400}>Giỏ hàng</Typography>, hovercolor: "c", cursor: 'pointer', background: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;", hoverBackground: "#fff" },
    ]
    const listHeader3 = [
        {
            xs: 5, icon: <SearchIcon fontSize='medium' sx={{ '&:hover': { color: '#333 !important' }, cursor: 'pointer', color: '#35c0c5;' }} />, children: <TextField sx={{
                "& fieldset": { border: 'none' },
            }} placeholder='Tìm kiếm...' />
        },
        { xs: 3, to: '/cart', icon: <ShoppingCartIcon className={cx('iconMenu')} />, children: <Typography className={cx('textMenu')} variant='h6' fontWeight={400}>Giỏ hàng</Typography>, hovercolor: "c", cursor: 'pointer', background: "url(//bizweb.dktcdn.net/100/091/133/themes/880367/assets/bg-cart.png?1665385034327) #35c0c5;", hoverBackground: "#fff" },
        {
            xs: 3, to: '/account/thong-tin', icon: avt ? <Avatar sx={{ bgcolor: 'transparent' }} aria-label="recipe">
                <img style={{ maxHeight: '42px' }} src={avt} />
            </Avatar> : <AccountCircleIcon fontSize='large' className={cx('iconMenu')} />, children: <Typography className={cx('textMenu')} variant='h6' fontWeight={400} fontSize={18}>{user}</Typography>, hoverBackground: "url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg) #35c0c5;"
        }
    ]
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
                    <NavLink to='/'>
                        <img src='https://divuitravel.com/wp-content/uploads/2023/05/chon-loc-25-logo-bong-da-an-tuong-va-dep-mat_28.jpg' className={cx('logo')} />
                    </NavLink>
                </Grid>
                {user != null && user.length > 0 ? (
                    <Grid item container xs={9.5} md={9} justifyContent="flex-end" display="flex" >
                        <Grid item container xs={12} md={8} justifyContent="flex-end">
                            {listHeader3.map((item, index) => {
                                const Component = item.component || Fragment;
                                return (
                                    <Fragment key={index} >
                                        <Component>
                                            <Grid style={{ cursor: 'pointer' }} onClick={() => { if (item.to) { navigate(item.to) } }} item container wrap='nowrap' maxHeight="70px" xs={item.xs} display="flex" flexDirection="row" justifyContent="center" alignItems="center"
                                                sx={{
                                                    cursor: item.cursor, background: item.background, '&:hover': {
                                                        background: item.hoverBackground, // Change this to the desired hover color
                                                        color: item.hovercolor ? '#35c0c5' : "white !important"
                                                    },
                                                }} >
                                                <Grid item display="flex" justifyItems="flex-end">{item.icon}</Grid>
                                                <Grid item xs={8.5} display="flex" justifyContent="center">{item.children}</Grid>

                                            </Grid>
                                            <Divider orientation='vertical' style={{ height: '70px' }} />
                                        </Component>
                                    </Fragment>
                                )

                            })}
                        </Grid>
                    </Grid>
                ) : (
                    <Grid item container xs={9.5} md={9} justifyContent="center" display="flex" >
                        <Grid item container sm={12} md={10} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            <Divider orientation='vertical' style={{ height: '70px' }} />
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
                                            <Divider orientation='vertical' style={{ height: '70px' }} />
                                        </Component>
                                    </Fragment>
                                )

                            })}
                        </Grid>
                        <Grid item container xs={12} overflow='hidden' sx={{ display: { sm: 'none' } }} justifyContent='flex-end'>
                            <Divider orientation='vertical' style={{ height: '70px' }} />
                            {listHeader2.map((item, index) => {
                                const Component = item.component || Fragment;
                                return (
                                    <Fragment key={index} >
                                        <Component>
                                            <Grid onClick={() => { if (item.to) { navigate(item.to) } }} item container wrap='nowrap' maxHeight="70px" xs={item.xs} display="flex" flexDirection="row" justifyContent="center" alignItems="center"
                                                sx={{
                                                    cursor: item.cursor, background: item.background, '&:hover': {
                                                        background: item.hoverBackground,
                                                        color: item.hovercolor ? '#35c0c5' : "white !important"
                                                    },
                                                }} >
                                                <Grid item display="flex" justifyItems="flex-end">{item.icon}</Grid>
                                                <Grid item xs={8.5} display="flex" justifyContent="center">{item.children}</Grid>
                                            </Grid>
                                            <Divider orientation='vertical' style={{ height: '70px' }} />
                                        </Component>
                                    </Fragment>
                                )

                            })}
                        </Grid>
                    </Grid>
                )}

            </Grid>
            <div className={cx('menu')}>
                <Grid container height='40px'>
                    <Grid item xs={3} sm={0.00001} overflow='hidden'>
                        <Button style={{ height: '40px' }}><MenuIcon style={{ color: 'white' }} /></Button>
                    </Grid>
                    <Grid item container xs={0.0001} sm={10} md={8} lg={7} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row', justifyContent: 'center' }} overflow='hidden' >
                        <NavLink to='/'>
                            <CustomizedButton style={{ '&.hover': { color: '#333' } }}>Trang chủ</CustomizedButton>
                        </NavLink>
                        <NavLink to='/dat-san'>
                            <CustomizedButton style={{ paddingRight: '5px' }}>Đặt sân<SportsSoccerIcon style={{ paddingLeft: '5px' }} /></CustomizedButton>
                        </NavLink>
                        <Tippy interactive
                            offset={[0, -9]}
                            render={(attrs) => (
                                <div style={{ width: '122px', backgroundColor: '#000000CC', }}  {...attrs}>
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