import React, { useState } from "react";
import { Banknote, CreditCard, PhoneCall, X } from "lucide-react";
import Footer from "./Footer";

function Contributions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const openModal = (paymentType) => {
    setSelectedPayment(paymentType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPayment("");
  };

  return (
    <div className="cont">
      
    <div className="relative overflow-x-hidden bg-gray-50 min-h-screen py-10 px-6 md:px-20 mt-[-2rem]">
      {/* Group Account Balance */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 rounded-2xl shadow-lg text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-fadeIn">
          Group Account Balance
        </h2>
        <p className="text-lg md:text-2xl font-semibold animate-fadeInDelay">
          Ksh 245,000
        </p>
      </div>

      {/* Payment Options */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 animate-fadeIn">
          Make a Contribution
        </h3>
        <p className="text-gray-600 text-md md:text-lg animate-fadeInDelay">
          Choose your preferred payment method to support the community.
        </p>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* M-Pesa */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fadeInDelay2">
          <PhoneCall size={48} className="text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">M-Pesa</h4>
          <p className="text-gray-600 mb-4">
            Send your contribution to Paybill{" "}
            <span className="font-semibold">123456</span>, Account:{" "}
            <span className="font-semibold">Chama</span>.
          </p>
          <button
            onClick={() => openModal("M-Pesa")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300"
          >
            Contribute Now
          </button>
        </div>

        {/* Card Payment */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fadeInDelay3">
          <CreditCard size={48} className="text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">Card Payment</h4>
          <p className="text-gray-600 mb-4">
            Pay securely using your Visa, Mastercard, or other debit/credit
            cards.
          </p>
          <button
            onClick={() => openModal("Card Payment")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300"
          >
            Pay with Card
          </button>
        </div>

        {/* Bank Transfer */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fadeInDelay4">
          <Banknote size={48} className="text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold mb-2">Bank Transfer</h4>
          <p className="text-gray-600 mb-4">
            Account No: <span className="font-semibold">01123456789</span>{" "}
            <br />
            Bank: Chama Bank Ltd
          </p>
          <button
            onClick={() => openModal("Bank Transfer")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300"
          >
            Bank Details
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center text-gray-500 text-sm animate-fadeInDelay5">
        <p>
          Every contribution helps us grow stronger together. Thank you for your
          support! 💚
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-green-700 mb-6">
              {selectedPayment}
            </h2>
            <p className="text-gray-700 mb-6">
              {selectedPayment === "M-Pesa"
                ? "Proceed to M-Pesa Prompt (STK Push will be initiated here)."
                : "Enter your payment details to complete your contribution."}
            </p>

            {/* Simulated Form (You will replace with real payment prompts later) */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Amount"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {selectedPayment !== "M-Pesa" && (
                <input
                  type="text"
                  placeholder="Enter Card / Bank Details"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              )}
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300">
                Confirm Contribution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Contributions;
