import React from "react";
import styled from "styled-components";
import person1 from "../../assets/images/person_1.jpg";
import person2 from "../../assets/images/person_2.jpg";
import person3 from "../../assets/images/person_3.jpg";

function Infoteam(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="header">
                    <h1 className="heading">Meet Our Team of Experts</h1>
                    <p className="title">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                    </p>
                </div>
                <ul className="list-member">
                    <li className="member">
                        <div className="avatar">
                            <img src={person1} alt="" />
                        </div>
                        <p className="position">CEO, Co-Founder</p>
                        <p className="name">John Anderson</p>
                        <p className="description">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </li>
                    <li className="member">
                        <div className="avatar">
                            <img src={person2} alt="" />
                        </div>
                        <p className="position">CEO, Co-Founder</p>
                        <p className="name">John Anderson</p>
                        <p className="description">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </li>
                    <li className="member">
                        <div className="avatar">
                            <img src={person3} alt="" />
                        </div>
                        <p className="position">CEO, Co-Founder</p>
                        <p className="name">John Anderson</p>
                        <p className="description">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </li>
                    <li className="member">
                        <div className="avatar">
                            <img src={person1} alt="" />
                        </div>
                        <p className="position">CEO, Co-Founder</p>
                        <p className="name">John Anderson</p>
                        <p className="description">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--bs-white);
    .container {
        width: 87%;
        margin: 0 auto;
        padding: 120px 0;
        .header {
            width: 100%;
            margin-bottom: 70px;
            .heading {
                font-size: var(--font-size-30);
                font-weight: var(--font-weigth-700);
                color: var(--bs-secondary);
                text-align: center;
                margin-bottom: 10px;
            }
            .title {
                max-width: 50%;
                margin: 0 auto;
                text-align: center;
                font-size: var(--font-size-14);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                @media screen and (max-width: 600px) {
                    max-width: 100%;
                }
            }
        }
        .list-member {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 20px;
            @media screen and (max-width: 1000px) {
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 20px;
                grid-row-gap: 20px;
            }
            @media screen and (max-width: 600px) {
                grid-template-columns: 1fr;
                grid-row-gap: 40px;
            }
            .member {
                @media screen and (max-width: 600px) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .avatar {
                    width: 80%;
                    height: 200px;
                    margin-bottom: 20px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .position {
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                    color: var(--bs-secondary);
                }
                .name {
                    font-size: var(--font-size-18);
                    font-weight: var(--font-weigth-700);
                    color: var(--bs-secondary);
                    margin: 15px 0;
                }
                .description {
                    font-size: var(--font-size-14);
                    font-weight: var(--font-weigth-500);
                    color: var(--bs-gray);
                    line-height: 20px;
                    @media screen and (max-width: 600px) {
                        text-align: center;
                    }
                }
            }
        }
    }
`;

export default Infoteam;
