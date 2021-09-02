import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  Container,
  Form,
  Dropdown
} from "react-bootstrap";
import DropdownList from "../../Components/Dropdown";
import firebase from "../../firebase"

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: {
        name: "",
        type: "",
        symbol: "",
        date: "",
        isActive: true
      },
      items: [],
      nameError: "",
      iso4217CodeError: "",
      symbolError: "",
      subunitError: ""
    };
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      value: {
        ...this.state.value,
        [name]: value
      }
    });
  };

  handleClick = (value) => {
    this.setState({
      value: {
        ...this.state.value,
        type: value
      }
    });
  };
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit = (e) => {
    e.preventDefault();
    const itemRef = firebase.database().ref('items');
    const item = {
      Date: this.state.value.date,
      Type: this.state.value.type,
      Event_Name: this.state.value.name
    }
    itemRef.push(item);
    this.setState({
      value: {
        name: "",
        iso4217Code: "",
        symbol: "",
        subunit: "",
        isActive: true
      },
      nameError: "",
      iso4217CodeError: "",
      symbolError: "",
      subunitError: ""
    });
    
  };

  closeModel = () => {
    this.setState({
      value: {
        name: "",
        iso4217Code: "",
        symbol: "",
        subunit: "",
        isActive: true
      },
      nameError: "",
      iso4217CodeError: "",
      symbolError: "",
      subunitError: ""
    });
    this.props.AddModalClose();
  };

  render() {
    const { eventTypeList } = this.props;
    return (
      <div>
        <Modal
          // className="bgColor"
          show={this.props.show}
          onHide={this.closeModel}
          animation={false}
          size="lg"
          backdrop="static"
          className="detailModal"
        >
          <Modal.Header
            style={{ fontSize: "35px", backgroundColor: "#f0f3f5" }}
            closeButton
          >
            <Modal.Title>
              <span style={{ fontSize: "20px" }}>Add Event</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div>
                      <Form.Group controlId="name">
                        <Form.Label>Event Name </Form.Label>
                        <Form.Control
                          type="text"
                          autoComplete="off"
                          name="name"
                          onChange={this.onChange}
                          value={this.state.value.name}
                        />
                        <div className="errStyle">{this.state.nameError}</div>
                      </Form.Group>
                    </div>
                    <div>
                      <Form.Group controlId="symbol">
                        <Form.Label> Event Type </Form.Label>

                        <DropdownList
                          handleClick={this.handleClick}
                          eventTypeList={eventTypeList && eventTypeList}
                        />
                        <div className="errStyle">{this.state.symbolError}</div>
                      </Form.Group>
                    </div>

                    <div>
                      <Form.Group controlId="date">
                        <Form.Label> Date Picker </Form.Label>
                        <Form.Control
                          type="date"
                          autoComplete="off"
                          name="date"
                          onChange={this.onChange}
                          value={this.state.value.date}
                        />
                        <div className="errStyle">{this.state.symbolError}</div>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>{" "}
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#f0f3f5" }}>
            <Button type="submit" onClick={this.submit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddEvent;
