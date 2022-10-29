import React from "react";
import styled from "styled-components";

function Post({ children }) {
    return (
        <Wrapper>
            <div className="container">{children}</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    background-color: var(--bs-white);
    padding: 50px 0;
    display: flex;
    align-items: center;
    .container {
        width: 87%;
        margin: 0 auto;
        height: max-content;
    }
`;

export default Post;
