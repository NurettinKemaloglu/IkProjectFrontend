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
  Col,
  Table,


} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";
import React from "react";
import Index from "views/Index";
import { event } from "jquery";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";



class UserHarcamaGeçmiş extends React.Component {
  constructor(props) {
      super(props);
      

      this.state = {
          users: [],
          isOpen:false 
      }

      this.toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
      this.handleDatas = () => {
        axios.get("http://localhost:8081/api/v1/fmss/expense")
          .then(value => {
              this.setState({
                  users: value.data
              })

              console.log(value.data)
          })
      }
  }

  componentDidMount() {
      this.handleDatas()
  }

  render() {
      return (
          <>
          <Modal isOpen={this.state.isOpen} toggle={this.toggle} style={{marginTop: '30vh', minWidth: '50vw', maxHeight: '70vh'}}>
          <ModalHeader toggle={this.toggle}>Harcamalar</ModalHeader>
                    <ModalBody style={{overflowY: 'auto', maxHeight: '30vh'}}>
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
                              Expense ıd
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-userıd"
                              placeholder="
                              Expense id  giriniz"
                              type="text"
                              onChange={(event) => this.setState({id:event.target.value})}
                            
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


                             >
                           </Input>
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
                          
                         }

                      
                        console.log(data)
                        axios.put("http://localhost:8081/api/v1/fmss/expense/".concat(this.state.id),data)
                        .then(response =>{
                          alert(response.data)
                        }).catch(reason => {
                          alert(reason)

                        })
                      }}>Harcama Ekle
                      
                 </Button>
                  </div>
                  </div>
                  
                  
                  </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Okey</Button>
                    </ModalFooter>
          </Modal>
              <UserHeader/>
              {/* Page content */}
            
                                      <Table className="m-3 bg-white">
                                          <thead>
                                          <tr>
                                              <th className="text-danger">#</th>
                                              <th className="text-danger">Ad</th>
                                              <th className="text-danger">Soyad</th>
                                              <th className="text-danger">Harcama Türü</th>
                                              <th className="text-danger">Harcama Tutarı</th>
                                              <th className="text-danger">Harcama Tarihi</th>
                                              <th className="text-danger">Kdv Oranı</th>
                                              <th className="text-danger">Harcama Açıklaması</th>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          {this.state.users.map((value, index) => (
                                              <tr>
                                                  <th scope="row">
                                                      {value.id}
                                                  </th>
                                                  <td>
                                                      {value.userName}
                                                  </td>
                                                  <td>s
                                                      {value.lastName}
                                                  </td>
                                                  <td>
                                                      {value.typeOfExpenditure}
                                                  </td>
                                                  <td>
                                                      {value.spendingAmounut}
                                                  </td>
                                                  <td>
                                                      {value.receiptDate}
                                                  </td>
                                                  <td>
                                                      {value.vatPercent}
                                                  </td>
                                                  <td>
                                                      {value.spendingStatement}
                                                  </td>
                                                  <td>
                                                  <Button color="danger" className="text-center" onClick={(event) =>{
                                                    axios.delete('http://localhost:8081/api/v1/fmss/expense/'.concat(value.id)).then(response => {
                                                        this.handleDatas()
                                                    }).catch(reason =>{
                                                      console.log(reason)
                                                    })
                                                  }}>
                                                    Sil
                                                 </Button>
                                                 <Button color="primary" className="text-center" onClick={(event)=>{
                                                    this.toggle()

                            
                                                 }}>
                                                            Güncelle
                                                        </Button>
                                                  </td>
                                              </tr>
                                          ))}
                                          </tbody>
                                      </Table>

          </>
      );
  }

};

export default UserHarcamaGeçmiş;