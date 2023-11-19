import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Grid } from '@mui/material';
const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}><Header />
            </div>

            <Grid container className={cx('children')}>{children}</Grid>
            <Footer />

        </div>
    );
}

export default DefaultLayout;