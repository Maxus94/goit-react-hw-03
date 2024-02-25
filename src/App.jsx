import { Children, useState } from "react";

import ContactList from "./Components/ContactList/ContactList";

import "./App.css";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");
  function changeFilter(filterText) {
    setFilter(filterText);
  }

  function filterContacts(contacts) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  //let filteredContacts = contacts;
  //  if (filter) {
  //filteredContacts = filterContacts(contacts);
  //  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox changeFilter={changeFilter} filter={filter} />
      <ContactList contacts={filterContacts(contacts)} filter={filter} />
    </div>
  );
}

export default App;
