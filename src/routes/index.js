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
import ChiTietSanPham from '../Pages/SanPham/ChiTietSanPham'
import ChiTietSan from '../Pages/DatSan/ChiTietSan'
import FormDatSan from '../Pages/DatSan/FormDatSan'
import DatHang from '../Pages/GioHang/DatHang'
import ThongTin from '../Pages/TaiKhoan/ThongTin'
import DonMua from '../Pages/TaiKhoan/DonMua'
import SuaSanBong from '../Pages/Admin/SuaSanBong'
import SuaSanPham from '../Pages/Admin/SuaSanPham'
import SuaQuangCao from '../Pages/Admin/SuaQuangCao'
import SanPhamOfType from '../Pages/SanPham/SanPhamOfType'
import DonDatSan from '../Pages/TaiKhoan/DonDatSan'
const publicRoutes = [
    { path: '/dat-san', component: DatSan },
    { path: '/dat-san/chi-tiet-san/:id', component: ChiTietSan },
    { path: '/dat-san/dat-san/:id', component: FormDatSan },
    { path: '/lien-he', component: LienHe },
    { path: '/san-pham', component: SanPham },
    { path: '/san-pham/loai-sp/:type', component: SanPhamOfType },
    { path: '/tin-tuc', component: TinTuc },
    { path: '/', component: TrangChu },
    { path: '/account/dang-nhap', component: DangNhap },
    { path: '/account/dang-ky', component: DangKy },
    { path: 'account/thong-tin', component: ThongTin },
    { path: 'account/don-mua', component: DonMua },
    { path: 'account/don-dat-san', component: DonDatSan },
    { path: '/cart', component: GioHang },
    { path: '/cart/dat-hang', component: DatHang },
    { path: '/san-pham/chitietsanpham/:id', component: ChiTietSanPham },
    { path: '/admin/thong-ke', component: ThongKe, layout: SidebarLayout },
    { path: '/admin/san-pham', component: SanPham2, layout: SidebarLayout },
    { path: '/admin/sua-san-pham/:id', component: SuaSanPham, layout: SidebarLayout },
    { path: '/admin/san-bong', component: SanBong2, layout: SidebarLayout },
    { path: '/admin/sua-san-bong/:id', component: SuaSanBong, layout: SidebarLayout },
    { path: '/admin/thong-bao', component: ThongBao, layout: SidebarLayout },
    { path: '/admin/quang-cao', component: QuangCao, layout: SidebarLayout },
    { path: '/admin/quang-cao/sua-quang-cao/:id', component: SuaQuangCao, layout: SidebarLayout },
    { path: '/admin/san-pham/them-san-pham', component: ThemSanPham, layout: SidebarLayout },
    { path: '/admin/san-bong/them-san-bong', component: ThemSanBong, layout: SidebarLayout },
    { path: '/admin/quang-cao/them-quang-cao', component: ThemQuangCao, layout: SidebarLayout },

]

export { publicRoutes };