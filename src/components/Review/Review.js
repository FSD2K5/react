import React from "react";
import styled from "styled-components";
import ImagesV1 from "../../assets/images/img_v_1.jpg";
import ImagesV2 from "../../assets/images/img_v_2.jpg";

function Review(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="content">
                    <h2 className="heading">Explore All Corners of The World With Us</h2>
                    <p className="paragraph">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                    </p>
                    <p className="paragraph">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                        is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <div className="button button--services">
                        <button>Read more</button>
                    </div>
                </div>
                <div className="background">
                    <div className="img_1">
                        <img src={ImagesV1} alt="" />
                    </div>
                    <div className="img_2">
                        <img src={ImagesV2} alt="" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    .container {
        width: 87%;
        margin: 50px auto;
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 768px) {
            height: max-content;
            flex-direction: column-reverse;
            justify-content: flex-end;
        }
        @media screen and (max-width: 1100px) {
            height: max-content;
            flex-direction: column-reverse;
            justify-content: flex-end;
        }
        .content {
            width: 50%;
            padding: 20px 20px 20px 0;
            @media screen and (max-width: 768px) {
                width: 100%;
                padding: 20px;
            }
            @media screen and (max-width: 1100px) {
                width: 100%;
                padding: 20px;
            }
            .heading {
                font-size: var(--font-size-46);
                color: var(--bs-secondary);
                @media screen and (max-width: 768px) {
                    font-size: var(--font-size-30);
                }
            }
            .paragraph {
                font-size: var(--font-size-14);
                color: var(--bs-gray);
                font-weight: var(--font-weigth-500);
                margin-top: 25px;
            }
            .button--services {
                margin-top: 30px;
            }
        }
        .background {
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            position: relative;
            @media screen and (max-width: 768px) {
                width: 100%;
                padding: 20px;
            }
            @media screen and (max-width: 1100px) {
                width: 100%;
                padding: 20px;
            }
            .img_1 {
                width: 410px;
                height: 550px;
                border: 5px solid var(--bs-white);
                @media screen and (max-width: 768px) {
                    width: 70%;
                    height: 300px;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .img_2 {
                width: 250px;
                height: 330px;
                position: absolute;
                border: 5px solid var(--bs-white);
                bottom: 50%;
                left: 15%;
                transform: translateY(40%);
                @media screen and (max-width: 768px) {
                    width: 40%;
                    height: 200px;
                    left: 10%;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`;

export default Review;
