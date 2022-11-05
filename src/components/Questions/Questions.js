import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import background from "../../assets/images/img_v_2.jpg";
import { HiMinusSm } from "react-icons/hi";
import { IoAdd } from "react-icons/io5";

function Questions(props) {
    useEffect(() => {
        const listQuestion = document.querySelectorAll(".item-question");

        function removeActive(list) {
            list.forEach((item) => {
                item.classList.remove("active");
            });
        }
        function changeIcon(list) {
            list.forEach((item) => {
                if (item.getAttribute("class").includes("active")) {
                    item.querySelector(".title").querySelector(".icon-active").style.display = "block";
                    item.querySelector(".title").querySelector(".icon").style.display = "none";
                } else {
                    item.querySelector(".title").querySelector(".icon-active").style.display = "none";
                    item.querySelector(".title").querySelector(".icon").style.display = "block";
                }
            });
        }

        listQuestion.forEach((item) => {
            changeIcon(listQuestion);
            item.addEventListener("click", (e) => {
                e.preventDefault();
                removeActive(listQuestion);
                item.classList.add("active");
                changeIcon(listQuestion);
            });
        });
    }, []);

    return (
        <Wrapper>
            <div className="container">
                <div className="img">
                    <img src={background} alt="" />
                </div>
                <div className="box-question">
                    <div className="box-content">
                        <h2>Frequently Asked Questions</h2>
                        <ul className="questions">
                            <li className="item-question active">
                                <h5 className="title">
                                    <IoAdd className="icon" />
                                    <HiMinusSm className="icon-active" />
                                    How to download and register?
                                </h5>
                                <div className="content">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean
                                </div>
                            </li>
                            <li className="item-question">
                                <h5 className="title">
                                    <IoAdd className="icon" />
                                    <HiMinusSm className="icon-active" />
                                    How to create your paybal account?
                                </h5>
                                <div className="content">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean
                                </div>
                            </li>
                            <li className="item-question">
                                <h5 className="title">
                                    <IoAdd className="icon" />
                                    <HiMinusSm className="icon-active" />
                                    How to link your paybal and back account?
                                </h5>
                                <div className="content">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean
                                </div>
                            </li>
                            <li className="item-question">
                                <h5 className="title">
                                    <IoAdd className="icon" />
                                    <HiMinusSm className="icon-active" />
                                    We are better than orther?
                                </h5>
                                <div className="content">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean
                                </div>
                            </li>
                            <li className="item-question">
                                <h5 className="title">
                                    <IoAdd className="icon" />
                                    <HiMinusSm className="icon-active" />
                                    How to download and register?
                                </h5>
                                <div className="content">
                                    Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the coast of the Semantics, a large language ocean
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background: var(--bs-white);
    height: max-content;
    .container {
        width: 87%;
        margin: 0 auto;
        padding: 100px 0;
        height: max-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            grid-row-gap: 30px;
        }
        .img {
            max-width: 80%;
            height: auto;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            @media screen and (max-width: 600px) {
                margin: 0 auto;
            }
        }
        .box-question {
            display: flex;
            justify-content: center;
            align-items: center;
            .box-content {
                max-width: 80%;
                h2 {
                    font-size: var(--font-size-46);
                    font-weight: var(--font-weigth-700);
                    color: var(--bs-secondary);
                    margin-bottom: 50px;
                }
                .questions {
                    width: 100%;
                    height: max-content;
                    list-style: none;
                    .item-question {
                        width: 100%;
                        height: 45px;
                        overflow: hidden;
                        border: 1px solid var(--bs-gray-400);
                        cursor: pointer;
                        transition: all 500ms ease-in;
                        .title {
                            width: 100%;
                            height: 45px;
                            display: flex;
                            align-items: center;
                            padding: 10px;
                            font-size: var(--font-size-14);
                            font-weight: var(--font-weigth-500);
                            color: var(--bs-dark);
                            .icon,
                            .icon-active {
                                margin-right: 10px;
                                font-size: var(--font-size-18);
                            }
                            .icon-active {
                                display: none;
                            }
                        }
                        .content {
                            width: 100%;
                            overflow: hidden;
                            padding: 15px 10px;
                        }
                    }
                    .active {
                        .title {
                            background-color: var(--bs-primary);
                            color: var(--bs-white);
                        }
                        height: max-content;
                        transition: all 500ms ease-in;
                    }
                }
            }
        }
    }
`;

export default Questions;
