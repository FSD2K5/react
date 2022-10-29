import React from "react";
import styled from "styled-components";

function ItemService({ images, name }) {
    return (
        <Wrapper>
            <div className="svg">
                <img src={images} alt="" />
            </div>
            <h3 className="service">{name}</h3>
            <p className="description">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
            </p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    height: 100%;
    .svg {
        width: 60px;
        height: 60px;
        padding: 5px;
        border-radius: 50%;
        background-color: #f6ded4;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .service {
        font-size: var(--font-size-14);
        font-weight: var(--font-weigth-700);
        color: var(--bs-secondary);
        margin: 10px 0;
    }
    .description {
        font-size: var(--font-size-14);
        font-weight: var(--font-weigth-500);
        color: var(--bs-gray);
    }
`;

export default ItemService;
