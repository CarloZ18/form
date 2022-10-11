import "./index.css";
import { Formik} from "formik";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { SignUpForm } from "./Components/Form";


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
        timer:2000
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
          validate={(values) => {
            let errors = {};

            //Name validation
            if (!values.name) {
              errors.name = "Please enter your name";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = "The name can only contain letters and spaces";
            }

            //Email validation
            if (!values.email) {
              errors.email = "Please enter your email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email =
                "Mail can only contain letters, numbers, periods, hyphens and underscores";
            }

            //Password validation
            if (!values.password) {
              errors.password = "Please enter your password";
            } else if (
              !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
                values.password
              )
            ) {
              errors.password =
                "The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter";
            }

            //Date of Birth validation
            if (!values.dateOfBirth) {
              errors.dateOfBirth = "Please enter your date of birth";
            } else if (
              !/^(?:3[01]|[12][0-9]|0?[1-9])([/])(0?[1-9]|1[1-2])\1\d{4}$/.test(
                values.dateOfBirth
              )
            ) {
              errors.dateOfBirth = "Invalid digit";
            }

            //Gender validation
            if (!values.gender) {
              errors.gender = "Please enter your gender";
            }

            //Card number validation
            if (!values.cardNumber) {
              errors.cardNumber = "Please enter your card number";
            } else if (!/^[0-9]{16}$/.test(values.cardNumber)) {
              errors.cardNumber = "Invalid digit";
            }

            //Card cvc validation
            if (!values.cardCvc) {
              errors.cardCvc = "Please enter your card cvc";
            } else if (!/^[0-9]{3}$/.test(values.cardCvc)) {
              errors.cardCvc = "Invalid digit";
            }

            //Terms validation
            if (!values.terms) {
              errors.terms = "Please accept the terms";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setFormComplete(true);
            console.log(values);
            setTimeout(() => setFormComplete(false), 2000);
          }}
        >
          {({ errors }) => (
          <SignUpForm handleDate={handleDate} currentDate={currentDate} errors={errors}/>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
