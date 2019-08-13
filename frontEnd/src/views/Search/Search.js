import React, { Component } from 'react';
import { ServiceUrl } from '../../config.js'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Badge, Pagination, PaginationItem, PaginationLink, Table 
} from 'reactstrap';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.searchDate = this.searchDate.bind(this);
    this.account = 0
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      showData:[]
    };
  }

  toggle() {
    this.setState({collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  searchDate(){
    console.log(this.account)
    console.log(ServiceUrl)
    axios.post( `${ServiceUrl}/searchDate`,
    { account:this.account},
      {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json'
      },
    }).then(resp => {
        console.log(resp.data)
        this.setState({
          showData:resp.data.data
        },console.log(this.state.showData))
    
      //   this.CheackSelectedInfo=resp.data
      // if (resp.data != null) {
      //   console.log("the number of peoples", resp.data.length)
      //   this.allSelectedArr.push(false)
      //   this.setState({
      //     info: resp.data,
      //     selectedButton:"全选"
      //   }, this.handleGetTotalpage(serachtype,this.searchPeopleInfo))
      // } else {
      //   console.log("no people!")
      //   this.searchPeopleInfo= "" 
      //     this.setState({
      //       info: [],
      //       danger:true,
      //       dangernotice: "查询结果为空"
      //     })
      // }
    
  })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row >
        <Col xs="12" lg="9">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> 到期时间
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr fix>
                    <th>QQ账号</th>
                    <th>会员到期时间</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.showData.map(function (each, idx) {
                      return(
                        <tr key={idx}>
                          <td >{each['account']}</td>
                          <td >{each['date'].split('-')[0]}年{each['date'].split('-')[1]}月{each['date'].split('-')[2]}日</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card>
              <CardHeader>
                <strong>查找到期时间</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="QQ">QQ</Label>
                  <Input type="text" id="company" onChange={event => (this.account =event.target.value)} placeholder="请输入你的QQ账号" />
                </FormGroup>
              </CardBody>
              <CardFooter>
                <span style={{ marginLeft: '12rem' }}></span>
                <Button type="submit" size="sm" onClick={this.searchDate} color="primary"><i className="fa fa-dot-circle-o"></i> 查找</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
