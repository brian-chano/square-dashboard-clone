import Layout from '../../components/Layout';

import { HISTORY_ITEMS } from '../../constants';

const Card = ({ title, width, sales }) => {
  return (
    <div
      className={`${width} py-4 px-4  border rounded-md ${
        width === 'w-full' ? 'font-bold' : 'text-gray-800'
      }`}
    >
      <p>{title}</p>
      <span className='flex space-x-1 items-center mt-4'>
        <p className='text-2xl text-gray-500 font-bold'>
          {sales ? sales : 'No sales yet today'}
        </p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 text-gray-500 cursor-pointer'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 5l7 7-7 7'
          />
        </svg>
      </span>
    </div>
  );
};

const History = ({ title, value }) => {
  return (
    <div className='border-t border-b border-gray-100 text-sm'>
      <div className='px-1 py-4 flex items-center justify-between hover:cursor-pointer hover:text-blue-600'>
        {title}
        <span className='flex items-center'>
          <p>{value}</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3 ml-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className='flex relative lg:space-x-12 sm:space-x-10 lg:mx-[27rem] mt-28 sm:px-10'>
      <div className='flex flex-col space-y-6 lg:w-[40rem] sm:w-[34rem]'>
        <div className='flex flex-col space-y-6 bg-white w-full rounded-md border shadow-sm py-10 px-4 text-gray-800'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold text-gray-900'>
              Welcome to Square
            </h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <div className='flex flex-col space-y-6 items-start'>
            <p>
              Our Setup Guide will walk you through how to get set up on Square.
            </p>
            <div className='h-[0.50rem] w-full bg-gray-300 rounded-lg'></div>
            <p className='text-xs'>0% set up</p>
            <button className='bg-blue-600 text-white py-3 px-3 rounded-md hover:bg-blue-700'>
              Setup Guide
            </button>
          </div>
        </div>
        <div className='font-bold'>Today</div>
        <div className='flex justify-between space-x-4'>
          <Card title={'Gross sales'} width='w-1/2' />
          <Card title={'Transactions'} width='w-1/2' />
        </div>
        <div className='flex justify-between'>
          <Card title={'Payment types'} width='w-full' />
        </div>
        <div className='flex justify-between'>
          <Card title={'Top items by sales'} width='w-full' />
        </div>
        <div className='flex justify-between'>
          <Card title={'Top categories by sales'} width='w-full' />
        </div>
      </div>
      <div className='lg:w-[20rem] px-3'>
        <div className='flex space-x-4 bg-gray-200 rounded-md py-3 px-3 text-blue-600 font-semibold'>
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
              d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
            />
          </svg>
          <p>Add an item</p>
        </div>

        <p className='font-bold text-lg mt-10 mb-4'>Last 30 days</p>
        <div>
          {HISTORY_ITEMS.map((item) => {
            return (
              <History title={item.title} key={item.title} value={item.value} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout title='Square Dashboard'>{page}</Layout>;
};
