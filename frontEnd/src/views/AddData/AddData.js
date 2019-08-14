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

class AddData extends Component {
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
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  searchDate(){
    console.log(this.account)
    axios.post(`${ServiceUrl}/searchDate`,
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
                  <tr>
                    <th>QQ账号</th>
                    <th>会员截止</th>
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
        </Row>
      </div>
    );
  }
}

export default AddData;
