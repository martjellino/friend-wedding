"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Page7 = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogOut = () => {
    setIsLogoutModalOpen(true);
  };
  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
  };
  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false);
  };

  const handleClickWallet = async (e) => {
    e.preventDefault();
  };

  const handleModal = () => {
    // setIsOpen(!isOpen);
    setModal(!modal);
  };

  return (
    <div className="max-w-3xl m-auto svg-bg-7 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <div>
        <p className="mt-48 text-6xl font-extrabold">GIFT</p>
      </div>
      <div className="mt-16 font-normal">
        <p>It's an honor for us if you would like</p>
        <p>to send us a wedding gift</p>
      </div>
      <div className="wallet">
        <button>
          <Image
            src="/wallet.png"
            width={150}
            height={150}
            alt="Wallet pic"
            onClick={handleLogOut}
          />
        </button>
        {isLogoutModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <div className="mt-8 flex flex-col relative">
                <Image
                  src="/bca.svg"
                  width={250}
                  height={250}
                  alt="Wallet pic"
                  className="block"
                />
                <div
                  className="absolute inset-0  mt-[82px]"
                  style={{ zIndex: 1 }}
                >
                  <div className="text-blue-800 font-normal text-[10px] text-left ml-6 font-mono">
                    Atas Nama:
                  </div>
                  <div className="text-blue-800 font-semibold text-[12px] text-left ml-6 font-mono -mt-1">
                    RIFQI AHMAD NAUFAL
                  </div>
                  <div className="text-blue-800 font-normal text-[10px] text-left ml-6 mt-1 font-mono">
                    No. Rek:
                  </div>
                  <div className="text-blue-800 font-semibold text-[12px] text-left ml-6 font-mono -mt-1">
                    3790286633
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-center relative">
                <Image
                  src="/bca.svg"
                  width={250}
                  height={250}
                  alt="Wallet pic"
                  className="block"
                />
                <div
                  className="absolute inset-0 mt-[82px]"
                  style={{ zIndex: 1 }}
                >
                  <div className="text-blue-800 font-normal text-[10px] text-left ml-6 font-mono">
                    Atas Nama:
                  </div>
                  <div className="text-blue-800 font-semibold text-[12px] text-left ml-6 font-mono -mt-1">
                    SENDY AYU AULIA
                  </div>
                  <div className="text-blue-800 font-normal text-[10px] text-left ml-6 mt-1 font-mono">
                    No. Rek:
                  </div>
                  <div className="text-blue-800 font-semibold text-[12px] text-left ml-6 font-mono -mt-1">
                    7151594925
                  </div>
                </div>
              </div>
              <div
                className="mt-8 flex flex-col items-center relative"
                style={{ zIndex: 2 }}
              >
                <button
                  className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                  onClick={handleConfirmLogout}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
