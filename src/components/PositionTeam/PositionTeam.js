import React from "react";
import { Link } from "react-router-dom";
import { GiPositionMarker, GiBackwardTime } from "react-icons/gi";
import { BsLink } from "react-icons/bs";
import styled from "styled-components";

function PositionTeam(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="header">
                    <h2 className="heading">Open Positions</h2>
                    <p className="title">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                    </p>
                </div>
                <ul className="list-position">
                    <li className="position-item">
                        <div className="info">
                            <p className="job">Design</p>
                            <h3 className="position">Product Designer</h3>
                            <ul className="protocol">
                                <li>
                                    <GiPositionMarker />
                                    Remote
                                </li>
                                <li>
                                    <GiBackwardTime />
                                    Fulltime
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="view-position">
                            View Position <BsLink className="icon" />
                        </Link>
                    </li>
                    <li className="position-item">
                        <div className="info">
                            <p className="job">Design</p>
                            <h3 className="position">Account Executive</h3>
                            <ul className="protocol">
                                <li>
                                    <GiPositionMarker />
                                    Remote
                                </li>
                                <li>
                                    <GiBackwardTime />
                                    Fulltime
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="view-position">
                            View Position <BsLink className="icon" />
                        </Link>
                    </li>
                    <li className="position-item">
                        <div className="info">
                            <p className="job">Design</p>
                            <h3 className="position">Customer Success Manager</h3>
                            <ul className="protocol">
                                <li>
                                    <GiPositionMarker />
                                    Remote
                                </li>
                                <li>
                                    <GiBackwardTime />
                                    Fulltime
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="view-position">
                            View Position <BsLink className="icon" />
                        </Link>
                    </li>
                    <li className="position-item">
                        <div className="info">
                            <p className="job">Design</p>
                            <h3 className="position">Engineering Manager</h3>
                            <ul className="protocol">
                                <li>
                                    <GiPositionMarker />
                                    Remote
                                </li>
                                <li>
                                    <GiBackwardTime />
                                    Fulltime
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="view-position">
                            View Position <BsLink className="icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--bs-gray-400);
    .container {
        width: 87%;
        margin: 0 auto;
        height: 100%;
        padding: 50px 0;
        .header {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 70px;
            .heading {
                font-size: var(--font-size-30);
                font-weight: var(--font-weigth-700);
                color: var(--bs-secondary);
            }
            .title {
                max-width: 50%;
                font-size: var(--font-size-14);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                text-align: center;
            }
        }
        .list-position {
            width: 100%;
            list-style: none;
            .position-item {
                width: 100%;
                background-color: var(--bs-white);
                border-radius: 10px;
                padding: 15px;
                height: max-content;
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;
                @media screen and (max-width: 1100px) {
                    flex-direction: column;
                    gap: 15px;
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .job {
                        font-size: var(--font-size-18);
                        font-weight: var(--font-weigth-700);
                        color: var(--bs-secondary);
                    }
                    .position {
                        font-size: var(--font-size-30);
                        font-weight: var(--font-weigth-700);
                        color: var(--bs-secondary);
                    }
                    .protocol {
                        list-style: none;
                        display: flex;
                        gap: 20px;
                        li {
                            font-size: var(--font-size-14);
                            font-weight: var(--font-weigth-500);
                            color: var(--bs-gray);
                            display: flex;
                            align-items: center;
                            gap: 6px;
                        }
                    }
                }
                .view-position {
                    text-decoration: none;
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                    color: var(--bs-gray);
                    .icon {
                        transform: translateX(5px);
                    }
                }
            }
        }
    }
`;

export default PositionTeam;
