import React from 'react';
import LogoE2pay from '../Assets/LogoE2pay.png';
import IconPhone from '../Assets/IconPhone.png';
import IconEmail from '../Assets/IconEmail.png';

const Footer = () => {
  return (
    <>
      <section className="bg-footerBtnColor  text-slate-200 py-8 ">
        <div className="2xl:w-3/4 px-setting flex flex-col md:flex-row gap-4 md:items-center justify-between m-auto">
          <a href="" className="w-1/2 md:w-1/5 ">
            <img src={LogoE2pay} alt="Logo E2Pay" />
          </a>
          <div className="flex flex-col  md:items-end gap-4 ">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <a href="" className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img src={IconPhone} alt="" className="" />
                </div>
                <h3>021-5292-0138 ext.333 (Mon - Fri, 08.30 - 18.30)</h3>
              </a>
              <a href="" className="flex items-center gap-4">
                <div className="w-8 h-8">
                  <img src={IconEmail} alt="" className="" />
                </div>
                <h3>Support@e2pay.co.id</h3>
              </a>
            </div>
            <h3 className="text-slate-400 text-center">Copyright @ 2022, PT E2Pay Global Utama. All right reserved</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
