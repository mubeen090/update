jsx
import React from "react";
import LogoSkillGarage from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoSkillGarage className="h-6 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Skill Intern</strong> is an one stop solution for 
            all college needs .
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Skill Intern
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              <a href="https://play.google.com/store/apps/details?id=co.diy.udvrx&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">Download</a>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link to="/pricing">Pricing</Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <a href="https://g.co/kgs/4PEyjA" target="_blank" rel="noopener noreferrer">location</a>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Skill Intern ?
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              FAQ
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Tutorials
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              About Us
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Privacy Policy
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Terms of Service
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">get a job </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Affiliate
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              Become Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;