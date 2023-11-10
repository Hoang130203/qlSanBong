import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from './Header/Header';
const cx = classNames.bind(styles)
function DefauLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('children')}>{children}</div>
        </div>
    );
}

export default DefauLayout;