import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = () => {
  const displayErrorsSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    occasion: Yup.string().required("Required"),
    guests: Yup.number()
      .required("Required")
      .moreThan(0, "Minimum 1")
      .lessThan(11, "Maximum 10"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      guests: "",
      phone: "",
      date: "",
      time: "",
      occasion: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
    validationSchema: displayErrorsSchema,
  });

  return (
    <>
     
      <section className="mx-3 relative z-10">
        <h1 className="text-center">Reservation</h1>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="inline-flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-red-500">{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-red-500">{formik.errors.lastName}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-red-500">{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              name="guests"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              onChange={formik.handleChange}
              value={formik.values.guests}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.guests && formik.errors.guests ? (
              <p className="text-red-500">{formik.errors.guests}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="date">Date of Reservation</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              className="border py-2 border-solid border-black rounded-lg"
            />
            {formik.touched.date && formik.errors.date ? (
              <p className="text-red-500">{formik.errors.date}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              className="border py-2 border-solid border-black rounded-lg"
              value={formik.values.time}
              name="time"
              onChange={formik.handleChange}
            >
              <option value="">select time</option>
              <option value={"17:00"}>17:00</option>
              <option value={"18:00"}>18:00</option>
              <option value={"19:00"}>19:00</option>
              <option value={"20:00"}>20:00</option>
              <option value={"21:00"}>21:00</option>
              <option value={"22:00"}>22:00</option>
            </select>
            {formik.touched.time && formik.errors.time ? (
              <p className="text-red-500">{formik.errors.time}</p>
            ) : null}
          </div>
          <div className="inline-flex flex-col">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            className="border py-2 border-solid border-black rounded-lg"
            value={formik.values.occasion}
            name="occasion"
            onChange={formik.handleChange}
          >
            <option value="">select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <p className="text-red-500">{formik.errors.occasion}</p>
          ) : null}
        </div>
        </div>
       
        <div className="inline-flex flex-col w-full mt-5">
          <label htmlFor="message">Any other requests</label>
          <textarea
            name="message"
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            rows={5}
            className="border py-2 border-solid border-black rounded-lg w-full"
          />
        
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="bg-primary text-white px-3 py-2 rounded-lg"
          >
            Make Reservation
          </button>
        </div>
      </section>

    </>
  );
};

export default BookingForm;
