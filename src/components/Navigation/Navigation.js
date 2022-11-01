import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import styled from "styled-components";

function Navigation(props) {
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
