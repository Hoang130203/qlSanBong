import classNames from 'classnames/bind';
import Sidebar from './Sidebar';
import styles from './SidebarLayout.module.scss';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);
function SidebarLayout({ children }) {
    const admin = localStorage.getItem('admin')
    return (

        <Grid container className={cx('wrapper')}>
            <Grid item container className={cx('container')} >
                <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Sidebar className={cx('sidebar')} />
                </Grid>
                <Grid item>
                    {admin.length > 0 ? <div className={cx('content')}>{children}</div> : ''}
                </Grid>
            </Grid>
        </Grid>

    );
}

export default SidebarLayout;