import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';
// import service_uri from '../../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';
import Image from 'react-bootstrap/Image'
import DatePicker, { registerLocale } from 'react-datepicker';
import th from "date-fns/locale/th"; // the locale you want
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import 'react-datepicker/dist/react-datepicker.css';
import TextInput from '../../components/TextInput';
import { Form, Checkbox } from 'semantic-ui-react'
registerLocale("th", th); // register it with the name you want

const initialState = {
    prefixThError: "",
    prefixEnError: "",
    firstNameThError: "",
    lastNameThError: "",
    firstNameEnError: "",
    lastNameEnError: "",
    emailError: ""
}


export default class Profile extends Component{

    state = {
        initialState : initialState,
        startDate: setHours(setMinutes(new Date(), 0), 6),
        endDate: setHours(setMinutes(new Date(), 0), 22),
        startTime: '',
        endTime:'',

        startcheck: setHours(setMinutes(new Date(), 0), 6),
        endcheck: setHours(setMinutes(new Date(), 0), 22),
    }

    handleChangeStartDate = (date) => {
        this.setState({"startDate": date})
        let d1 = new Date(date);
        let Da = d1.getDate();
        let Mon = (1)+d1.getMonth();
        let Year = d1.getFullYear();
        let startdate = (Year + "-" + Mon + "-" + Da);
        // let startdate = (Da + "/" + Mon + "/" + Year);
        console.log("startDate "+ startdate);
        return(
            startdate
        )
    }

    handleChange1 = (e, { value1 }) => this.setState({ value1 })
    handleChange2 = (e, { value2 }) => this.setState({ value2 })
    handleChange3 = (e, { value3 }) => this.setState({ value3 })
    handleChange4 = (e, { value4 }) => this.setState({ value4 })
    handleChange5 = (e, { value5 }) => this.setState({ value5 })
    handleChange6 = (e, { value6 }) => this.setState({ value6 })
    handleChange7 = (e, { value7 }) => this.setState({ value7 })
    handleChange8 = (e, { value8 }) => this.setState({ value8 })

