import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import Education from './education';
import Experience from './experience';
import Certification from './certification';
import Skills from './skills';
import avatar from '../images/gambar.JPG';

class Resume extends Component {
    render() {
        return (
            <div className="landing-grid">
                <img src={avatar} alt="avatar" className="avatar-img"/>
                <Grid>
                    <Cell col={6} className="col-kanan-resume">
                        <h2>Education</h2>
                        <Education
                            tahunMulai={2000}
                            tahunSelesai={2006}
                            namaSekolah="SDIT Meranti Jakarta"/>
                        <Education
                            tahunMulai={2006}
                            tahunSelesai={2009}
                            namaSekolah="SMP Negeri 216 Jakarta"/>

                        <Education
                            tahunMulai={2009}
                            tahunSelesai={2012}
                            namaSekolah="SMA Negeri 5 Jakarta"
                            Jurusan="Science Class"/>

                        <Education
                            tahunMulai={2013}
                            tahunSelesai="Present"
                            namaSekolah="University of Brawijaya"
                            Jurusan="Faculty of Computer Science, Informatics Engineering"/>

                        <hr
                            style={{
                            borderTop: "3px solid #A43931"
                        }}/>
                        <h2>Experience</h2>
                        <Experience
                            tahunMulai="Sep 2016"
                            tahunSelesai="Oct 2016"
                            namaPekerjaan="Telekomunikasi Indonesia"
                            detailPekerjaan="Data Access Maintenance Intern"/>
                        <Experience
                            tahunMulai="2016"
                            tahunSelesai="2017"
                            namaPekerjaan="Kelompok Riset Mahasiswa Fakultas Ilmu Komputer"/>
                    </Cell>
                    <Cell col={6} className="col-kanan-resume">

                        <h2>Certification</h2>
                        <Certification
                            tahunMulai="2016"
                            tahunSelesai="Present"
                            namaSertifikat="Cisco"
                            detailSertifikat="CCNA Routing and Switching: Introduction to Networks"/>
                        <Certification
                            tahunMulai="2016"
                            tahunSelesai="Present"
                            namaSertifikat="Microsoft"
                            detailSertifikat="Microsoft Office Desktop Application"/>

                        <hr
                            style={{
                            borderTop: "3px solid #A43931"
                        }}/>
                        <h2>Skills</h2>
                        <Skills namaskill="HTML/CSS" progress={100}/>
                        <Skills namaskill="Javascript" progress={90}/>
                        <Skills namaskill="React" progress={80}/>
                        <Skills namaskill="React native" progress={50}/>
                        <Skills namaskill="Java" progress={70}/>
                        <Skills namaskill="Python" progress={40}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;