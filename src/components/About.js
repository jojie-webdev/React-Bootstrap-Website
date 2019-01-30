import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <Image src="assets/dog-people.jpg" className="header-image" />
            <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src="assets/person-1.jpg" className="about-profile-pic" />
                    <h3>Frank The Tank</h3>
                    <p>We wash our brush with odorless thinner. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. But we're not there yet, so we don't need to worry about it. You have freedom here. The only guide is your heart. Decide where your cloud lives. Maybe he lives right in here. Get tough with it, get strong.</p>

                    <p>At home you have unlimited time. It's all a game of angles. You have to make those little noises or it won't work. Here we're limited by the time we have. Pretend you're water. Just floating without any effort. Having a good day.</p>

                    <p>Don't kill all your dark areas - you need them to show the light. Every highlight needs it's own personal shadow. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things Let's get crazy. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.</p>
                </Col>
            </Grid>
        </div>
    );
}

export default About;