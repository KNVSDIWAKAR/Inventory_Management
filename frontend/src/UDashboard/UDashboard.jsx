import React from 'react';

const UDashboard = () => {
  return (
    <div className='bg-teal-100 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-4'>User Dashboard</h1>
      <h2 className='text-lg mb-8 text-center'>Role-Based Authentication</h2>
      <h3 className='text-lg mb-8 text-center'>
        If you want to enter the Admin Dashboard where all the CRUD operations are performed, contact the developer team at 187.
      </h3>

      <div className='bg-orange-50 p-8 max-w-md mx-auto mt-8 rounded-md shadow-md'>
        <h3 className='text-xl font-semibold mb-4 text-center'>Admin Credentials</h3>
        <p className='text-gray-700 mb-2 text-center'>Gmail: t187@gmail.com</p>
        <p className='text-gray-700 text-center'>Password: t187</p>
      </div>
    </div>
  );
};

export default UDashboard;
