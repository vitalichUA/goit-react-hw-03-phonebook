import 'modern-normalize';
import { Component } from "react";
import { Container} from './components/ui/Container.styled';
import { Title } from 'components/ui/Title.styled';
import { MyForm } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const cont = localStorage.getItem('contacts');
    const contParse = JSON.parse(cont);

    if (contParse) {
      this.setState({contacts: contParse})
    }
 }


  componentDidUpdate(prevProps, prevState) {
    const nextCont = this.state.contacts;
    const pervCont = prevState.contacts;

    if (nextCont !== pervCont) {
      localStorage.setItem('contacts', JSON.stringify(nextCont))
    }
  }
  
  

  validateContact = (data) => {
      const normalizedValue = data.name.toLowerCase();
      const result = this.state.contacts.find((item) => item.name.toLowerCase().includes(normalizedValue));
      return result;
  }

  handlerFilter = (evt) => {
    this.setState({
    filter: evt.target.value,
    })
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }))
  }

  handlerSubmit = (data) => {
    if (this.validateContact(data)) {
      alert(`${data.name} already exist`);
    } else {
      this.setState((prevState) => ({
          contacts: [...prevState.contacts, data],
      }))
    }
  }

  render() {
    return (
      <Container>
        <Title>Contact App</Title>
        <MyForm onSubmit={this.handlerSubmit} />
        <Title>Search by name</Title>
        <Filter value={this.state.filter} onChange={this.handlerFilter} />
        <ContactsList value={this.state.filter} options={this.state.contacts} onClickDelete={this.deleteContact}/>
      </Container>)
  }
}
