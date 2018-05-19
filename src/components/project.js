import React, {Component} from 'react';
import {Card, CardTitle, CardText, Grid, Cell} from "react-mdl";
class Project extends Component {
    render() {
        return (
            <div
                className="header-color"
                style={{
                paddingTop: "2em",
                paddingBottom: "2em"
            }}>
                <Grid className="project-grid">
                    <Cell style={{padding:"6em"}} col={6}>
                        <Card
                            shadow={0}
                            style={{
                            width: '300px',
                            margin: 'auto'
                        }}>
                            <CardTitle
                                style={{
                                color: 'white',
                                height: '250px',
                                opacity: .7,
                                background: 'url(https://www.androidpolice.com/wp-content/uploads/2015/07/nexus2cee_android-studio.png) center / cover'
                            }}>Veggie Protection</CardTitle>
                            <CardText
                                style={{
                                color: 'black',
                                background: 'white',
                                textAlign: 'left'
                            }}>
                                Aplikasi informasi sayuran dan hama sayuran berbasis Android. Aplikasi ini
                                bertujuan memberikan informasi kepada petani cara membasmi hama yang menyerang dan pestisidanya.
                            </CardText>
                        </Card>
                    </Cell>

                    <Cell style={{padding:"6em"}} col={6}>
                        <Card
                            shadow={0}
                            style={{
                            width: '300px',
                            margin: 'auto'
                        }}>
                            <CardTitle
                                style={{
                                color: 'white',
                                height: '250px',
                                opacity: .7,
                                background: 'url(http://www.davevoyles.com/wp-content/uploads/2014/03/construct-2-logo.jpg) center / cover'
                            }}>iDoa</CardTitle>
                            <CardText
                                style={{
                                color: 'black',
                                background: 'white',
                                textAlign: 'left'
                            }}>
                                Games interaktif yang berisikan kumpulan doa sehari-hari berbasis OS Windows
                                (.exe). Games ini bertujuan untuk mengenal lebih dalam doa sehari-hari pada anak-anak
                                usia dini.
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Project;