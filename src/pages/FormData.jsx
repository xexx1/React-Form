import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="block max-w-sm pb-20 pr-20  pl-20 pt-10  bg-white border  rounded-2xl shadow-xl ">
        <h1 className="flex justify-center mb-10 mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-black ">
          แบบฟอร์มภาษี
        </h1>
        <form onSubmit={submitForm}>
          <p className="font-normal text-gray-700 dark:text-black">
            <input
              className="h-auto relative z-0  scale-110 transition-all duration-300 hover:scale-100 hover:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl   block w-full p-3 mb-6"
              type="text"
              name="salary"
              id="name"
              onChange={handleChange}
              required
              placeholder="กรอก เงินเดือน :"
            />
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            <input
              className="h-auto relative z-0  scale-110 transition-all duration-300 hover:scale-100 hover:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-3 mb-6"
              type="text"
              name="bonus"
              onChange={handleChange}
              required
              placeholder="กรอก โบนัส :"
            />
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            <input
              className="h-auto relative z-0  scale-110 transition-all duration-300 hover:scale-100 hover:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl   block w-full p-3 mb-6"
              type="text"
              name="pakansangkom"
              id="job"
              onChange={handleChange}
              required
              placeholder="กรอก ประกันสังคมต่อเดือน :"
            />
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            <input
              className="h-auto relative z-0  scale-110 transition-all duration-300 hover:scale-100 hover:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-3 mb-6"
              type="text"
              name="ruk"
              id="salary"
              onChange={handleChange}
              required
              placeholder="กรอก จำนวนบุตร :"
            />
          </p>
          <p className="font-normal text-gray-700 dark:text-white">
            <input
              className="h-auto relative z-0  scale-110 transition-all duration-300 hover:scale-100 hover:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl   block w-full p-3 mb-6"
              type="text"
              name="biepakan"
              id="salary"
              onChange={handleChange}
              required
              placeholder="กรอก ค่าเบี้ยประกันชีวิต :"
            />
          </p>
          <div className="flex justify-center items-center">
            <button
              className="h-auto relative z-0  transition-all duration-300 hover:scale-110 px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-600 mt-5 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
