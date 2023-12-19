import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassApi2 from '../../api/API2'
//import "./button.css"
let quangcaos = []
export default class QuangCao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useCustomButtonCss: false // Sử dụng CSS tùy chỉnh mặc định
        };
    }

    componentDidMount() {
        if (this.props.quangcao) {
            quangcaos = this.props.quangcao
            this.setState({ useCustomButtonCss: true });
        } else {
            ClassApi2.GetAllBanner().then((response) => {
                quangcaos = response.data
            })
            this.setState({ useCustomButtonCss: false });

        }
    }
    render() {
        const { useCustomButtonCss } = this.state;
        const smallQcData = this.props.quangcao;
        if (smallQcData) {
            quangcaos = smallQcData
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true, // Tự động chuyển slide
            autoplaySpeed: 4000
        };
        return (
            //   <div style={{ maxHeight: '240px' }}>
            <Slider {...settings} >
                {quangcaos.map((qc, index) => (
                    <div key={index}>

                        <img src={qc.linkimg} style={{ width: '100%', maxHeight: '320px', objectFit: 'cover' }} />
                    </div>
                ))}

            </Slider>
            //    </div>
        );
    }
}