import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import Navigation from "../../components/Navigation/Navigation";
import Review from "../../components/Review/Review";
import ListServices from "../../components/ListServices/ListServices";
import HeaderServices from "../../components/ListServices/HeaderServices";
import ItemService from "../../components/ListServices/ItemService";
import PositionTeam from "../../components/PositionTeam/PositionTeam";
import Infoteam from "../../components/InfoTeam/Infoteam";
import Footer from "../../components/Footer/Footer";
import Questions from "../../components/Questions/Questions";

import ImgSvg1 from "../../assets/images/01.svg";
import ImgSvg2 from "../../assets/images/02.svg";
import ImgSvg3 from "../../assets/images/03.svg";
import ImgSvg4 from "../../assets/images/04.svg";

function AboutPage(props) {
    return (
        <div>
            <Navigation />
            <Banner
                heading="About Us"
                title="A small river named Duden flows by their place and supplies 
                it with the necessary regelialia. It is a paradisematic country, in 
                which roasted parts of sentences fly into your mouth."
            />
            <Review />
            <ListServices bgc="var(--bs-gray-400)">
                <HeaderServices heading="Our Philosphy" />
                <List>
                    <ItemService images={ImgSvg1} name="Tourism" />
                    <ItemService images={ImgSvg2} name="Package Tours" />
                    <ItemService images={ImgSvg3} name="Travel Insurance" />
                    <ItemService images={ImgSvg4} name="Airport Lounge Access" />
                </List>
            </ListServices>
            <Infoteam />
            <PositionTeam />
            <Questions />
            <Footer />
        </div>
    );
}

const List = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export default AboutPage;
