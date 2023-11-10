import styles from './Header.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}></div>
            <div className={cx('menu')}></div>
        </div>
    );
}

export default Header;