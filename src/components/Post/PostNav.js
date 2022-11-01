import styled from "styled-components";
import React, { useEffect, useState } from "react";

function PostNav(props) {
    const [click, setClick] = useState(true);
    useEffect(() => {
        const btn = document.querySelectorAll(".btn-nav");
        btn.forEach((item) => {
            item.onclick = () => {
                setClick(!click);
                btn.forEach((item) => {
                    item.classList.remove("active");
                });
                item.classList.add("active");
            };
        });
    }, [click]);
    return (
        <Wrapper>
            <button className="btn-nav active">1</button>
            <button className="btn-nav">2</button>
            <button className="btn-nav">3</button>
            <button className="btn-nav">4</button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    .btn-nav {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font-size-18);
        font-weight: var(--font-weigth-500);
        color: var(--bs-primary);
        border-radius: 50%;
        background-color: var(--bs-white);
        border: 1px solid var(--bs-primary);
        &:hover {
            color: var(--bs-white);
            background-color: var(--bs-primary);
        }
    }
    .active {
        color: var(--bs-white);
        background-color: var(--bs-primary);
    }
`;

export default PostNav;
