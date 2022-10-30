import React from "react";
import styled from "styled-components";

function ListServices({ children, bgc }) {
    return (
        <Wrapper style={{ backgroundColor: bgc }}>
            <div className="container">{children}</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 100px 0;
    display: flex;
    align-items: center;
    .container {
        width: 87%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 1100px) {
            flex-direction: column;
        }
    }
`;

export default ListServices;
