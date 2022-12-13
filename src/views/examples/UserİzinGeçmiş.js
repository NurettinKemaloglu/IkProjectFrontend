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
    Table
  
  
  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
  import axios from "axios";
  import React from "react";
  import Index from "views/Index";
  import { event } from "jquery";
  import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

  
  
  
  class UserİzinGeçmiş extends React.Component {
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
        this.handleDatas =() => {
            axios.get("http://localhost:8081/api/v1/fmss/permission")
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
          <ModalHeader toggle={this.toggle}>İzinler</ModalHeader>
                    <ModalBody style={{overflowY: 'auto', maxHeight: '30vh'}}>
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
                              Permission id
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-userıd"
                              placeholder="user id  giriniz"
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
                         }

                      
                        console.log(data)
                        axios.put("http://localhost:8081/api/v1/fmss/permission/".concat(this.state.id),data)
                        .then(response =>{
                          alert(response.data)
                        }).catch(reason => {
                          alert(reason)

                        })
                      }}>İzin Güncelle
                      
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
                                                <th className="text-danger">İzin Başlangıcı</th>
                                                <th className="text-danger">İzin Bitişi</th>
                                                <th className="text-danger">İzin Türü</th>
                                                <th className="text-danger">Dönüş Tarihi</th>
                                                <th className="text-danger">İzin Açıklaması</th>
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
                                                    <td>
                                                        {value.lastName}
                                                    </td>
                                                    <td>
                                                        {value.startingDate}
                                                    </td>
                                                    <td>
                                                        {value.endDate}
                                                    </td>
                                                    <td>
                                                        {value.permissionType}
                                                    </td>
                                                    <td>
                                                        {value.dateOfReturn}
                                                    </td>
                                                    <td>
                                                        {value.permissionStatement}
                                                    </td>
                                                    <td>
                                                        <Button color="danger" className="text-center" onClick={(event) =>{
                                                            axios.delete('http://localhost:8081/api/v1/fmss/permission/'.concat(value.id)).then
                                                            (response =>{
                                                                this.handleDatas()
                                                            }).catch(reaseon => {
                                                                console.log(reaseon)
                                                            })
                                                        }}>
                                                            Sil
                                                        </Button>
                                                        <Button color="primary" className="text-center"  onClick={(event)=>{
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
  
  export default UserİzinGeçmiş;