const Contact = ({ contact: { id, name, number } }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;