import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn thanh trượt lên đầu trang mỗi khi đường dẫn thay đổi
    }, [pathname]);

    return null;
}

export default ScrollToTop;
