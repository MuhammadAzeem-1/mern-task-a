import React, { useState } from "react";
import axios from "axios";

const InputField = ({ label, name, value, onChange }) => (
  <div className="flex flex-col items-start text-[#bfbdbd] gap-2 my-4">
    <label>{label}</label>

    <input
      type="text"
      name={name}
      value={value}
      className="bg-[#e4f4f5] p-4 w-full text-[black]"
      onChange={onChange}
    />
  </div>
);

const Form = () => {
  const [response, setResponse] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    papulation: "",
    language: "",
    festival: "",
    date: "",
    des: "",
    image: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post(
      "http://localhost:5000/formdatapost",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log(data);
    if (data.data === "Sucess") {
      setResponse(true);
    }

    setFormData({
      name: "",
      city: "",
      papulation: "",
      language: "",
      festival: "",
      date: "",
      des: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center ">
        <form action="submit" onSubmit={handleFormSubmit}>
          <InputField
            label="Your Name"
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />

          <InputField
            label="City Name"
            name={"city"}
            value={formData.city}
            onChange={handleChange}
          />

          <InputField
            label="population"
            name={"papulation"}
            value={formData.papulation}
            onChange={handleChange}
          />

          <InputField
            label="Language"
            name={"language"}
            value={formData.language}
            onChange={handleChange}
          />

          <div className="flex justify-start gap-8 ">
            <InputField
              label="festival in Your City"
              name={"festival"}
              value={formData.festival}
              onChange={handleChange}
            />

            <div className="flex items-center">
              <div className="flex flex-col items-start text-[#bfbdbd] gap-2 my-4">
                <label>start Date</label>
                <input
                  name="date"
                  value={formData.date}
                  type="date"
                  onChange={handleChange}
                  className="bg-[#e4f4f5] p-4 w-full text-[black]"
                />

              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-start text-[#bfbdbd] gap-2 my-4">
            <label>Tell us more about your city</label>
            <textarea
              name="des"
              value={formData.des}
              onChange={handleChange}
              className="bg-[#e4f4f5] p-4 w-full text-[black]"
            ></textarea>
          </div>

          <div>
            <input
              name="image"
              value={formData.image}
              type="file"
              onChange={handleChange}
            />
          </div>

          {response ? (
            <strong className="bg-p[#db4444">Data Submit</strong>
          ) : null}

          <div className="my-4 flex justify-center tab-lg:inline-block">
            <button className="text-[16px]  py-1  bg-[#db4444] px-8 tab:py-2 capitalize rounded text-white ">
              Submit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
