import {
  faKey,
  faUser,
  faEnvelope,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
export const SignUpForm = ({handleDate,currentDate, errors}) => {
  return (
    <Form>
      <h1>Sign up</h1>
      <div className="row">
        <h4>Account</h4>
        <div className="input-group input-group-icon">
          <Field
            className="input-formik"
            type="text"
            id="name"
            placeholder="Full Name"
            name="name"
          />
          <ErrorMessage
            name="name"
            component={() => <div className="error">{errors.name}</div>}
          />

          <div className="input-icon">
            <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
          </div>
        </div>

        <div className="input-group input-group-icon">
          <Field
            className="input-formik"
            type="email"
            id="email"
            placeholder="Email adress"
            name="email"
          />
          <ErrorMessage
            name="email"
            component={() => <div className="error">{errors.email}</div>}
          />
          <div className="input-icon">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelope}
            ></FontAwesomeIcon>
          </div>
        </div>

        <div className="input-group input-group-icon">
          <Field
            className="input-formik"
            type="password"
            placeholder="Password"
            name="password"
          />
          <ErrorMessage
            name="password"
            component={() => <div className="error">{errors.password}</div>}
          />
          <div className="input-icon">
            <FontAwesomeIcon className="icon" icon={faKey}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-half">
          <h4>Date of Birth</h4>
          <div className="input-group">
            <div className="col-third">
              <Field
                className="input-formik"
                type="text"
                placeholder="DD/MM/YYYY"
                name="dateOfBirth"
                maxLength={10}
              />
            </div>
          </div>
          <ErrorMessage
            name="dateOfBirth"
            component={() => <div className="error">{errors.dateOfBirth}</div>}
          />
        </div>
        <div className="col-half">
          <h4>Gender</h4>
          <div className="input-group">
            <Field
              className="input-formik"
              id="gender-male"
              type="radio"
              name="gender"
              value="Male"
            />
            <label htmlFor="gender-male">Male</label>
            <Field
              className="input-formik"
              id="gender-female"
              type="radio"
              name="gender"
              value="Female"
            />
            <label htmlFor="gender-female">Female</label>
          </div>
        </div>
        <ErrorMessage
          name="gender"
          component={() => <div className="error">{errors.gender}</div>}
        />
        <div className="row">
          <h4>Payment Details</h4>
          <div className="input-group">
            <Field
              className="input-formik"
              id="payment-method-card"
              type="radio"
              name="paymentMethod"
              value="Credit Card"
            />
            <label htmlFor="payment-method-card">
              <span>
                <FontAwesomeIcon
                  className="icon"
                  icon={faCreditCard}
                ></FontAwesomeIcon>
                Credit Card
              </span>
            </label>
            <Field
              className="input-formik"
              id="payment-method-paypal"
              type="radio"
              name="paymentMethod"
              value="Paypal"
            />
            <label htmlFor="payment-method-paypal">
              <span>
                <FontAwesomeIcon
                  className="icon"
                  icon={faCreditCard}
                ></FontAwesomeIcon>
                Paypal
              </span>
            </label>
          </div>
          <div className="input-group input-group-icon">
            <Field
              className="input-formik"
              type="text"
              placeholder="Card Number"
              name="cardNumber"
              maxLength={16}
            />
            <ErrorMessage
              name="cardNumber"
              component={() => <div className="error">{errors.cardNumber}</div>}
            />
            <div className="input-icon">
              <FontAwesomeIcon
                className="icon"
                icon={faCreditCard}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="col-half">
            <div className="input-group input-group-icon">
              <Field
                className="input-formik"
                type="text"
                placeholder="Card CVC"
                name="cardCvc"
                maxLength={3}
              />
              <ErrorMessage
                name="cardCvc"
                component={() => <div className="error">{errors.cardCvc}</div>}
              />
              <div className="input-icon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faUser}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
          <div className="col-half">
            <DatePicker
              selected={currentDate}
              onChange={handleDate}
              name="cardDate"
              dateFormat="MM/yy"
              showMonthYearPicker
              minDate={new Date()}
              withPortal
            />
          </div>
        </div>
        <div className="row">
          <h4>Terms and Conditions</h4>
          <div className="input-group">
            <Field
              className="input-formik"
              id="terms"
              type="checkbox"
              name="terms"
            />

            <label htmlFor="terms">
              I accept the terms and conditions for signing up to this service,
              and hereby confirm I have read the privacy policy.
            </label>
          </div>
          <ErrorMessage
            name="terms"
            component={() => <div className="error">{errors.terms}</div>}
          />
          <div className="sign-container">
            <button className="sign">Sign up</button>
          </div>
        </div>
      </div>
    </Form>
  );
};
