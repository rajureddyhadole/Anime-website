export const SignIn = () => {

  return (
    <>
      <div className="flex flex-col h-[30rem] max-w-lg mt-6 mx-auto bg-white border border-slate-400 rounded-lg">
        <span className="pt-10 pl-6 text-xl font-medium text-black">Welcome Back</span>   
        <span className="pt-1 pl-6 mb-4 text-slate-600">Welcome back! Please enter yout details.</span>
        <p className="pl-6 text-lg font-medium">Email</p><input className="w-[91%] mx-auto h-12 border-[1px] rounded-md text-lg pl-2 mb-4 focus:outline-none shadow-md border-slate-400" placeholder="example@gmail.com" type="text" />
        <p className="pl-6 text-lg font-medium">Password</p><input className="w-[91%] mx-auto h-12 border-[1px] rounded-md text-lg mb-4 pl-2 focus:outline-none shadow-md border-slate-400" placeholder="password" type="password" />
        <div className="flex justify-between w-[91%] mx-auto mb-4">
          <p className="font-medium"><input type="checkbox" /> Remember for 30 days</p>
          <p className="font-medium text-blue-400 cursor-pointer hover:text-blue-500 active:text-blue-600">Forgot password?</p>
        </div>
        <button className="w-[91%] p-2 rounded-md mx-auto mb-2 text-white bg-green-400 font-medium hover:bg-green-500 active:bg-green-600 shadow-md">Sign in</button>
        <button className="w-[91%] p-2 border-[1px] border-slate-400 rounded-md mx-auto mb-2 font-medium hover:bg-slate-200 shadow-md active:bg-slate-300">Sign in with Google</button>
        <p className="mt-4 mb-4 font-medium text-center">Don't have an account? <button className="text-blue-400 hover:text-blue-500 active:text-blue-600">Sign up</button></p>
      </div>
    </>
  );
}