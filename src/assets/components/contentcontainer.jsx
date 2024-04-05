import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export function ContentContainer() {
  const location = useLocation();
  const formValuess = location.state?.formValues || {};

  const [formValuesArray, setFormValuesArray] = useState([]);

  useEffect(() => {
    if (Object.keys(formValuess).length !== 0) {
      setFormValuesArray((prevArray) => [...prevArray, formValuess]);
      console.log(formValuesArray);
    }
  }, [formValuess]);

  return (
    <>
      <div>
        {formValuesArray.map((formData, index) => (
          <div className="card" key={index}>
            <button
              onClick={(e) => {
                // Handle delete
              }}
              className="deletebtn"
            >
              Delete
            </button>
            <div className="card-body">
              <h5 className="card-title">Book details {formData.Name}</h5>
              <p className="card-text">BookName : {formData.BookName}</p>
              <p className="card-text"> AuthorName: {formData.AuthorName}</p>
              <p className="card-text">
                {" "}
                PublishedDate: {formData.PublishedDate}
              </p>
              <p className="card-text"> Isbnnumber: {formData.Isbnnumber}</p>
              <button
                onClick={(e) => {
                  // Handle edit name
                }}
                className="editname"
              >
                Edit Name
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
