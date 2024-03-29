import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Event extends Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.props.time,
        title: this.props.title
      };
    }
  
    render() {
      return (
        <React.Fragment>
          <div className="media mt-1">
            <h3 className="h3-responsive font-weight-bold mr-3">
              {this.props.time}
            </h3>
            <div className="media-body mb-3 mb-lg-3">
              <MDBBadge
                tag="a"
                onClick={() => this.props.onDelete(this.props.id)}
                color="danger"
                className="ml-2 float-right" >
                <MDBIcon icon="times"></MDBIcon>
              </MDBBadge>
              <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
              <hr className="hr-bold my-2" />
              {this.props.location && (
                <React.Fragment>
                  <p className="font-smaller mb-0">
                    <MDBIcon icon="location-arrow" /> {this.props.location}
                  </p>
                </React.Fragment>
              )}
            </div>
          </div>
          {this.props.description && (
            <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
              {this.props.description}
            </p>
          )}
        </React.Fragment>
      );
    }
  }