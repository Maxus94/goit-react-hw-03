const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
