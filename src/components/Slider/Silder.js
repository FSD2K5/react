import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImg } from "../../assets/images/sliderimg";

function SliderHeader(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Wrapper>
            <div className="container">
                <div className="content">
                    <h3 className="heading">Discover Hundred of Travel Destinations</h3>
                    <p className="title">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                    </p>
                </div>
            </div>
            <Slider className="slider" {...settings}>
                {sliderImg.map((item, index) => (
                    <div className="item" key={item.id}>
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="address">Paradise Beach, Palawan Island</p>
                        <p className="country">Maldives, Repbulic Maldives</p>
                    </div>
                ))}
            </Slider>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    padding: 100px 0;
    background-color: var(--bs-white);
    .container {
        width: 87%;
        margin: 0 auto;
        .content {
            width: 40%;
            @media screen and (max-width: 1100px) {
                width: 100%;
            }
            .heading {
                font-size: var(--font-size-46);
                color: var(--bs-secondary);
                font-weight: var(--font-weigth-700);
            }
            .title {
                font-size: var(--font-size-14);
                font-weight: var(--font-weight-500);
                color: var(--bs-gray);
                margin: 10px 0 30px;
            }
        }
    }
    .slider {
        width: 100%;
        padding: 50px 0;
        overflow: hidden;
        height: max-content;
        .item {
            height: 490px;
            padding: 0 15px;
            border-radius: 10px;
            .img {
                width: 100%;
                height: 80%;
                border-radius: 10px;
                img {
                    width: 100%;
                    border-radius: 10px;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .address {
                font-size: var(--font-size-30);
                color: var(--bs-secondary);
                font-weight: var(--font-weigth-500);
                margin: 10px 0;
            }
            .country {
                font-size: var(--font-size-14);
                font-weight: var(--font-weight-500);
                color: var(--bs-gray);
            }
        }
    }
`;

export default SliderHeader;
