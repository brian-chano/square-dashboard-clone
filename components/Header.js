import { useState, Fragment } from 'react';

// Headless UI
import { Menu, Transition } from '@headlessui/react';

import Sidebar from './Sidebar';

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <header className='flex bg-white h-14 justify-between px-6 py-4 border-b-2 fixed top-0 left-0 w-full z-50'>
        <div
          className='flex space-x-4 cursor-pointer text-gray-500 hover:text-gray-900'
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          <p className='font-semibold text-gray-900'>Home</p>
        </div>
        {/* <div className='sm:hidden lg:block'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
            />
          </svg>
        </div> */}

        <div className='flex space-x-5 text-gray-500 cursor-pointer items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 hover:text-gray-900'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
            />
          </svg>
          <Menu
            as='div'
            className='relative inline-block text-left hover:text-gray-900'
          >
            <Menu.Button className='inline-flex justify-center w-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              Chano.IT
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 w-60 mt-5 origin-top-right bg-white rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div>
                  <Menu.Item className='px-6 pt-4 text-gray-900 cursor-default'>
                    <div className=' flex flex-col w-full'>
                      <p className='font-medium text-sm'>Brian Ochan</p>
                      <p className='text-sm font-light'>Owner</p>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='mt-3 text-blue-600 group w-full text-sm hover:bg-blue-200 py-1'>
                      <p className='px-6'>Account Settings</p>
                    </div>
                  </Menu.Item>
                  <Menu.Item as='div' className='px-6 pt-4  cursor-default'>
                    <div className='h-[0.01rem] bg-gray-200'></div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='mt-3 text-blue-600 group w-full text-sm hover:bg-blue-200 py-1'>
                      <p className='px-6'>Tour your Dashboard</p>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='mb-6 text-blue-600 group w-full text-sm hover:bg-blue-200 py-1'>
                      <p className='px-6'>Sign Out</p>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </>
  );
}
