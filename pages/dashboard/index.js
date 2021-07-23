import Layout from '../../components/Layout';

const Card = () => {
  return (
    <div className='py-4 px-4  border rounded-md w-1/2 text-gray-800'>
      <p>Gross sales</p>
      <span className='flex space-x-1 items-center mt-4'>
        <p className='text-2xl text-gray-500 font-bold'>No sales yet today</p>
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

export default function Index() {
  return (
    <div className='flex justify-center py-10 lg:space-x-14 sm:space-x-10 sm:mx-12 lg:mx-[27rem] relative top-auto left-auto mt-14'>
      <div className='flex flex-col space-y-8 lg:w-[40rem] sm:w-3/4'>
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
          <div className='flex flex-col space-y-4 items-start'>
            <p>
              Our Setup Guide will walk you through how to get set up on Square.
            </p>
            <div className='h-[0.50rem] w-full bg-gray-300 rounded-lg'></div>
            <p className='text-xs'>0% set up</p>
            <button className='bg-indigo-600 text-white py-3 px-3 rounded-md hover:bg-indigo-700'>
              Setup Guide
            </button>
          </div>
        </div>
        <div>Today</div>
        <div className='flex justify-between space-x-4'>
          <Card />
          <Card />
        </div>
        <div className='flex justify-between space-x-4'>
          <Card />
          <Card />
        </div>
        <div className='flex justify-between space-x-4'>
          <Card />
          <Card />
        </div>
        <div className='flex justify-between space-x-4'>
          <Card />
          <Card />
        </div>
        <div className='flex justify-between space-x-4'>
          <Card />
          <Card />
        </div>
      </div>
      <div className='bg-gray-50 lg:w-[20rem] sm:w-[13rem] py-3 px-3'></div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout title='Square Dashboard'>{page}</Layout>;
};
