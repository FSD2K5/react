import React from "react";
import styled from "styled-components";
import { listUser } from "../../assets/images/user";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
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
                <h3 className="heading">Testimonials</h3>
            </div>
            <Slider className="listUser" {...settings}>
                {listUser.map((item) => (
                    <div key={item.id} className="userItem">
                        <div className="userImg">
                            <img src={item.img} alt="" />
                        </div>
                        <span className="userName">{item.name}</span>
                        <p className="userJob">{item.job}</p>
                        <p className="comment">
                            “A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                            mouth"
                        </p>
                    </div>
                ))}
            </Slider>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 0;
    background-color: var(--bs-gray-400);
    .container {
        width: 87%;
        margin: 0 auto;
        .heading {
            text-align: center;
            font-size: var(--font-size-46);
            font-weight: var(--font-weigth-700);
            color: var(--bs-secondary);
            margin-bottom: 150px;
        }
    }
    .listUser {
        display: flex;
        .slick-prev,
        .slick-next {
            width: 80px;
            height: 80px;
            margin: 0 20px;
            border-radius: 50%;
            background-color: var(--bs-gray);
            top: -75px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .slick-next::before {
            content: ">";
            font-size: 40px;
            font-weight: var(--font-weigth-700);
            background-color: transparent;
        }
        .slick-prev::before {
            content: "<";
            font-size: 40px;
            font-weight: var(--font-weigth-700);
            background-color: transparent;
        }
        .slick-next {
            left: 50% !important;
            transition: all 300ms ease-in;
            &:hover {
                background-color: var(--bs-secondary);
                transition: all 300ms ease-in;
            }
        }
        .slick-prev {
            right: 50% !important;
            left: unset;
            transition: all 300ms ease-in;
            &:hover {
                background-color: var(--bs-secondary);
                transition: all 300ms ease-in;
            }
        }

        .userItem {
            max-width: 270px;
            background-color: var(--bs-white);
            margin: 0 20px;
            padding: 20px;
            @media screen and (max-width: 768px) {
                max-width: unset;
                margin: 0;
            }
            .userImg {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 15px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .userName {
                font-size: var(--font-size-18);
                font-weight: var(--font-weigth-700);
                color: var(--bs-primary);
            }
            .userJob {
                font-size: var(--font-size-14);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                margin: 10px 0;
            }
        }
    }
`;

export default Testimonials;
