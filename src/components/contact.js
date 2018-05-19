import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr
                            style={{
                            borderTop: "3px solid #A43931",
                            margin: "auto",
                            width: "50%"
                        }}/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "25px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-phone" aria-hidden="true"/>(+62)85312767655</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: "25px", fontFamily: "Roboto"}}>
                                    <i className="fa fa-envelope-o" aria-hidden="true"/>hafis.karim5@gmail.com</ListItemContent>
                                </ListItem>
                            </List>

                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;