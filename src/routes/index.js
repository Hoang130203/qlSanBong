import DatSan from '../Pages/DatSan/DatSan'
import LienHe from '../Pages/LienHe/LienHe'
import SanPham from '../Pages/SanPham/SanPham'
import TinTuc from '../Pages/TinTuc/Tintuc'
import TrangChu from '../Pages/TrangChu/TrangChu'
import DangNhap from '../Pages/TaiKhoan/DangNhap'
import DangKy from '../Pages/TaiKhoan/DangKy'
import GioHang from '../Pages/GioHang/GioHang'
import SidebarLayout from '../Layout/SidebarLayout'
import QuangCao from '../Pages/Admin/QuangCao'
import SanBong2 from '../Pages/Admin/SanBong'
import SanPham2 from '../Pages/Admin/SanPham'
import ThongKe from '../Pages/Admin/ThongKe'
import ThongBao from '../Pages/Admin/ThongBao'
import ThemSanPham from '../Pages/Admin/ThemSanPham'
import ThemSanBong from '../Pages/Admin/ThemSanBong'
import ThemQuangCao from '../Pages/Admin/ThemQuangCao'
const publicRoutes = [
    { path: '/dat-san', component: DatSan },
    { path: '/lien-he', component: LienHe },
    { path: '/san-pham', component: SanPham },
    { path: '/tin-tuc', component: TinTuc },
    { path: '/', component: TrangChu },
    { path: '/account/dang-nhap', component: DangNhap },
    { path: '/account/dang-ky', component: DangKy },
    { path: '/cart', component: GioHang },
    { path: '/admin/thong-ke', component: ThongKe, layout: SidebarLayout },
    { path: '/admin/san-pham', component: SanPham2, layout: SidebarLayout },
    { path: '/admin/san-bong', component: SanBong2, layout: SidebarLayout },
    { path: '/admin/thong-bao', component: ThongBao, layout: SidebarLayout },
    { path: '/admin/quang-cao', component: QuangCao, layout: SidebarLayout },
    { path: '/admin/san-pham/them-san-pham', component: ThemSanPham, layout: SidebarLayout },
    { path: '/admin/san-bong/them-san-bong', component: ThemSanBong, layout: SidebarLayout },
    { path: '/admin/quang-cao/them-quang-cao', component: ThemQuangCao, layout: SidebarLayout },

]

export { publicRoutes };