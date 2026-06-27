// import { useState } from "react";
// import Form from "./components/Form";
// import PanCard from "./components/PanCard";
// import "./App.css";

// function App() {

//   const [data, setData] = useState({
//     name: "",
//     father: "",
//     dob: "",
//     pan: "",
//     photo: ""
//   });

//   return (
//     <div className="container">

//       <h1>PAN Card Generator</h1>

//       <Form data={data} setData={setData} />

//       <PanCard data={data} />

//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Form from "./components/Form";
import PanCard from "./components/PanCard";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    father: "",
    dob: "",
    pan: "",
    photo: "",
  });

  const [cardData, setCardData] = useState(null);

  const handleGenerate = () => {
    setCardData(formData);
  };

  return (
    <div className="container">
      <h1>PAN Card Generator</h1>

      <Form
        formData={formData}
        setFormData={setFormData}
        handleGenerate={handleGenerate}
      />

      {cardData && <PanCard data={cardData} />}
    </div>
  );
}

export default App;