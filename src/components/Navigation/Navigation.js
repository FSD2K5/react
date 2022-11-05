import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

function Navigation(props) {
    useEffect(() => {
        const menuOpen = document.querySelector(".menu");
        const menuClose = document.querySelector(".close");
        const navMobile = document.querySelector(".navigation-mobile");
        const listNav = document.querySelectorAll(".navigation-mobile > .navLink");
        menuOpen.addEventListener("click", (e) => {
            navMobile.classList.remove("close-action");
        });
        menuClose.addEventListener("click", (e) => {
            navMobile.classList.add("close-action");
        });
        listNav.forEach((item) => {
            item.addEventListener("click", (e) => {
                navMobile.classList.remove("close-action");
            });
        });
    }, []);
    return (
        <Wrapper>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="logoLink">
                        Sterial
                    </Link>
                </div>
                <nav className="navigation">
                    <NavLink className="navLink" exact="true" end to="/">
                        Home
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/about">
                        About Us
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/service">
                        Services
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/blog">
                        Blog
                    </NavLink>
                </nav>
                <nav className="navigation-mobile close-action">
                    <NavLink className="navLink" exact="true" end to="/">
                        Home
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/about">
                        About Us
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/service">
                        Services
                    </NavLink>
                    <NavLink className="navLink" exact="true" end to="/blog">
                        Blog
                    </NavLink>
                    <button className="close">
                        <AiOutlineClose />
                    </button>
                </nav>
                <div className="menu">
                    <HiMenu />
                </div>
                <div className="button button--nav">
                    <button>Contact Us</button>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 10px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 40px;
    z-index: 100;
    .container {
        width: 87%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .logo {
            .logoLink {
                font-size: 24px;
                color: var(--bs-white);
                font-weight: var(--font-weigth-500);
                text-decoration: none;
            }
        }
        .navigation {
            display: flex;
            gap: 50px;
            .navLink {
                font-size: var(--font-size-14);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                text-decoration: none;
                &:hover {
                    color: var(--bs-white);
                }
                @media screen and (max-width: 1100px) {
                    display: none;
                }
            }
            .active {
                color: var(--bs-white);
            }
        }
        .navigation-mobile {
            display: none;
            padding: 50px 30px;
            width: 80%;
            background-color: var(--bs-white);
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
            transition: all 500ms linear;
            @media screen and (max-width: 600px) {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .navLink {
                font-size: var(--font-size-20);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                text-decoration: none;
                &:hover {
                    color: var(--bs-white);
                }
            }
            .active {
                color: var(--bs-primary);
            }
            .close {
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: var(--font-size-30);
                color: var(--bs-dark);
                border: none;
                background-color: transparent;
                cursor: pointer;
            }
        }
        .close-action {
            transform: translateX(100%);
            transition: all 500ms linear;
        }
        .menu {
            font-size: 40px;
            color: var(--bs-white);
            display: none;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            @media screen and (max-width: 1100px) {
                display: block;
            }
        }
        .button--nav {
            @media screen and (max-width: 1100px) {
                display: none;
                visibility: hidden;
            }
        }
    }
`;

export default Navigation;
