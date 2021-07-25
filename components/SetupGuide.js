import React, { useState } from 'react';

const SetupGuide = ({ showSetupGuide, setShowSetupGuide }) => {
  const [showMoreActivateAccountPayments, setShowMoreActivateAccountPayments] =
    useState(false);

  const [showMoreSetupYourAccounts, setShowMoreSetupYourAccounts] =
    useState(false);

  const [showMoreGetStartedWithSquarePOS, setShowMoreGetStartedWithSquarePOS] =
    useState(false);

  return (
    <aside
      className={`transform ${
        showSetupGuide ? '-translate-x-0' : 'translate-x-full'
      } w-[27rem] border-l fixed top-12 right-0 sidebar-h overflow-auto ease-in-out transition-all duration-300 z-30 bg-gray-100 text-gray-800 shadow-2xl`}
    >
      <div className='flex items-center  bg-white px-2 py-4 '>
        <button
          className='bg-gray-100 px-4 py-4 rounded-md hover:bg-blue-100'
          onClick={() => setShowSetupGuide(!showSetupGuide)}
        >
          <svg viewBox='1.5 1.5 13 13' class='w-3 h-3'>
            <path
              d='M3 3L13 13M13 3L3 13'
              stroke='black'
              strokeOpacity='0.9'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div className='flex-1'>
          <p className='text-2xl font-bold text-center'>Setup Guide</p>
        </div>
      </div>

      <div className='px-2 mt-3'>
        <div className='px-4 py-5 bg-white border rounded-md shadow-md'>
          <p className='text-lg font-bold mb-6'>Let’s get started</p>
          <p className='text-sm font-light mb-6'>
            This Setup Guide will take you through the steps needed to get
            Weyonje up and running on Square.
          </p>
          <div className='h-[0.50rem] w-full bg-gray-300 rounded-lg mb-6'></div>
          <p className='text-xs'>0% set up</p>
        </div>
      </div>

      <div className='px-2 mt-3'>
        <div className='px-4 py-5 bg-white border rounded-md shadow-md'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() =>
              setShowMoreActivateAccountPayments(
                !showMoreActivateAccountPayments
              )
            }
          >
            <p className='text-lg font-bold w-72'>
              Activate your account to take payments
            </p>

            <svg viewBox='0 0 32 32' className='w-8 h-8 mr-4'>
              <circle cx='16' cy='16' r='16' fill='black' fill-opacity='0.05' />
              {showMoreActivateAccountPayments ? (
                <path
                  d='M22 19L16 13L10 19'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              ) : (
                <path
                  d='M10 13L16 19L22 13'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              )}
            </svg>
          </div>
          {showMoreActivateAccountPayments && (
            <>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>
                  Verify Your Identity
                </p>
                <p>
                  Before you can accept payments, we need to verify your
                  identity.
                </p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>
                  Link Your Bank Account
                </p>
                <p>Connect your bank account so you can transfer your funds.</p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>
                  Take Your First Payment
                </p>
                <p>Decide how you will take your first payment with Square</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className='px-2 mt-3'>
        <div className='px-4 py-5 bg-white border rounded-md shadow-md'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() =>
              setShowMoreSetupYourAccounts(!showMoreSetupYourAccounts)
            }
          >
            <p className='text-lg font-bold w-72'>Set up your account</p>
            <svg viewBox='0 0 32 32' className='w-8 h-8 mr-4'>
              <circle cx='16' cy='16' r='16' fill='black' fill-opacity='0.05' />

              {showMoreSetupYourAccounts ? (
                <path
                  d='M22 19L16 13L10 19'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              ) : (
                <path
                  d='M10 13L16 19L22 13'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              )}
            </svg>
          </div>
          {showMoreSetupYourAccounts && (
            <>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>
                  Customize Receipts
                </p>
                <p>Customize your receipts-how they look and what they say.</p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>
                  Set Up Your Taxes
                </p>
                <p>Set up taxes to apply to individual items or at checkout.</p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>Add a Location</p>
                <p>
                  Add locations and setup business details to manage multiple
                  locations
                </p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>Explore Software</p>
                <p>
                  Explore Square's suite of tools to help you run and grow your
                  business.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className='px-2 mt-3'>
        <div className='px-4 py-5 bg-white border rounded-md shadow-md'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() =>
              setShowMoreGetStartedWithSquarePOS(
                !showMoreGetStartedWithSquarePOS
              )
            }
          >
            <p className='text-lg font-bold w-72'>
              Get started with Square Point of Sale
            </p>

            <svg viewBox='0 0 32 32' className='w-8 h-8 mr-4'>
              <circle cx='16' cy='16' r='16' fill='black' fill-opacity='0.05' />
              {showMoreGetStartedWithSquarePOS ? (
                <path
                  d='M22 19L16 13L10 19'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              ) : (
                <path
                  d='M10 13L16 19L22 13'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fillOpacity='0'
                />
              )}
            </svg>
          </div>
          {showMoreGetStartedWithSquarePOS && (
            <>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>Order Hardware</p>
                <p>
                  Explore and purchase hardware and device kits for your
                  business.
                </p>
              </div>
              <hr className='text-gray-200 mt-4 mb-4' />
              <div className='text-sm'>
                <p className='text-blue-600 font-bold mb-1'>Download the App</p>
                <p>
                  Request a link to download the Square POS App on your iOS or
                  Android Device.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SetupGuide;
