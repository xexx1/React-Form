import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = parseInt(formData.salary);
  let bonus = parseInt(formData.bonus);
  let salaruam = salary * 12 + bonus;

  let kachaijai = 0.5 * salaruam <= 100000 ? 0.5 * salaruam : 100000;
  let tauaeng = 60000;
  let ruk =
    parseInt(formData.ruk) * 30000 <= 60000
      ? parseInt(formData.ruk) * 30000
      : 60000;
  let pakansangkom =
    parseInt(formData.pakansangkom) * 12 <= 30000
      ? parseInt(formData.pakansangkom) * 12
      : 30000;
  let biepakan =
    parseInt(formData.biepakan) <= 100000
      ? parseInt(formData.biepakan)
      : 100000;
  let rodyon = tauaeng + ruk + pakansangkom + biepakan;
  let salareng = salaruam - kachaijai - rodyon;
  let pasee = 0;
  if (salareng <= 100000) {
    pasee = 0;
  } else if (salareng <= 300000) {
    pasee = 0.05;
  } else if (salareng <= 1000000) {
    pasee = 0.1;
  } else {
    pasee = 0.15;
  }

  return (
    <div className="flex justify-center h-screen items-center shadow-xl">
      <div className="block max-w-sm p-6 bg-white border  rounded-lg shadow-xl">
        <h1 className="flex justify-center items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black mb-5">
          ผลการคำนวน
        </h1>
        <hr />
        <p className="pt-5 font-normal text-gray-700 dark:text-black mb-5">
          <strong>เงินได้ทั้งปี: {salaruam} บาท</strong>
        </p>
        <p className="font-normal text-gray-700 dark:text-black mb-5">
          <strong>ค่าใช้จ่าย: {kachaijai} บาท</strong>
        </p>
        <p className="font-normal text-gray-700 dark:text-black mb-5">
          <strong>ค่าลดหย่อน: {rodyon} บาท</strong>
        </p>
        <p className="font-normal text-gray-700 dark:text-black mb-5">
          <strong>รายได้พึงประเมิน: {salareng} บาท</strong>
        </p>
        <p className="font-normal text-gray-700 dark:text-black mb-5">
          <strong>อัตราภาษี: {pasee * 100} %</strong>
        </p>
        <p className="font-normal text-gray-700 dark:text-black mb-5">
          <strong>ภาษีที่ต้องชำระ : {salareng * pasee} บาท</strong>
        </p>
      </div>
    </div>
  );
};

export default Results;
