import React from "react";
import styled from "styled-components";
import person1 from "../../assets/images/person_1.jpg";

function Infoteam(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="header"></div>
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
                </ul>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--bs-white);
`;

export default Infoteam;
