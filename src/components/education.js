import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class Education extends Component {
    render () {
        return(
        <Grid>
            <Cell col={4}>
            <h5>{this.props.tahunMulai} - {this.props.tahunSelesai}</h5>
            </Cell>
            <Cell col={8}>
            <h5>{this.props.namaSekolah}</h5>
            <h6>{this.props.Jurusan}</h6>
            </Cell>
        </Grid>
        )
    }
}
export default Education;