function PanCard({ data }) {

  return (

    <div className="pan-card">

      <div className="heading">
        <h3>INCOME TAX DEPARTMENT</h3>
        <p>Government of India</p>
      </div>

      <div className="body">

        <img
          src={
            data.photo ||
            "https://via.placeholder.com/90"
          }
          alt=""
        />

        <div>

          <h4>{data.name || "FULL NAME"}</h4>

          <p>
            <strong>Father :</strong>
            {data.father || "Father Name"}
          </p>

          <p>
            <strong>DOB :</strong>
            {data.dob || "DD/MM/YYYY"}
          </p>

          <h3>{data.pan || "ABCDE1234F"}</h3>

        </div>

      </div>

    </div>

  );

}

export default PanCard;