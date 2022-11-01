import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import PostList from "../../components/Post/PostList";
import PostNav from "../../components/Post/PostNav";

function BlogPage(props) {
    return (
        <div>
            <Navigation />
            <Banner
                heading="Blog"
                title="A small river named Duden flows by their place and supplies 
                it with the necessary regelialia. It is a paradisematic country, 
                in which roasted parts of sentences fly into your mouth."
            />
            <Post>
                <PostList />
                <PostList />
                <PostNav />
            </Post>
            <Footer />
        </div>
    );
}

export default BlogPage;
