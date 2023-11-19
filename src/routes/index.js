import DatSan from '../Pages/DatSan/DatSan'
import LienHe from '../Pages/LienHe/LienHe'
import SanPham from '../Pages/SanPham/SanPham'
import TinTuc from '../Pages/TinTuc/Tintuc'
import TrangChu from '../Pages/TrangChu/TrangChu'
import DangNhap from '../Pages/TaiKhoan/DangNhap'
import DangKy from '../Pages/TaiKhoan/DangKy'
import GioHang from '../Pages/GioHang/GioHang'
const publicRoutes = [
    { path: '/dat-san', component: DatSan },
    { path: '/lien-he', component: LienHe },
    { path: '/san-pham', component: SanPham },
    { path: '/tin-tuc', component: TinTuc },
    { path: '/', component: TrangChu },
    { path: '/account/dang-nhap', component: DangNhap },
    { path: '/account/dang-ky', component: DangKy },
    { path: '/cart', component: GioHang }
]

export { publicRoutes };