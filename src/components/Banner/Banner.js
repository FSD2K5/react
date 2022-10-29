import React from "react";
import { BsPlayFill } from "react-icons/bs";
import styled from "styled-components";
import Images from "../../assets/images/hero_1.jpg";

function Banner({ heading, title }) {
    return (
        <Wrapper>
            <div className="container">
                <div className="images">
                    <img src={Images} alt="" />
                </div>
                <div className="slogan">
                    <h1 className="heading">{heading}</h1>
                    <p className="content">{title}</p>
                    <div className="playVideo">
                        <button>
                            <BsPlayFill />
                        </button>
                        <span>Watch video</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    .container {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        z-index: 0;
        .images {
            width: 100%;
            height: 100%;
            filter: brightness(0.8);
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .slogan {
            width: 87%;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            .heading {
                width: 40%;
                line-height: 70px;
                font-size: var(--font-size-60);
                color: var(--bs-white);
                font-weight: var(--font-weigth-700);
                @media screen and (max-width: 1100px) {
                    width: 100%;
                    font-size: var(--font-size-30);
                    line-height: 40px;
                }
            }
            .content {
                width: 50%;
                margin: 20px 0;
                line-height: 25px;
                font-size: var(--font-size-14);
                color: var(--bs-white);
                font-weight: var(--font-weigth-500);
                @media screen and (max-width: 1100px) {
                    width: 100%;
                    font-size: var(--font-size-18);
                }
            }
            .playVideo {
                display: flex;
                align-items: center;
                gap: 30px;
                button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    background-color: var(--bs-white);
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    color: var(--bs-dark);
                    font-size: var(--font-size-20);
                    transition: all 300ms linear;
                    &:hover {
                        transform: scale(1.2);
                        transition: all 300ms linear;
                    }
                }
                span {
                    font-size: var(--font-size-14);
                    color: var(--bs-white);
                    font-weight: var(--font-weigth-500);
                    @media screen and (max-width: 1100px) {
                        font-size: var(--font-size-18);
                    }
                }
            }
        }
    }
`;

export default Banner;
