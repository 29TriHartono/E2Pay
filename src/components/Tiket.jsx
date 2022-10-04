import React, { useState } from 'react';
import LogoTiket from '../Assets/LogoTiket.png';
import logoVisa from '../Assets/VisaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronUp, faCaretUp, faChevronDown, faArrowRight, faLock, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Tiket = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <section className="md:min-h-screen px-setting flex items-center mx-auto py-10 2xl:w-3/4">
        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row h-4/5 lg:h-full w-full">
          {/* left Content */}
          <main className="bg-leftBackground md:w-1/2  flex flex-col items-center  gap-4 p-6 md:p-10">
            <div className="w-1/3">
              <img src={LogoTiket} alt="Logo Tiket.com" />
            </div>
            <h3>Tiket.com / PT. Global Tiket Network</h3>
            <h3 className="text-textBlue mt-4">Total Payment</h3>
            <h1 className="text-textBlue font-bold">Rp. 2,000,000.000</h1>
            <h3 className="text-slate-500">Invoice code: 01234567890AM</h3>
            <div className="w-full bg-white py-4 rounded-3xl overflow-hidden mt-2">
              <div className="flex items-center justify-between cursor-pointer px-10  " onClick={() => setDropdown(!dropdown)}>
                <h3 className="font-semibold">Detail</h3>
                <div className="flex items-center gap-2 ">
                  <h3>4 items</h3>
                  {dropdown ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                </div>
              </div>
              <hr className={dropdown ? 'block' : 'hidden'} />
              <div className="px-10">
                <div className={dropdown ? 'flex flex-col gap-4 py-6' : 'hidden '}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3>Sentosa Menorail Ticket</h3>
                      <div className="flex items-center gap-4">
                        <h3 className="text-slate-500">Qty</h3>
                        <h3>x2</h3>
                      </div>
                    </div>
                    <h2 className="text-textBlue font-semibold">Rp. 600,000</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3>Foward Festival Tiket</h3>
                      <div className="flex items-center gap-4">
                        <h3 className="text-slate-500">Qty</h3>
                        <h3>x2</h3>
                      </div>
                    </div>
                    <h2 className="text-textBlue font-semibold">Rp. 400,000</h2>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Content */}
          <main className="md:w-1/2 flex flex-col items-center  gap-4 py-4 px-6 md:px-10">
            <div className="w-full flex items-center justify-between border-b-2 py-4 pr-2 border-slate-200">
              <a href="" className="text-textBlue flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} />
                <h3>Back</h3>
              </a>
              <h1 className="font-bold">Credit Card</h1>
            </div>
            <div className="w-full flex  justify-center gap-6 font-semibold">
              <a href="" className="flex flex-col items-center text-greenColor gap-2">
                <h2 className="">SAVED CARD</h2>
                <FontAwesomeIcon icon={faCaretUp} className="transition animate-bounce duration-500" />
              </a>
              <a href="">
                <h2 className="text-slate-300">NEW CARD</h2>
              </a>
            </div>
            <div className="w-full mt-4 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3>
                  select card <span className="text-redColor">*</span>
                </h3>
                <a href="" className="bg-leftBackground  border-2 border-leftBackground flex items-center gap-2 h-10 px-2 rounded-xl">
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-12 h-12 flex items-center">
                      <img src={logoVisa} alt="Logo Visa" />
                    </div>
                    <h3 className="font-semibold">* 6677</h3>
                  </div>
                  <div className="flex items-center gap-2 px-2 text-gray-800">
                    <h3>12/24</h3>
                    <FontAwesomeIcon icon={faChevronDown} className="text-textBlue opacity-50" />
                  </div>
                </a>
              </div>

              <div className="flex flex-col xl:flex-row gap-6  justify-between xl:gap-20">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <h3>
                      CVV <span className="text-redColor">*</span>
                    </h3>
                    <div className="w-5 h-5 bg-green-200 flex items-center justify-center rounded-full ">
                      <FontAwesomeIcon icon={faQuestion} className="text-greenColor w-2 h-2" />
                    </div>
                  </div>
                  <input type="text" maxLength={'3'} placeholder="..." className="text-center p-2 w-20 bg-leftBackground h-10  border-2 border-leftBackground rounded-xl focus:outline-none tracking-widest" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h3>
                    Password <span className="text-redColor">*</span>
                  </h3>
                  <input type="password" placeholder="" className=" py-2 px-4 h-10 bg-leftBackground  border-2 border-leftBackground rounded-xl focus:outline-none tracking-widest" />
                  <a href="" className="text-textBlue underline">
                    <h3>Forgot Password</h3>
                  </a>
                </div>
              </div>

              <div className=" flex gap-2 mt-6 ">
                <input type="checkbox" value="" className="w-4 h-4 mt-1  text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                <label htmlFor="checked-checkbox" className="text-sm ">
                  I agree E2Pay will charge the stated amount on my credit card
                </label>
              </div>

              <button className="w-full bg-footerBtnColor flex items-center justify-center h-10 rounded-xl text-white font-semibold gap-4 hover:bg-blue-500 transition duration-300">
                PROCEED TO PAYMENT
                <span className="text-greenColor">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
              <div className=" flex gap-2 text-redColor items-center justify-center">
                <FontAwesomeIcon icon={faLock} />
                <label htmlFor="checked-checkbox" className=" text-sm ">
                  Your payment is protected & processed by E2Pay
                </label>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Tiket;
