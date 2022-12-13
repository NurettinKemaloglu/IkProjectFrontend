
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

}from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import React from "react";
import axios from "api/axios";
import { event } from "jquery";
class addİzin extends React.Component{
  constructor(props){
    super(props)

    this.handleDatas =() =>{
      axios.post("http://localhost:/api/v1/fmss/permission")
      .then(value => {
        this.setState({
          users: value.data
        })

        console.log(value.data)
      })
    }

    this.state ={
      permissionType: '',
      startingDate:'',
      endDate:'',
      dateOfReturn:'',
      permissionStatement:'',
      totalDays:'',
      userid:''
    }
  }
  render(){
    return (
      <>
      <UserHeader/>
        <Container className="mt-7" fluid>
        <Row>
          <Col>
            <Card className="bg-secondary shadow">  
              <CardBody>
                <Form>
                  <h6  className="heading-small text-muted mb-4">
                    İzin Oluştur
                  </h6>
                  <div className="pl-lg-4">
                  <Row>
                        <Col lg="6" >
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-userId"
                            >
                              User ıd
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-userıd"
                              placeholder="user id  giriniz"
                              type="text"
                              onChange={(event) => this.setState({userid:event.target.value})}
                            
                            >
                              </Input>
                          </FormGroup>
                        </Col>
                        </Row>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6" >
                        <FormGroup>
                        <label
                              className="form-control-label"
                              htmlFor="input-izintürü"
                            >
                              İzin Türü
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-level"
                                type="text"
                                placeholder="İzin Türü"
                                onChange={(event)=> this.setState({permissionType:event.target.value})}
  
                             >
                        
                            </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6" >
                        <FormGroup>
                                  <label
                                      className="form-control-label"
                                      htmlFor="input-dateOfReturn"
                                  >
                                     Dönüş Tarihi
                                  </label>
                                  <Input
  
                                      className="form-control-alternative"
                                      id="input-dateOfReturn"
                                      type="Date"
                                      onChange={(event)=> this.setState({dateOfReturn:event.target.value})}
                                  />
                        </FormGroup>
                      </Col>
                      </Row>  
                      <Row>
                      <Col lg="6" >
                        <FormGroup>
                                  <label
                                      className="form-control-label"
                                      htmlFor="input-startingDate"
                                  >
                                     Başlangıç Tarihi
                                  </label>
                                  <Input
  
                                      className="form-control-alternative"
                                      id="input-startingDate"
                                      type="Date"
                                      onChange={(event)=> this.setState({startingDate:event.target.value})}
                                  />
                        </FormGroup>
                      </Col>
                      <Col lg="6" >
                        <FormGroup>
                                  <label
                                      className="form-control-label"
                                      htmlFor="input-endDate"
                                  >
                                     Bitiş Tarihi
                                  </label>
                                  <Input
  
                                      className="form-control-alternative"
                                      id="input-endDate"
                                      type="Date"
                                      onChange={(event)=> this.setState({endDate:event.target.value})}
                                  />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-izin"
                            >
                              İzin Açıklaması
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-izin"
                              placeholder="lütfen açıklama giriniz"
                              type="textarea"
                              onChange={(event)=> this.setState({permissionStatement:event.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                    
  
                    </div>
                    <div>
                  
                  <Button variant ="success" type="submit" block onClick={(event)=>{
                         let data = {
                          permissionType:this.state.permissionType,
                          startingDate:this.state.startingDate,
                          endDate:this.state.endDate,
                          dateOfReturn:this.state.dateOfReturn,
                          permissionStatement:this.state.permissionStatement,
                          userid:this.state.userid
                         }

                      
                        console.log(data)
                        axios.post("http://localhost:8081/api/v1/fmss/permission",data)
                        .then(response =>{
                          alert("İzin Kaydedildi")
                        }).catch(reason => {
                          alert("İzin Kaydedilemedi ! Lütfen alanları doldurunuz !")

                        })
                      }}>İzin Ekle
                      
                 </Button>
                  </div>
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
  
  export default addİzin;
  
  