import { Button, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";
import ItemSanPham from "./Component/ItemSanPham";
let productPK = [

    { image: 'https://contents.mediadecathlon.com/p1767620/ea8a01938401fb0440fe43f30c23a372/p1767620.jpg?f=1000x1000&format=auto', name: 'Kính bơi Xbase 100 cỡ L cho người lớn - Xanh biển', price: '125.000', decription: 'Kính bơi dành cho những người mới bắt đầu học bơi hoặc muốn tập bơi trở lại. Mẫu kính bơi phù hợp với tất cả các khuôn mặt với phần sống mũi có thể điều chỉnh được đã được cấp bằng sáng chế và điều chỉnh dây đeo đơn giản để đảm bảo độ kín nước.', quantity: '10' }
]
let productB = [
    {
        price: '285.000', image: 'https://www.sport9.vn/images/thumbs/000/0005656_bong-da-ucv-305-so-5.jpeg?preset=large&watermark=default',
        name: 'BÓNG ĐÁ UCV 3.05 SỐ 5', quantity: '15',
        decription: '• Bóng sử dụng cho thi đấu và tập luyện các giải phong trào •   Chất liệu da PU-PVC bền, chống thấm nước •  Phụ kiện đi kèm: lưới đựng bóng, kim bơm bóng'
    },
    {
        price: '1.285.000', image: 'https://s.meta.com.vn/Data/image/2021/07/09/bong-chuyen-mikasa-v200w-1.jpg',
        name: 'Bóng chuyền Mikasa V200W', quantity: '12',
        decription: 'Bóng chuyền Mikasa V200W là loại bóng được lựa chọn thi đấu chính thức bởi Liên đoàn bóng chuyền Quốc tế (FIVB) vào năm 2019. Bóng được thiết kế và sản xuất theo tiêu chuẩn thi đấu chuyên nghiệp bởi thương hiệu nổi tiếng toàn cầu - Mikasa. '
    }
]
let productG = [

    { image: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2-382751d6-ebd4-477c-83d5-5045a3a23999.jpg?v=1466415099313', name: 'Giày tây nâu đỏ thương hiệu Converse All Star', price: '500.000', quantity: '3' },
    { image: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/zal1.jpg?v=1466482812400', name: 'Giày Converse Star Collar Break', price: '450.000', quantity: '10' },
    { image: 'https://bizweb.dktcdn.net/thumb/large/100/091/133/products/2521102040-2-3-1.jpg?v=1466482446723', name: 'Giày Converse Star Camo Rubber', price: '600.000', quantity: '8' },



]
let productQA = [
    {
        price: '150.000', image: 'https://likefit.vn/wp-content/uploads/2023/10/bs1-600x600.jpg',
        name: 'Áo Dài Tay Giữ Nhiệt BS', quantity: '25',
        decription: 'Mô tả sản phẩm:   Form: Form ôm fit sát body     Chất liệu: Vải poly trơn, co dãn 4 chiều, giữ nhiệt tốt      Màu sắc: Đen, trắng'
    },
    {
        price: '255.000', image: 'https://www.sport9.vn/images/thumbs/001/0016515_bo-quan-ao-bong-da-khanh-hoa-2021-kmsh210510-mau-do.jpeg?preset=large&watermark=default',
        name: 'BỘ QUẦN ÁO BÓNG ĐÁ KHÁNH HÒA 2021 KMSH210510 - MÀU ĐỎ', quantity: '32',
        decription: 'Kamito liên tục bổ sung những mẫu áo thi đấu với thiết kế mới ấn tượng để phục vụ đông đảo các đội bóng trên Toàn quốc. Mùa hè 2021, Kamito ra mắt mẫu quần áo bóng đá họa tiết hoàn toàn mới với những đặc điểm vô cùng nổi bật'
    }
]
let productD = [
    {
        price: '175.000', image: 'https://salt.tikicdn.com/cache/750x750/ts/product/91/60/50/34debbbb0019ee340e4968d85d47c793.jpg.webp',
        name: 'Gậy Tập Tay Lò Xo Đồ Long Đao Loại 20KG,30KG,40KG,50KG,60KG,...100KG, Hai Màu Đen,Vàng - ALYup Chính Hãng', quantity: '100',
        decription: 'Bạn muốn tập thể hình thêm trong những ngày bận rộn không thể tới phòng tập được.Trong khi cơ tay và cơ bụng là 2 phần cơ bạn cần luyện tập nhiều nhất và chưa biết lựa chọn sản phẩm gì. Đừng lo, ALYupcó rất nhiều dụng cụ giúp luyện tập thêm các cơ tại nhà vô cùng đơn giản và giá thành lại khá rẻ, và một trong số đó là gậy lò xo tập cơ tay '
    },
    {
        price: '255.000', image: 'https://salt.tikicdn.com/cache/750x750/ts/product/c8/b3/9f/4ee6b96b89aeebfba91fe02262e7ced4.png.webp',
        name: 'Xà đơn gắn cửa đa năng tùy chỉnh độ dài (80-130m)', quantity: '30',
        decription: 'Xà đơn gắn cửa đa năng tùy chỉnh độ dài (80-130m) Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....'
    }
]
let types = [
    { name: 'BÓNG', child: productB },
    { name: 'GIÀY', child: productG },
    { name: 'QUẦN ÁO', child: productQA },
    { name: 'DỤNG CỤ', child: productD },
    { name: 'PHỤ KIỆN', child: productPK },
]
function SanPham2() {
    return (
        <Grid container padding='30px 30px' alignContent='flex-start' rowSpacing={4}>
            <Grid item xs={12}>
                <Typography fontFamily='inherit' variant="h4" color='#1976d2'>Quản lý sản phẩm</Typography>
            </Grid>
            <Grid item xs={12}>
                <NavLink to='/admin/san-pham/them-san-pham'>
                    <Button startIcon={<AddIcon />} variant="contained">Thêm sản phẩm</Button>
                </NavLink>
            </Grid>

            <Grid container item xs={12} >
                {types.map((type, index) => (
                    <ItemSanPham key={index} products={type.child} type={type} />
                ))}
            </Grid>
        </Grid>
    );
}

export default SanPham2;