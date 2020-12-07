import React, { Component, Fragment } from 'react';
import axios from "axios";
import ClientItems from './ClientItems';
const config = require('../config.json');

export default class ClientAdmin extends Component {

  state = {
    newclient: { 
      phone: "",
      mail: "",
      id: "",
      firstName: "",
      deliveryAddress: "",
      lastName: "",
      receipts: [
        {
          quantity: 0,
          productName: "",
          date: "",
          total: 0
        }]
    },
    clients: []
  }

  handleAddclient = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway add client endpoint here

    try {
      const params = {
        phone: this.state.newclient.phone,
        mail: this.state.newclient.mail,
        id: this.state.newclient.id,
        firstName: this.state.newclient.firstName,
        deliveryAddress: this.state.newclient.deliveryAddress,
        lastName: this.state.newclient.lastName,
        receipts: this.state.newclient.receipts
      };
      await axios.post(`${config.api.invokeUrl}/clients`, params);
      this.setState({ clients: [...this.state.clients, this.state.newclient] });
      this.setState({ newclient: { 
        phone: "",
        mail: "",
        id: "",
        firstName: "",
        deliveryAddress: "",
        lastName: "",
        receipts: [
          {
            quantity: 0,
            productName: "",
            date: "",
            total: 0
          }]}});
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  handleUpdateclient = async (id,phoneEnt,mailEnt,nameEnt,deladdressEnt,lnameEnt) => {
    // add call to AWS API Gateway update client endpoint here
    try {
      const params = {
        phone: this.state.newclient.phone,
        mail: this.state.newclient.mail,
        id: this.state.newclient.id,
        firstName: this.state.newclient.firstName,
        deliveryAddress: this.state.newclient.deliveryAddress,
        lastName: this.state.newclient.lastName,
        receipts: this.state.newclient.receipts
      };
      await axios.patch(`${config.api.invokeUrl}/clients`, params);
      const clientToUpdate = [...this.state.clients].find(client => client.id === id);
      const updatedclients = [...this.state.clients].filter(client => client.id !== id);
      clientToUpdate.Phone = phoneEnt;
      clientToUpdate.Mail = mailEnt;
      clientToUpdate.FirstName = nameEnt;
      clientToUpdate.DeliveryAddress = deladdressEnt;
      clientToUpdate.LastName = lnameEnt;
      updatedclients.push(clientToUpdate);
      this.setState({clients: updatedclients});
    }catch (err) {
      console.log(`Error updating client: ${err}`);
    }
  }

  /*handleDeleteclient = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete client endpoint here
    try {
      await axios.delete(`${config.api.invokeUrl}/clients`);
      const updatedclients = [...this.state.clients].filter(client => client.id !== id);
      this.setState({clients: updatedclients});
    }catch (err) {
      console.log(`Unable to delete client: ${err}`);
    }
  }*/

  fetchclients = async () => {
    // add call to AWS API Gateway to fetch clients here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/clients`);
      const clients = res.data;
      this.setState({ clients: clients });
      console.log(this.state.clients)
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }
  onAddclientPhoneChange = event => this.setState({ newclient: { ...this.state.newclient.contactInformation, phone: event.target.value } });
  onAddclientMailChange = event => this.setState({ newclient: { ...this.state.newclient.contactInformation, mail: event.target.value } });
  onAddclientNameChange = event => this.setState({ newclient: { ...this.state.newclient, firstName: event.target.value } });
  onAddclientIdChange = event => this.setState({ newclient: { ...this.state.newclient, id: event.target.value } });
  onAddclientDeliveryAddressChange = event => this.setState({ newclient: { ...this.state.newclient, deliveryAddress: event.target.value } });
  onAddclientLastNameChange = event => this.setState({ newclient: { ...this.state.newclient, lastName: event.target.value } });

  componentDidMount = () => {
    this.fetchclients();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Clients Admin View</h1>
            <p className="subtitle is-5">Add and edit clients using the form below:</p>
            <br />
            <div className="rows">
              <div className="row is-one-third">
                <form onSubmit={event => this.handleAddclient(this.state.newclient.id, event)}>
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter name"
                        value={this.state.newclient.firstName}
                        onChange={this.onAddclientNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Last Name"
                        value={this.state.newclient.lastName}
                        onChange={this.onAddclientLastNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter id"
                        value={this.state.newclient.id}
                        onChange={this.onAddclientIdChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Phone"
                        value={this.state.newclient.phone}
                        onChange={this.onAddclientPhoneChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Mail"
                        value={this.state.newclient.mail}
                        onChange={this.onAddclientMailChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Enter Delivery Address"
                        value={this.state.newclient.deliveryAddress}
                        onChange={this.onAddclientDeliveryAddressChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-primary is-medium">
                        Add client
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-two-thirds">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                      {console.log(this.state.clients)}{ 
                      this.state.clients.map((client) =>                         
                        <ClientItems
                          isAdmin={true}
                          handleUpdateclient={this.handleUpdateclient}
                          name={client.FirstName}
                          lastName={client.LastName}
                          id={client.Id}
                          phone={client.Phone}
                          mail={client.Mail}
                          deliveryAddress={client.DeliveryAddress}
                          key={client.Id}
                        />)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
