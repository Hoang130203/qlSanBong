import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassApi2 from '../../api/API2';

export default class QuangCao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            quangcaos: [], // Thêm state quangcaos để lưu trữ dữ liệu từ API
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
        this.fetchBannerData();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        this.setState({ isMobile });
    };

    fetchBannerData = () => {
        const { quangcao } = this.props;
        if (quangcao) {
            this.setState({ quangcaos: quangcao });
        } else {
            ClassApi2.GetAllBanner().then((response) => {
                this.setState({ quangcaos: response.data });
            });
        }
    };

    render() {
        const { isMobile, quangcaos } = this.state; // Lấy quangcaos từ state

        if (isMobile) {
            return null;
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
        };

        return (
            <Slider {...settings}>
                {quangcaos.map((qc, index) => (
                    <div key={index}>
                        <img src={qc.linkimg} style={{ width: '100%', maxHeight: '320px', objectFit: 'cover' }} />
                    </div>
                ))}
            </Slider>
        );
    }
}
