import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadS3 from './utility/UploadS3';

export default class ClientItems extends Component {

  state = {
    isEditMode: false,
    phone: this.props.phone,
    mail: this.props.mail,
    id: this.props.id,
    firstName: this.props.name,
    deliveryAddress: this.props.deliveryAddress,
    lastName: this.props.lastName,
    receipts: this.props.receipts
  }

  handleClientEdit = event => {
    event.preventDefault();
    console.log(this.props)
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    console.log(this.state)
    this.props.handleUpdateclient(this.state.id,this.state.phone,this.state.mail,this.state.firstName, this.state.deliveryAddress,this.state.lastName,this.state.receipts);
  }
  onAddclientMailChange = event => this.setState({ "mail": event.target.value } );
  onAddclientNameChange = event => this.setState({ "firstName": event.target.value });
  onAddclientIdChange = event => this.setState({"id": event.target.value });
  onAddclientDeliveryAddressChange = event => this.setState({"deliveryAddress": event.target.value });
  onAddclientLastNameChange = event => this.setState({ "lastName": event.target.value });
  onAddclientPhoneChange = event => this.setState({ "phone": event.target.value } );

  onAddclientReceipts = (event,index) => {
    for(let i; i<this.state.receipts.length;i++){
      if(i == index){
        this.state.receipts[i] = event.target.value;
      }
    }
  }

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/admin" onClick={this.handleClientEdit} className="client-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            {/* <button onClick={event => this.props.handleDeleteclient(this.props.id, event)} className="delete"></button>*/}
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit client</p>
                    <div className="control">
                      <p className="client-id">Name:</p>
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.firstName}
                        onChange={this.onAddclientNameChange}
                      />
                    </div>
                    <p className="client-id">Last Name:</p>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Last Name"
                        value={this.state.lastName}
                        onChange={this.onAddclientLastNameChange}
                      />
                    </div>
                    <div className="control">
                      <p className="client-id">Id:</p>
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter id"
                        value={this.state.id}
                        onChange={this.onAddclientIdChange}
                      />
                    </div>
                      <p className="client-id">Phone:</p>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Phone"
                        value={this.state.phone}
                        onChange={this.onAddclientPhoneChange}
                      />
                    </div>
                      <p className="client-id">Mail:</p>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Mail"
                        value={this.state.mail}
                        onChange={this.onAddclientMailChange}
                      />
                    </div>
                    <div className="control">
                      <p className="client-id">Address:</p>
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Address"
                        value={this.state.deliveryAddress}
                        onChange={this.onAddclientDeliveryAddressChange}
                      />
                    </div>
                    <div className="control">
                      <p className="client-id">Receipts:</p>
                      {this.state.receipts.map((receipt,index) =>                         
                        <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Receipt"
                        value={receipt}
                        onChange={this.onAddclientReceipts(index)}
                      />)
                      }                      
                    </div>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
            <div>
              <p className="client-id">Id: { this.props.id }</p>
              <p className="client-id">First Name: { this.props.name}</p>
              <p className="client-id">Last Name: { this.props.lastName}</p>
              <p className="client-id">Phone: { this.props.phone}</p>
              <p className="client-id">Mail: { this.props.mail}</p>
              <p className="client-id">Delivery Address: { this.props.deliveryAddress}</p>
            </div>
            </div> 
        }
      </div>
    )
  }
}
