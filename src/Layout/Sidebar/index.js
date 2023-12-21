import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import EventNoteIcon from '@mui/icons-material/EventNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { Button as Button2, Typography } from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const SidebarMenu = [
    {
        icon: <DashboardIcon />,
        title: 'Thống kê',
        activeIcon: <DashboardIcon color='primary' />,
        to: '/admin/thong-ke',
    },
    {
        icon: <CheckroomIcon />,
        activeIcon: <CheckroomIcon color='primary' />,
        title: 'Sản phẩm',
        to: '/admin/san-pham',
    },
    {
        icon: <SportsSoccerIcon />,
        activeIcon: <SportsSoccerIcon color='primary' />,
        title: 'Sân bóng ',
        to: '/admin/san-bong',
    },
    {
        icon: <EventNoteIcon />,
        activeIcon: <EventNoteIcon color='primary' />,
        title: 'Đơn đặt hàng',
        to: '/admin/don-dat-hang',
    },
    {
        icon: <CircleNotificationsIcon />,
        activeIcon: <CircleNotificationsIcon color='primary' />,
        title: 'Thông báo',
        to: '/admin/thong-bao',
    },
    {
        icon: <AutoAwesomeMotionIcon />,
        activeIcon: <AutoAwesomeMotionIcon color='primary' />,
        title: 'Quảng cáo',
        to: '/admin/quang-cao',
    },

];

function onClicks() { }

function Sidebar() {
    const [user, setUser] = useState(localStorage.getItem('admin'))
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.setItem('admin', '')
        setUser('')
        navigate("/")
    };
    const handleLogin = () => {
        navigate("/")
    };

    return (

        <aside className={cx('wrapperparent')}>

            <div className={cx('wrapper')}>
                <div className={cx('menu')}>
                    <Menu>
                        {SidebarMenu.map((data, index) => {
                            return (
                                <div key={index}>
                                    <MenuItem
                                        title={data.title}
                                        to={data.to}
                                        icon={data.icon}
                                        activeIcon={data.activeIcon}
                                    ></MenuItem>
                                </div>
                            );
                        })}
                    </Menu>
                </div>
                <div className={cx('hr')} />
                {user.length > 1 ? (
                    <Button2
                        variant="outlined"
                        sx={{
                            width: '208px',
                            height: '48px',
                            margin: '20px 0px',

                        }}
                        color='primary'
                        onClick={handleLogOut}
                    >
                        <Typography fontSize={18} fontWeight={700} color="#1976d2" textTransform="none">
                            Đăng xuất
                        </Typography>
                    </Button2>
                ) : (
                    <div style={{ fontSize: '15px', color: '#16182380', textAlign: 'center', paddingTop: '15px' }}>
                        <p>Đăng nhập với tư cách </p>
                        <p>admin để thao tác </p>
                        <Button2
                            variant="outlined"
                            sx={{
                                width: '208px',
                                height: '48px',
                                margin: '20px 0px',

                            }}
                            color='primary'
                            onClick={handleLogin}
                        >
                            <Typography fontSize={18} fontWeight={700} color="#1976d2" textTransform="none">
                                Đăng nhập
                            </Typography>
                        </Button2>
                    </div>
                )}

                <div className={cx('hr')} />

            </div>
        </aside>
    );
}

export default Sidebar;
