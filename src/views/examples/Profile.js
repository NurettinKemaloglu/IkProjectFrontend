import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import React from "react";
import axios from "axios";
import { event } from "jquery";

class Profile extends React.Component{
  constructor(props){
    super(props)

    this.handleDatas =() => {
      axios.post("http://localhost:8081/api/v1/fmss/user")
      .then(value => {
          this.setState({
              users: value.data
          })

           console.log(value.data)
      })
      
  }

    this.state = {
      name: '',
      lastName: '',
      email:'',
      tckn:'',
      userDateOfStart:'',
      salary:'',
      title:'',
      department:'',
      birthDate:'',
      role:'',
      level:'',
      city:'',
      phoneNumber:'',
      country:'',
      postCode:'',
      address:''

    }
  }

  render(){
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt-7" fluid>
          <Row>
            <Col>
              <Card className="bg-secondary shadow">  
                <CardBody>
                  <Form>
                    <h6  className="heading-small text-muted mb-4">
                      KULLANICI BİLGİLERİ
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6" >
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              İsim
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="İsminizi giriniz"
                              type="text"
                              onChange={(event) => this.setState({name:event.target.value})}
                            
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-soyisim"
                            >
                              Soyisim
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-soyisim"
                              placeholder="soyisminizi giriniz"
                              type="soyisim"
                              onChange={(event) => this.setState({lastName:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                        <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              E-posta Adresi
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="mail adresinizi giriniz "
                              type="email"
                              onChange={(event) => this.setState({email:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-tc"
                            >
                              Tc No
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-tc"
                              placeholder="***************** "
                              type="tc"
                              onChange={(event) => this.setState({tckn:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-maaş"
                            >
                              Maaş
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-maaş"
                              placeholder="***************"
                              type="text"
                              onChange={(event) => this.setState({salary:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                        <FormGroup>
                                  <label
                                      className="form-control-label"
                                      htmlFor="input-startDate"
                                  >
                                      İşe Başlama Tarihi
                                  </label>
                                  <Input
  
                                      className="form-control-alternative"
                                      id="input-startDate"
                                      type="Date"
                                      onChange={(event) => this.setState({userDateOfStart:event.target.value})}
                                  />
                              </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-unvan"
                            >
                              Unvan
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-unvan"
                              placeholder="Unvan bilginiz"
                              type="select"
                              size="4"
                              onChange={(event) => this.setState({title:event.target.value})}
                            >
                              <option value="" hidden></option>
                              <option>PHP</option>
                              <option>JAVA</option>
                              <option>C</option>
                              <option value="KOTLIN">KOTLİN</option>
                              <option>SQL</option>
                              </Input>
                          </FormGroup>
                          </Col>
                          <Col lg="6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-level"
                              >
                                Seviye
                              </label>
                              <Input
                                  className="form-control-alternative"
                                  id="input-level"
                                  type="select"
                                  placeholder="A-1"
                                  size="6"
                                  onChange={(event) => this.setState({level:event.target.value})}
  
                               >
                              <option value="" hidden></option>
                              <option>J1</option>
                              <option>J2</option>
                              <option>J3</option>
                              <option>M1</option>
                              <option>M2</option>
                              <option>M3</option>
                              <option>S1</option>
                              <option>S2</option>
                              <option>S3</option>
                              </Input>
                            </FormGroup>
                         </Col>
                        <Col lg="6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-role"
                              >
                                Rol
                              </label>
                              <Input
                                  className="form-control-alternative"
                                  id="input-level"
                                  type="select"
                                  placeholder="Kullanıcı"
                                  onChange={(event) => this.setState({role:event.target.value})}
  
                               >
                              <option value="" hidden></option>
                              <option value="user">Kullanıcı</option>
                              <option value="admin">Admin</option>
                              </Input>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="6">
                        <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-role"
                              >
                                Departman
                              </label>
                              <Input
                                  className="form-control-alternative"
                                  id="input-level"
                                  type="select"
                                  placeholder="Kullanıcı"
                                  onChange={(event) => this.setState({department:event.target.value})}
  
                               >
                              <option value="" hidden></option>
                              <option value="3">Muhasebe</option>
                              <option value="1">Developer</option>
                              <option value="2">İnsan Kaynakları</option>
                              </Input>
                            </FormGroup>
                        </Col>
                        <Col lg="6">
                        <FormGroup>
                                  <label
                                      className="form-control-label"
                                      htmlFor="input-birthdate"
                                  >
                                      Doğum Günü
                                  </label>
                                  <Input
  
                                      className="form-control-alternative"
                                      id="input-birthdate"
                                      type="Date"
                                      onChange={(event) => this.setState({birthDate:event.target.value})}
                                  />
                              </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      İLETİŞİM BİLGİLERİ
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Adres
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Mah/Cad/Sok/No:/Daire:/Şehir/Semt"
                              type="text"
                              onChange={(event) => this.setState({address:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Şehir
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="Şehir"
                              type="text"
                              onChange={(event) => this.setState({city:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Ülke
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="Ülke"
                              type="text"
                              onChange={(event) => this.setState({country:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                                Telefon No
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="Tel no"
                              type="text"
                              onChange={(event) => this.setState({phoneNumber:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Posta Kodu
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              type="number"
                              onChange={(event) => this.setState({postCode:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div>
                    <Button color="success" className="mb-4" onClick={(event) => {
                                

                                let data = {
                                    name: this.state.name,
                                    lastName: this.state.lastName,
                                    email: this.state.email,
                                    tckn: this.state.tckn,
                                    salary: parseInt(this.state.salary),
                                    title: this.state.title,
                                    level: this.state.level,
                                    role: this.state.role,
                                    department: this.state.department,
                                    userDateOfStart: this.state.userDateOfStart,
                                    birthDate: this.state.birthDate,
                                    createAddressRequest: {
                                        address: this.state.adres,
                                        city:this.state.city,
                                        country:this.state.country,
                                        postCode:this.state.postCode,
                                        phoneNumber:this.state.phoneNumber,
                                    }
                                }

                                console.log(data)

                                axios.post("http://localhost:8081/api/v1/fmss/user",data)
                                    .then(response => {
                                        alert("Kullanıcı Kaydedildi")
                                    }).catch(reason => {
                                        alert("Kullanıcı Kaydedildi ! Lütfen alanları doldurunuz !")

                                    })
                            }}>Kaydet</Button>
                </div>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Profile;
