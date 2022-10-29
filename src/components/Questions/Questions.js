import React from "react";
import styled from "styled-components";

function Questions(props) {
    return (
        <Wrapper>
            <div className="container">
                <div className="img">
                    <img src="" alt="" />
                </div>
                <div className="box-question">
                    <div className="box-content">
                        <h2>Frequently Asked Questions</h2>
                        <div className="question">
                            <div className="item-question"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

export default Questions;
