import React from "react";
import styled from "styled-components";

function HeadingPost(props) {
    return (
        <Wrapper>
            <h2 className="heading">Recent Posts</h2>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    .heading {
        font-size: var(--font-size-46);
        color: var(--bs-secondary);
        font-weight: var(--font-weigth-700);
    }
`;

export default HeadingPost;
