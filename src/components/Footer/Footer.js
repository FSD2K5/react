import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrInstagram, GrTwitter, GrFacebookOption, GrLinkedinOption, GrPinterest } from "react-icons/gr";
import { RiBasketballLine } from "react-icons/ri";

function Footer(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="des">
                    <div className="content">
                        <h5 className="name__info">About Passport.</h5>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                    <div className="social">
                        <h5 className="name__info">Connect</h5>
                        <div className="list">
                            <Link to="/" className="item">
                                <GrInstagram />
                            </Link>
                            <Link to="/" className="item">
                                <GrTwitter />
                            </Link>
                            <Link to="/" className="item">
                                <GrFacebookOption />
                            </Link>
                            <Link to="/" className="item">
                                <GrLinkedinOption />
                            </Link>
                            <Link to="/" className="item">
                                <GrPinterest />
                            </Link>
                            <Link to="/" className="item">
                                <RiBasketballLine />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="linked">
                    <h5 className="name__info">Links</h5>
                    <div className="list_links">
                        <Link className="links" to="/about">
                            About us
                        </Link>
                        <Link className="links" to="/service">
                            Services
                        </Link>
                        <Link className="links" to="/">
                            News
                        </Link>
                        <Link className="links" to="/">
                            Careers
                        </Link>
                        <Link className="links" to="/">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="company">
                    <h5 className="name__info">Company</h5>
                    <div className="list_company">
                        <Link className="item__company" to="/about">
                            About us
                        </Link>
                        <Link className="item__company" to="/service">
                            Services
                        </Link>
                        <Link className="item__company" to="/">
                            News
                        </Link>
                        <Link className="item__company" to="/">
                            Careers
                        </Link>
                        <Link className="item__company" to="/">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <h5 className="name__info">Contact</h5>
                    <div className="list__info">
                        <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                        <Link className="info__item" to="/">
                            +1(123)-456-7890
                        </Link>
                        <Link className="info__item" to="/">
                            +1(123)-456-7890
                        </Link>
                        <Link className="info__item" to="/">
                            info@mydomain.com
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--bs-gray-400);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 100px 0;
    .container {
        width: 87%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
        @media screen and (max-width: 1100px) {
            flex-direction: column;
        }
        .des {
            width: 35%;
            @media screen and (max-width: 1100px) {
                width: 100%;
            }
            .content {
                width: 100%;
                margin-bottom: 30px;
                p {
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                    color: var(--bs-gray);
                    line-height: 22px;
                }
            }
            .social {
                width: 100%;
                .list {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    .item {
                        width: 35px;
                        height: 35px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        background-color: var(--bs-gray);
                        color: var(--bs-white);
                        font-size: var(--font-size-18);
                        transition: all 250ms ease-in;
                        &:hover {
                            background-color: var(--bs-primary);
                            transition: all 250ms ease-in;
                        }
                    }
                }
            }
        }
        .linked {
            width: max-content;
            .list_links {
                display: flex;
                flex-direction: column;
                gap: 20px;
                .links {
                    text-decoration: none;
                    color: var(--bs-gray);
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                }
            }
        }
        .company {
            width: max-content;
            .list_company {
                display: flex;
                flex-direction: column;
                gap: 20px;
                .item__company {
                    text-decoration: none;
                    color: var(--bs-gray);
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                }
            }
        }
        .info {
            .list__info {
                display: flex;
                flex-direction: column;
                gap: 20px;
                p,
                .info__item {
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                    color: var(--bs-gray);
                    text-decoration: none;
                    cursor: pointer;
                }
            }
        }
    }
`;

export default Footer;
