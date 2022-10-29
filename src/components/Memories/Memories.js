import React from "react";
import styled from "styled-components";
import Images from "../../assets/images/img-1.jpg";
function Memories(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="paragraph">
                    <h3 className="heading">Sweet Memories Come To Life Again</h3>
                    <p className="content">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.
                    </p>
                    <p className="content">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                        is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                    <div className="button">
                        <button>Read Nore</button>
                    </div>
                </div>
                <div className="img">
                    <img src={Images} alt="" />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    padding: 50px 0;
    overflow: hidden;
    flex-direction: column;
    .container {
        width: 87%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        @media screen and (max-width: 1100px) {
            flex-direction: column-reverse;
        }
        .paragraph {
            width: 45%;
            @media screen and (max-width: 1100px) {
                width: 100%;
            }
            .heading {
                font-size: var(--font-size-46);
                color: var(--bs-secondary);
                font-weight: var(--font-weigth-700);
                margin-bottom: 25px;
            }
            .content {
                font-size: var(--font-size-14);
                font-weight: var(--font-weigth-500);
                color: var(--bs-gray);
                margin-bottom: 20px;
            }
        }
        .img {
            width: 526px;
            height: 760px;
            @media screen and (max-width: 1100px) {
                width: 100%;
                margin-bottom: 15px;
            }
            @media screen and (max-width: 600px) {
                height: 450px;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`;

export default Memories;
