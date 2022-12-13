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


class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isOpen:false
        }
        this.toggle =()=>{
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        this.handleDatas =() => {
            axios.get("http://localhost:8081/api/v1/fmss/user")
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
            <ModalHeader toogle={this.toggle}>Kullanıcılar</ModalHeader>
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
                              User id
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
                            >
                              </Input>
                          </FormGroup>
                        </Col>
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

                  </div>
                  <div>
                    <Button variant ="success" type="submit" block onClick={(event)=>{
                         let data = {
                            title:this.state.title,
                            role:this.role.state.role,
                            email:this.email.state.email,
                            salary:this.salary.state.salary
                         }
                         console.log(data)
                         axios.put("http://localhost:8081/api/v1/fmss/user/".concat(this.state.id),data)
                         .then(response =>{
                           alert(response.data)
                         }).catch(reason => {
                           alert(reason)
 
                         })
                       }}>Kullanıcı Güncelle
                       
                  </Button>
                  </div>
                  </div>
                  </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary"onClick={this.toggle}>Okey</Button>
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
                                                <th className="text-danger">E-mail</th>
                                                <th className="text-danger">Tc Kimlik</th>
                                                <th className="text-danger">Başlangıç Tarihi</th>
                                                <th className="text-danger">Maaş</th>
                                                <th className="text-danger">Title</th>
                                                <th className="text-danger">Doğum Tarihi</th>
                                                <th className="text-danger">Seviye</th>
                                                <th className="text-danger">Departman</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.state.users.map((value, index) => (
                                                <tr>
                                                    <th scope="row">
                                                        {value.id}
                                                    </th>
                                                    <td>
                                                        {value.name}
                                                    </td>
                                                    <td>
                                                        {value.lastName}
                                                    </td>
                                                    <td>
                                                        {value.email}
                                                    </td>
                                                    <td>
                                                        {value.tckn}
                                                    </td>
                                                    <td>
                                                        {value.userDateOfStart}
                                                    </td>
                                                    <td>
                                                        {value.salary}
                                                    </td>
                                                    <td>
                                                        {value.title}
                                                    </td>
                                                    <td>
                                                        {value.birthDate}
                                                    </td>
                                                    <td>
                                                        {value.level}
                                                    </td>
                                                    <td>
                                                        {value.department} 
                                                    </td>
                                                    <td>
                                                    <Button color="danger" className="text-center" onClick={(event)  =>{
                                                        axios.delete('http://localhost:8081/api/v1/fmss/user/'.concat(value.id)).then
                                                        (response =>{
                                                            this.handleDatas()
                                                        }).catch(reason => alert(reason))
                                                    }}>
                                                        Sil
                                                    </Button>
                                                    </td>
                                                    <td>
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

export default UserList;
  