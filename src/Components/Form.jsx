// function Form({ data, setData }) {

//   const handleChange = (e) => {

//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });

//   };

//   return (

//     <div className="form">

//       <input
//         type="text"
//         placeholder="Enter Name"
//         name="name"
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         placeholder="Father Name"
//         name="father"
//         onChange={handleChange}
//       />

//       <input
//         type="date"
//         name="dob"
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         placeholder="PAN Number"
//         name="pan"
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         placeholder="Photo URL"
//         name="photo"
//         onChange={handleChange}
//       />

//     </div>

//   );
// }

// export default Form;



function Form({ formData, setFormData, handleGenerate }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh nahi hoga
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