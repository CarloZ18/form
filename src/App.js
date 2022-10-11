import "./index.css";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { SignUpForm } from "./Components/Form";
import  validation  from "./utils/validation";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formComplete, setFormComplete] = useState(false);

  const handleDate = (e) => {
    if (currentDate) setCurrentDate(e);
  };

  useEffect(() => {
    if (formComplete === true) {
      Swal.fire({
        icon: "success",
        title: "Successfully registered",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [formComplete]);

  return (
    <div className="App">
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            dateOfBirth: "",
            gender: "",
            paymentMethod: "Paypal",
            cardNumber: "",
            cardCvc: "",
            cardDate: currentDate,
            terms: false,
          }}

          validate={validation}

          onSubmit={(values, { resetForm }) => {
            resetForm();
            setFormComplete(true);
            console.log(values);
            setTimeout(() => setFormComplete(false), 2000);
          }}
        >
          {({ errors }) => (
            <SignUpForm
              handleDate={handleDate}
              currentDate={currentDate}
              errors={errors}
            />
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