    handleChangeStartcheckDate = date => {
        this.setState({"startcheck": date})
        let d1 = new Date(date);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let StartcheckDate_time = (h + ":" + mm);
        console.log("startDate "+ StartcheckDate_time );
        return(
            StartcheckDate_time
        )
    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    onChangeHandle_upper = (event) => {
        let name = event.target.name.toUpperCase();
        let value = event.target.value.toUpperCase();
        this.setState({[name]: value});
    }

    checkbox_check1 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy1)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy1} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check2 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy2)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy2} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check3 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy3)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy3} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check4 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy4)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy4} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check5 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy5)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy5} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check6 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy6)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy6} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check7 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy7)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy7} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }
    checkbox_check8 = (ce) => {
        console.log(ce)
        console.log(this.state.drug_allergy8)
        let cc = (ce)
        if(cc === '1'){      
            return (
                <textarea class="form-control" value={this.state.drug_allergy8} change={this.onChangeHandle} rows="1"></textarea>
            );
        }
    }

    validate = () =>{
        let  prefixThError = "";
        let  prefixEnError = "";
        let  firstNameThError = "";
        let  firstNameEnError = "";
        let  lastNameThError =  "";
        let  lastNameEnError =  "";
        let  emailError =  "";
        let  iPIDError = "";
        let  bibError = "";
        let  matchError ="";

        if (!this.state.prefixTh) {
            prefixThError = "กรุณาคำนำหน้าชื่อ";
        }
        if (!this.state.prefixEn) {
            prefixEnError = "กรุณาคำนำหน้าชื่อภาษาอังกฤษ";
        }

        if (!this.state.firstNameTh ) {
            firstNameThError = "กรุณากรอกชื่อจริง";
        }
        if (!this.state.firstNameEn ) {
            firstNameEnError = "กรุณากรอกชื่อจริงภาษาอังกฤษ";
        }

        if (!this.state.lastNameTh ) {
            lastNameThError = "กรุณากรอกนามสกุลจริง";
        }
        if (!this.state.lastNameEn ) {
            lastNameEnError = "กรุณากรอกนามสกุลจริงภาษาอังกฤษ";
        }
        
        if (!this.state.email ) {
            emailError = "กรุณากรอกอีเมล์";
        }
        if (!this.state.iPID) {
            iPIDError = "กรุณากรอกเลขบัตรประจำตัวประชาชน";
        }
        if(!this.state.match){
            matchError ="กรุณาเลือกการแข่งขัน"
        }
        // if(!this.state.racetime){
        //     racetimeError ="กรุณาเวลาแข่งขัน"
        // }
        
        if (!(/^[A-Z0-9]+$/.test(this.state.bib))) {
            bibError = "กรุณากรอกชื่อบนเบอร์วิ่งให้ถูกต้อง (เฉพาะภาษาอังกฤษตัวพิมพ์ใหญ่ ตัวเลขเท่านั้น และสูงสุด 10 ตัวอักษร)";
            // console.log((/^[A-Z0-9]+$/.test(this.state.bib)))
        }

        if(prefixThError || firstNameThError || lastNameThError || prefixEnError || firstNameEnError || lastNameEnError || emailError || iPIDError || bibError || matchError){
            this.setState({ prefixThError });
            this.setState({ firstNameThError });
            this.setState({ lastNameThError });
            this.setState({ prefixEnError });
            this.setState({ firstNameEnError });
            this.setState({ lastNameEnError });
            this.setState({ emailError });
            this.setState({ iPIDError });
            this.setState({ bibError });
            this.setState({ matchError });
            // console.log(this.state.chackemail,this.state.email,this.state.emailError)

            return false;
        }
        return true;

    }

    profilecreate = (event) => {
        console.log(this.state.chackemail)
        event.preventDefault();
        const isValid = this.validate();
        if( !this.state.prefixTh  && !this.state.prefixEn  && !this.state.firstNameTh &&  !this.state.firstNameEn  &&  !this.state.lastNameTh  &&  !this.state.lastNameEn  &&  !this.state.email  &&  !this.state.iPID  &&  !this.state.match ){
            axios.post(baseurl+'api/Profile/profilecreate/', {
                user_id: this.state.user_id,
                prefixTh : this.state.prefixTh,
                prefixEn : this.state.prefixEn,
                firstNameTh : this.state.firstNameTh,
                firstNameEn : this.state.firstNameEn,
                lastNameTh : this.state.lastNameTh,
                lastNameEn : this.state.lastNameEn,
                email : this.state.email,
                iPID : this.state.iPID,
                match : this.state.match,
                checkbox_check1 : this.state.checkbox_check1,
                checkbox_check2 : this.state.checkbox_check2,
                checkbox_check3 : this.state.checkbox_check3,
                checkbox_check4 : this.state.checkbox_check4,
                checkbox_check5 : this.state.checkbox_check5,
                checkbox_check6 : this.state.checkbox_check6,
                checkbox_check7 : this.state.checkbox_check7,
                checkbox_check8 : this.state.checkbox_check8,
                blood_type : this.state.blood_type,
                shirt_size : this.state.shirt_size,
            })
            .then(res => {
            alert("บันทึกสำเร็จ")
                this.RefreshPage();
            })
            .catch(error => {
                console.log("====>",error.status);
            });
        }else if (isValid) {
            this.setState(initialState);
        }

    }

    render(){
        return(
        <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header p-2">
                            <ul class="nav nav-pills">
                            <li class="nav-item"><a class="nav-link active" href="#personal_information" data-toggle="tab">ข้อมูลส่วนตัว</a></li>
                            <li class="nav-item"><a class="nav-link" href="#information_about_running" data-toggle="tab">ข้อมูลเกี่ยวกับการวิ่ง</a></li>
                            <li class="nav-item"><a class="nav-link" href="#emergency_contacts" data-toggle="tab">ผู้ติดต่อฉุกเฉิน</a></li>
                            <li class="nav-item"><a class="nav-link" href="#medical_information" data-toggle="tab">ข้อมูลทางการแพทย์</a></li>
                            <li class="nav-item"><a class="nav-link" href="#souvenir_shirt" data-toggle="tab">เสื้อของที่ระลึก</a></li>
                            </ul>
                        </div>
                        <form onSubmit={this.profilecreate}>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="active tab-pane" id="personal_information">
                                        <div className="row">
                                            <div class="col-md-4">
                                                <Image src="picture/icon-person-png.jpg" thumbnail  height={300} width={300}/>
                                                
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group input-group-sm">
                                                    <label>คำนำหน้า</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="คำนำหน้า" name="prefixTh" id="prefixTh" value={this.state.prefixTh} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                    <div style={{color: "red"}}>{this.state.prefixThError}</div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>Prefix</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="Prefix" name="prefixEn" id="prefixEn" value={this.state.prefixEn} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.prefixEnError}</div>
                                                <div class="form-group input-group-sm">
                                                    <label>เบอร์โทรศัพท์</label>
                                                    <input type="number" class="form-control form-control-lg" placeholder="เบอร์โทรศัพท์" name="phone" id="phone" value={this.state.phone} onChange={this.onChangeHandle} required="" className="form-control" maxLength="10" />
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>BIB </label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="ชื่อบนเบอร์วิ่ง (เฉพาะภาษาอังกฤษตัวพิมพ์ใหญ่ ตัวเลขเท่านั้น และสูงสุด 10 ตัวอักษร)" name="bib" id="bib" value={this.state.bib} onChange={this.onChangeHandle_upper} required="" className="form-control" maxLength="10" />
                                                    <div style={{color: "red"}}>{this.state.bibError}</div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group input-group-sm">
                                                    <label>ชื่อ</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="ชื่อจริง" name="firstNameTh" id="firstNameTh" value={this.state.firstNameTh} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                    <div style={{color: "red"}}>{this.state.firstNameThError}</div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>First name</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="First name" name="firstNameEn" id="firstNameEn" value={this.state.firstNameEn} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.firstNameEnError}</div>
                                                <div class="form-group input-group-sm">
                                                    <label>อีเมล</label>
                                                    <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="อีเมล์" change={this.onChangeHandle} />
                                                    <div style={{color: "red"}}>{this.state.emailError}</div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>วันเดือนปีเกิด</label>
                                                    <DatePicker
                                                        dateFormat=" dd/MM/yyyy"
                                                        selected={this.state.startDate}
                                                        onChange={date => this.handleChangeStartDate(date)}
                                                        selectsStart
                                                        locale='th'
                                                        classes="form-control"
                                                    />
                                                </div>
                                            </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group input-group-sm">
                                                    <label>นามสกุล</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="นามสกุล" name="lastNameTh" id="lastNameTh" value={this.state.lastNameTh} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                    <div style={{color: "red"}}>{this.state.lastNameThError}</div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>Last name</label><span class="text-danger"> *</span>
                                                    <input type="text" class="form-control form-control-lg" placeholder="Last name" name="lastNameEn" id="lastNameEn" value={this.state.lastNameEn} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.lastNameEnError}</div>
                                                <div class="form-group input-group-sm">
                                                    <label>เลขบัตรประจำตัวประชาชน</label>
                                                    <input type="text" class="form-control form-control-lg" placeholder="เลขบัตรประจำตัวประชาชน" name="iPID" id="iPID" value={this.state.iPID} onChange={this.onChangeHandle} required="" className="form-control" maxLength="13"/>
                                                    <div style={{color: "red"}}>{this.state.iPIDError}</div>
                                                </div>
                                                <div class="form-group input-group-sm">
                                                    <label>ที่อยู่</label><span class="text-danger"> *</span>
                                                    <textarea class="form-control" value={this.state.address} change={this.onChangeHandle} rows="1"></textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div class="modal-footer">
                                                {/* <button type="submit" class="btn btn-primary  btn-main-md">ถัดไป</button> */}
                                                <a class="btn btn-primary  btn-main-md" href="#information_about_running" data-toggle="tab">ถัดไป</a>
                                        </div>
                                </div>
                                <div class="tab-pane" id="information_about_running">
                                    <div className="row">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>เคยลงงานแข่งมาก่อนหรือไม่</label><span class="text-danger"> *</span>
                                                <select name="match" class="form-control" value={this.state.match}  onChange={this.onChangeHandle}>
                                                        <option value="Mini Marathon">Mini Marathon</option>
                                                        <option value="Half Marathon">Half Marathon</option>
                                                        <option value="Full Marathon">Full Marathon</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>เวลาที่คาดว่าจะจบในการวิ่งครั้งนี้</label><span class="text-danger"> *</span>
                                                <DatePicker
                                                    selected={this.state.startcheck}
                                                    onChange={date => this.handleChangeStartcheckDate(date)}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={1}
                                                    timeCaption=" Time"
                                                    dateFormat=" H:mm"
                                                    minTime={this.state.startDate}
                                                    maxTime={this.state.endcheck}
                                                    locale='th'
                                                />
                                            </div>
                                            <div style={{color: "red"}}>{this.state.racetime}</div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="modal-footer">
                                            <a class="btn btn-primary" href="#emergency_contacts" data-toggle="tab">ถัดไป</a>
                                    </div>
                                </div>

                                <div class="tab-pane" id="emergency_contacts">
                                    <label>ผู้ติดต่อฉุกเฉินคนที่ 1</label>
                                    <div className="row">

                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อ</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="ชื่อ" name="firstName_emergency_contacts_1" id="firstName_emergency_contacts_1" value={this.state.firstName_emergency_contacts_1} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.firstName_emergency_contacts_1}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="นามสกุล" name="lastName_emergency_contacts_1" id="lastName_emergency_contacts_1" value={this.state.lastName_emergency_contacts_1} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.lastName_emergency_contacts_1}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทรศัพท์</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="เบอร์โทรศัพท์" name="phone_emergency_contacts_1" id="phone_emergency_contacts_1" value={this.state.phone_emergency_contacts_1} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.phone_emergency_contacts_1}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <label>ผู้ติดต่อฉุกเฉินคนที่ 2</label>
                                    <div className="row">
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อ</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="ชื่อ" name="firstName_emergency_contacts_2" id="firstName_emergency_contacts_2" value={this.state.firstName_emergency_contacts_2} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.firstName_emergency_contacts_2}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="นามสกุล" name="lastName_emergency_contacts_2" id="lastName_emergency_contacts_2" value={this.state.lastName_emergency_contacts_2} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.lastName_emergency_contacts_2}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทรศัพท์</label><span class="text-danger"> *</span>
                                                <input type="text" class="form-control form-control-lg" placeholder="เบอร์โทรศัพท์" name="phone_emergency_contacts_2" id="phone_emergency_contacts_2" value={this.state.phone_emergency_contacts_2} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.phone_emergency_contacts_2}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="modal-footer">
                                            <a class="btn btn-primary  btn-main-md" href="#medical_information" data-toggle="tab">ถัดไป</a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="medical_information">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>หมู่เลือด</label><span class="text-danger"> *</span>
                                                <select name="match" class="form-control" value={this.state.blood_type}  onChange={this.onChangeHandle}>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="O">O</option>
                                                        <option value="AB">AB</option>
                                                </select>
                                                <div style={{color: "red"}}>{this.state.blood_type_Error}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านมีอาการแพ้ยาหรือสารต่างๆ หรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value1='0'
                                                            checked={this.state.value1 === '0'}
                                                            onChange={this.handleChange1}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value1='1'
                                                            checked={this.state.value1 === '1'}
                                                            onChange={this.handleChange1}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            <b>{this.checkbox_check1(this.state.value1)}</b>
                                        </div>

                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านมีโรคประจำตัว หรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value2='0'
                                                            checked={this.state.value2 === '0'}
                                                            onChange={this.handleChange2}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value2='1'
                                                            checked={this.state.value2 === '1'}
                                                            onChange={this.handleChange2}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            <b>{this.checkbox_check2(this.state.value2)}</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านมีประวัติการผ่าตัด มาก่อนหรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value3='0'
                                                            checked={this.state.value3 === '0'}
                                                            onChange={this.handleChange3}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value3='1'
                                                            checked={this.state.value3 === '1'}
                                                            onChange={this.handleChange3}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            <b>{this.checkbox_check3(this.state.value3)}</b>
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านมีแพลนที่จะมีบุตร หรือ กำลังตั้งครรภ์ก่อนถึงช่วงการแข่งขันหรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value4='0'
                                                            checked={this.state.value4 === '0'}
                                                            onChange={this.handleChange4}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value4='1'
                                                            checked={this.state.value4 === '1'}
                                                            onChange={this.handleChange4}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            {/* <b>{this.checkbox_check4(this.state.value4)}</b> */}
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านมียาที่ต้องทานเป็นประจำหรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value5='0'
                                                            checked={this.state.value5 === '0'}
                                                            onChange={this.handleChange5}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value5='1'
                                                            checked={this.state.value5 === '1'}
                                                            onChange={this.handleChange5}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            <b>{this.checkbox_check5(this.state.value5)}</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านเคยบาดเจ็บ/ เจ็บป่วย จากการเข้าร่วมงานวิ่ง ที่ต้องไปรักษาต่อที่โรงพยาบาลหรือไม่</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value6='0'
                                                            checked={this.state.value6 === '0'}
                                                            onChange={this.handleChange6}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value6='1'
                                                            checked={this.state.value6 === '1'}
                                                            onChange={this.handleChange6}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            {/* <b>{this.checkbox_check6(this.state.value6)}</b> */}
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านออกกำลังกายสม่ำเสมอหรือไม่ (อย่างน้อย 1-2 ครั้ง ต่อสัปดาห์)</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value7='0'
                                                            checked={this.state.value7 === '0'}
                                                            onChange={this.handleChange7}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value7='1'
                                                            checked={this.state.value7 === '1'}
                                                            onChange={this.handleChange7}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            {/* <b>{this.checkbox_check7(this.state.value7)}</b> */}
                                        </div>
                                        <div className="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>ท่านเคยมีอาการเจ็บแน่นหน้าอก ใจสั่น เหนื่อยง่ายผิดปกติ หน้ามืด ขณะออกกำลังกายหรือไม่?</label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' ไม่มี'
                                                            name='checkboxRadioGroup'
                                                            value8='0'
                                                            checked={this.state.value8 === '0'}
                                                            onChange={this.handleChange8}
                                                        />
                                                    </Form.Field>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Field>
                                                        <Checkbox
                                                            radio
                                                            label=' มี'
                                                            name='checkboxRadioGroup'
                                                            value8='1'
                                                            checked={this.state.value8 === '1'}
                                                            onChange={this.handleChange8}
                                                        />
                                                    </Form.Field>
                                                </div>
                                            </div>
                                            {/* <b>{this.checkbox_check8(this.state.value8)}</b> */}
                                        </div>
                                    </div>
                                    <br></br>
                                    <div class="modal-footer">
                                            <a class="btn btn-primary  btn-main-md" href="#souvenir_shirt" data-toggle="tab">ถัดไป</a>
                                    </div>
                                </div>
                                <div class="tab-pane" id="souvenir_shirt">
                                    <div className="row">
                                        <div class="col-md-4">
                                            <div class="form-group input-group-sm">
                                                <label>เคยลงงานแข่งมาก่อนหรือไม่</label><span class="text-danger"> *</span>
                                                <select name="shirt_size" class="form-control" value={this.state.shirt_size}  onChange={this.onChangeHandle}>
                                                        <option value="XS">XS</option>
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                        <option value="XXL">XXL</option>
                                                        <option value="XXXL">XXXL</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-success" onClick={this.profilecreate}> บันทึก</button>.
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}