import React from 'react'

const Login = () => {
  return (
    <AuthLayout>
      <div className='lg:w-[30%] h-3/4 md:h-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold text-black'>Expense Tracker</h1>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Track your expenses and manage your budget effectively.</p>
      </div>
    </AuthLayout>
    )
}

export default Login