// src/pages/DonationPage.jsx

import React, { useEffect, useRef, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import gsap from "gsap";

const DonationPage = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 1500);
  };

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const accounts = [
    {
      title: "Meezan Bank Account",
      description: "Our Mainstream Bank Account for all our programs and initiatives.",
      bank: "Meezan Bank Limited",
      holder: "MUHAMMAD GHULAM JILLANI",
      accountNumber: "02510113390827",
      IBAN: "PK91MEZN0002510113390827",
    },
    {
      title: "NayaPay Account",
      description: "Our Micro Finance Bank Account for all our programs and initiatives.",
      bank: "NayaPay",
      holder: "SAAD AHMAD",
      accountNumber: "03055432101",
      IBAN: "PK48NAYA1234503055432101",
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 pb-16">
      
        {/* HEADER */}
        <section
            className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/images/hero2.jpg')` }}
        >
            {/* TINT OVERLAY */}
            <div className="absolute inset-0 bg-black/70"></div> 

            {/* CONTENT */}
            <div className="relative flex items-center justify-center h-full px-4">
                <h1
                    ref={headingRef}
                    className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center"
                >
                Donate Us
                </h1>
            </div>
        </section>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">

        {/* LEFT — BANK ACCOUNTS (70%) */}
        <div className="w-full lg:w-[70%] flex flex-col gap-8 items-center">

          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Bank Transfer Details
          </h2>

          <div className="w-full flex flex-col gap-8">
            {accounts.map((acc, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Kun Foundation – {acc.title}
                </h3>

                <p className="text-gray-600 mb-6">{acc.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-medium">Bank Name</p>
                  <p className="text-gray-800">{acc.bank}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-medium">Account Holder</p>
                  <p className="text-gray-800">{acc.holder}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-medium mb-1">Account Number</p>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm border border-gray-300">
                      {acc.accountNumber}
                    </div>

                    <button
                      onClick={() => handleCopy(acc.accountNumber, `acc${index}`)}
                      className="p-2 hover:bg-gray-200 rounded transition"
                    >
                      {copiedField === `acc${index}` ? (
                        <FiCheck className="text-green-600" />
                      ) : (
                        <FiCopy className="text-gray-700" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">IBAN</p>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm border border-gray-300">
                      {acc.IBAN}
                    </div>

                    <button
                      onClick={() => handleCopy(acc.IBAN, `iban${index}`)}
                      className="p-2 hover:bg-gray-200 rounded transition"
                    >
                      {copiedField === `iban${index}` ? (
                        <FiCheck className="text-green-600" />
                      ) : (
                        <FiCopy className="text-gray-700" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — MERGED BOX (30%) */}
        <div className="w-full lg:w-[30%]">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 text-center">Quick Donate</h3>

            {/* QR */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/QR.jpg"
                alt="QR Code"
                className="w-48 h-48 border-2 border-green-600 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-gray-600 text-sm text-center mb-6">
              Scan the QR code to donate instantly via mobile banking apps.
            </p>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>

            {/* Other Ways Heading */}
            <h3 className="text-lg font-semibold mb-4 text-center">Other Ways to Help</h3>

            {/* SMALL RECTANGLE BOXES */}
            <div className="space-y-3">

              <a
                href="mailto:kunfoundation@gmail.com"
                className="block w-full bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition text-center"
              >
                📧 Email: kunfoundation@gmail.com
              </a>

              <a
                href="tel:+923284797900"
                className="block w-full bg-purple-50 border border-purple-200 text-purple-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-purple-100 transition text-center"
              >
                📞 Call: +92 328 4797900
              </a>

              <div className="block w-full bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-medium text-center">
                🤝 Sponsor a Program
              </div>
            </div>

            {/* GREEN NOTE */}
            <div className="bg-green-100 border border-green-300 text-green-900 p-4 rounded-lg shadow-sm mt-6">
              <p className="font-semibold">✓ All donations are tax-deductible</p>
              <p className="text-sm mt-1">
                Our organization is registered as a charitable entity with full transparency.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
