/* eslint-disable @next/next/no-img-element */

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";

const Showcase = ({ remove }: { remove?: boolean }) => {
  const router = useRouter();

  // move to upload page
  const handleUpload = () => {
    Router.push("/upload");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="flex w-full mt-5 pb-6 gap-y-3 md:gap-y-0 flex-col md:flex-row items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="w-full md:w-[60%]  flex items-center justify-center"
      >
        <div className="w-[90%] md:w-[60%]">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            The easiest way to manage your personal finances
          </h1>
          <p className="text-gray-100 mt-4 text-sm md:text-lg">
            With our AI eCheque system, you can snap a cheque and verify
            its validity before heading to bank; you can be at the comfort of
            your home and transfer money into your bank account without any
            charges.
          </p>
          {!remove && (
            <div className="flex flex-col md:flex-row mt-8 gap-y-3 md:gap-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={handleUpload}
                className="flex items-center justify-center gap-x-2 bg-active text-primary px-4 py-2 rounded-sm text-base font-semibold"
              >
                Upload Cheque
                <div className="p-2 rounded-full bg-white">
                  <BsArrowRight />
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="bg-white text-primary px-4 py-2 rounded-sm text-base font-semibold"
                onClick={() => router.push("/about")}
              >
                About CodeGeeks
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
      <div className="w-[90%] md:w-[40%] flex items-center justify-center">
        <div className="w-80">
          <motion.img
            src="/assets/banner.png"
            alt="showcase"
            className="w-full h-full object-contain cursor-pointer"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Showcase;
