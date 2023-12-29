import React, { useRef, useState } from 'react';
import './Menu.css'; // Import CSS để tùy chỉnh giao diện của menu
import { NavLink } from 'react-router-dom';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Menu = () => {
    const menuRef = useRef(null);

    const handleScroll = (event) => {
        const menuContainer = menuRef.current;

        if (menuContainer && menuContainer.contains(event.target)) {
            event.preventDefault();
            return false;
        }
    };

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('scroll', handleScroll);
    };

    const enableScroll = () => {
        document.body.style.overflow = '';
        document.removeEventListener('scroll', handleScroll);
    };

    const [isDragging, setIsDragging] = useState(false);
    const [startRotation, setStartRotation] = useState(0);

    const handleTouchStart = (event) => {
        disableScroll()
        setIsDragging(true);
        setStartRotation(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {

        if (isDragging) {
            const currentRotation = event.touches[0].clientX;
            const rotationChange = currentRotation - startRotation;
            const newRotation = rotationChange * 0.5; // Điều chỉnh tốc độ xoay tại đây

            const menu = document.getElementById('menu');
            menu.style.transform = `rotate(${newRotation}deg)`;
        }
    };

    const handleTouchEnd = () => {
        enableScroll()
        setIsDragging(false);
    };

    return (
        <div
            className="menu-container"
            ref={menuRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={enableScroll}
        >
            <div id="menu" className="menu">
                <NavLink to='/admin/thong-ke' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <DashboardIcon color='primary' />
                </NavLink>
                <NavLink to='/admin/san-pham' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <CheckroomIcon color='inherit' />
                </NavLink>
                <NavLink to='/admin/san-bong' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <SportsSoccerIcon color='action' />
                </NavLink>
                <NavLink to='/admin/don-dat-hang' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <EventNoteIcon color='info' />
                </NavLink>
                <NavLink to='/admin/thong-bao' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <CircleNotificationsIcon color='warning' />
                </NavLink>
                <NavLink to='/admin/quang-cao' className="menu-item" style={{ padding: '0px', margin: '0px', textDecoration: 'none' }}>
                    <AutoAwesomeMotionIcon color='secondary' />
                </NavLink>
            </div>
        </div>
    );
};

export default Menu;
