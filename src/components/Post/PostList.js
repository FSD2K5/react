import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Img1 from "../../assets/images/img_v_1.jpg";

function PostList(props) {
    return (
        <Wrapper>
            <ul className="list-post">
                <li className="item-post">
                    <div className="img">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="info">
                        <p className="time">May 14, 2020</p>
                        <p className="title">Far far away, behind the word mountains</p>
                    </div>
                    <p className="description">
                        Vokalia and Consonantia, there live the blind texts. Separated they live.
                    </p>
                    <Link className="link">
                        Read More
                        <BsArrowRight className="icon" />
                    </Link>
                </li>
                <li className="item-post">
                    <div className="img">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="info">
                        <p className="time">May 14, 2020</p>
                        <p className="title">Far far away, behind the word mountains</p>
                    </div>
                    <p className="description">
                        Vokalia and Consonantia, there live the blind texts. Separated they live.
                    </p>
                    <Link className="link">
                        Read More
                        <BsArrowRight className="icon" />
                    </Link>
                </li>
                <li className="item-post">
                    <div className="img">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="info">
                        <p className="time">May 14, 2020</p>
                        <p className="title">Far far away, behind the word mountains</p>
                    </div>
                    <p className="description">
                        Vokalia and Consonantia, there live the blind texts. Separated they live.
                    </p>
                    <Link className="link">
                        Read More
                        <BsArrowRight className="icon" />
                    </Link>
                </li>
                <li className="item-post">
                    <div className="img">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="info">
                        <p className="time">May 14, 2020</p>
                        <p className="title">Far far away, behind the word mountains</p>
                    </div>
                    <p className="description">
                        Vokalia and Consonantia, there live the blind texts. Separated they live.
                    </p>
                    <Link className="link">
                        Read More
                        <BsArrowRight className="icon" />
                    </Link>
                </li>
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin: 20px 0;
    .list-post {
        width: 100%;
        margin-bottom: 30px;
        height: max-content;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 25px;
        @media screen and (max-width: 1100px) {
            grid-template-columns: auto auto;
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: auto;
        }
        .item-post {
            border-radius: 10px;
            height: 450px;
            overflow: hidden;
            .img {
                width: 100%;
                height: 60%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .info {
                margin: 10px 0;
                height: max-content;
                width: max-content;
                .time,
                .title {
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weight-500);
                    color: var(--bs-gray);
                }
            }
            .description {
                margin-bottom: 20px;
                transition: all 300ms ease;
                p {
                    font-size: var(--font-size-18);
                    color: var(--bs-primary);
                }
            }
            .link {
                color: var(--bs-primary);
                display: flex;
                align-items: center;
                .icon {
                    opacity: 0;
                    transition: all 300ms linear;
                    transform: translateX(-10px);
                }
                &:hover {
                    text-decoration: none;
                    opacity: 0.8;
                    transition: all 300ms ease;
                }
                &:hover > .icon {
                    opacity: 1;
                    transition: all 300ms linear;
                    transform: translateX(5px);
                }
            }
        }
    }
`;

export default PostList;
