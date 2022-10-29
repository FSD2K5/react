import React from "react";
import styled from "styled-components";

function HeaderServices({ heading }) {
    return (
        <Wrapper>
            <h2 className="heading">{heading}</h2>
            <p className="title">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
            </p>
            <div className="button">
                <button>View All</button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 280px;
    height: 250px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .heading {
        font-size: var(--font-size-30);
        font-weight: var(--font-weigth-700);
        color: var(--bs-secondary);
    }
    .title {
        font-size: var(--font-size-14);
        font-weight: var(--font-weigth-500);
        color: var(--bs-gray);
    }
`;

export default HeaderServices;
