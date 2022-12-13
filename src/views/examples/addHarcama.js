
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

class addHarcama extends React.Component {
  constructor(props){
    super(props)

    this.handleDatas =() =>{
      axios.post("http://localhost:/api/v1/fmss/expense")
      .then(value => {
        this.setState({
          users: value.data
        })
        console.log(value.data)
      })
    }
    this.state ={
      userid:'',
      typeOfExpenditure:'',
      spendingAmounut:'',
      receiptDate:'',
      vatPercent:'',
      spendingStatement:''
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
                    Harcama Oluştur
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
                              htmlFor="input-harcamatürü"
                            >
                              Harcama Türü
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-level"
                                type="text"
                                placeholder="Harcama Türü"
                                onChange={(event)=>this.setState({typeOfExpenditure:event.target.value}) }

                             >
                          
                            </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6" >
                        <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-harcama-miktarı"
                          >
                            Harcama Miktarı
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-soyisim"
                            placeholder="örn:200"
                            type="harcama-miktarı"
                            onChange={(event)=>this.setState({spendingAmounut:event.target.value}) }

                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6" >
                        <FormGroup>
                        <label
                                    className="form-control-label"
                                    htmlFor="input-fişTarihi"
                                >
                                    Fiş Tarihi
                                </label>
                                <Input

                                    className="form-control-alternative"
                                    id="input-fişTarihi"
                                    type="Date"
                                    onChange={(event)=>this.setState({receiptDate:event.target.value}) }

                                />
                            </FormGroup>
                      </Col>
                      <Col lg="6" >
                        <FormGroup>
                        <label
                              className="form-control-label"
                              htmlFor="input-vergiOranı"
                            >
                              Vergi Oranı
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-level"
                                type="text"
                                placeholder="Vergi Oranı"
                                onChange={(event)=>this.setState({vatPercent:event.target.value}) }
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
                            Harcama Açıklaması
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-maaş"
                            placeholder="***************"
                            type="textarea"
                            onChange={(event)=>this.setState({spendingStatement:event.target.value}) }

                          />
                        </FormGroup>
                      </Col>
                      </Row>
                    </div>
                    <div>
                    <Button variant ="success" type="submit" block onClick={(event)=>{
                         let data = {
                          typeOfExpenditure:this.state.typeOfExpenditure,
                          spendingAmounut:this.state.spendingAmounut,
                          receiptDate:this.state.receiptDate,
                          vatPercent:parseInt(this.state.vatPercent),
                          spendingStatement:this.state.spendingStatement,
                          userid:this.state.userid
                         }

                      
                        console.log(data)
                        axios.post("http://localhost:8081/api/v1/fmss/expense",data)
                        .then(response =>{
                          alert("Harcama Kaydedildi")
                        }).catch(reason => {
                          alert("Harcama kaydedilemedi ! Lütfen alanları doldurunuz !")

                        })
                      }}>Harcama Ekle
                      
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
    
        


export default addHarcama;