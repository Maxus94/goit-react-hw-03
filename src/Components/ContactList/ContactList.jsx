import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
