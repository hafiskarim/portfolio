import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render() {
        return(
            <Grid>
            <Cell col={4}>
            <h5>{this.props.tahunMulai} - {this.props.tahunSelesai}</h5>
            </Cell>
            <Cell col={8}>
            <h5>{this.props.namaPekerjaan}</h5>
            <h6>{this.props.detailPekerjaan}</h6>
            </Cell>
        </Grid>
        )
    }
}
export default Experience;