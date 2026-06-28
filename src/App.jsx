import { useState } from "react";
import Form from "./Components/Form";
import PanCard from "./Components/PanCard";
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