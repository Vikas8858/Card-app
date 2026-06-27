
function Form({ formData, setFormData, handleGenerate }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleGenerate();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="father"
        placeholder="Father Name"
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        onChange={handleChange}
      />

      <input
        type="text"
        name="pan"
        placeholder="ABCDE1234F"
        onChange={handleChange}
      />

      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        onChange={handleChange}
      />

      <button type="submit">
        Generate Card
      </button>
    </form>
  );
}

export default Form;