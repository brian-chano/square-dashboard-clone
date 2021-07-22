import React from 'react';
import Link from 'next/link';

import { SIDE_BAR_ITEMS } from '../constants';

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  return (
    <>
      {showSideBar && (
        <div className='z-10 fixed inset-0 transition-opacity'>
          <div
            className='absolute inset-0'
            onClick={() => setShowSideBar(false)}
            tabIndex='0'
          ></div>
        </div>
      )}
      <aside
        className={`transform ${
          showSideBar ? 'translate-x-0' : '-translate-x-full'
        } w-80 border-r border-t fixed top-12 sidebar-h overflow-auto ease-in-out transition-all duration-300 z-30 bg-white shadow-xl`}
      >
        <div className='p-8'>
          <div className='grid gap-8 grid-cols-3 '>
            {SIDE_BAR_ITEMS.map((item) => (
              <Link href={item.route} key={item.name}>
                <button className='flex flex-col items-center space-y-2'>
                  <div
                    className={`${item.bgColor} cursor-pointer rounded-xl transform hover:scale-[1.05] transition duration-300 ease-in-out `}
                  >
                    <div className='flex justify-center items-center text-white h-14 w-14 '>
                      {item.icon}
                    </div>
                  </div>
                  <div className='text-xs text-center text-gray-700'>
                    {item.name}
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className='p-8 border-t'>
          <div className='flex flex-col space-y-4 text-gray-500 font-semibold'>
            <div>Orders</div>
            <div>Apps</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
