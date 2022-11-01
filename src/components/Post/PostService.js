import React from "react";
import styled from "styled-components";

function PostService(props) {
    return (
        <Wrapper>
            <h2 className="heading">Featured Servicwes</h2>
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
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .heading {
        font-size: var(--font-size-30);
        font-weight: var(--font-weigth-700);
        color: var(--bs-secondary);
    }
    .title {
        text-align: center;
        max-width: 50%;
        font-size: var(--font-size-14);
        font-weight: var(--font-weigth-500);
        color: var(--bs-gray);
        @media screen and (max-width: 1100px) {
            max-width: 100%;
        }
    }
`;

export default PostService;
