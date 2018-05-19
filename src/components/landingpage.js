import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../images/gambar.JPG';

class Landing extends Component {
    render() {
        return (
            <div
                style={{
                width: '100%',
                margin: 'auto'
            }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar} alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h5>Hello, I'm</h5>
                            <h2>Hafizhul Karim</h2>
                            <h4>Front-End Engineer</h4>
                            <hr/>
                            <p>Javascript | React | React Native</p>
                            <div className="socmed-links">

                                <a
                                    href="https://www.linkedin.com/in/hafizhul-karim-8a3b1a115/"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a
                                    href="https://www.instagram.com/hafizhul_karim/"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>

                                <a
                                    href="https://www.facebook.com/hafis.karim.1"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-facebook-official" aria-hidden="true"/>
                                </a>

                                <a
                                    href="https://github.com/hafiskarim"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>

                </Grid>

            </div>
        )
    }
}

export default Landing;