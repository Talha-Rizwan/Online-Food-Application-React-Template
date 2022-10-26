import {Link} from "react-router-dom";


function Signup(){
    return <div className="flex justify-center">
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
	<form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
			<label for="email" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
        <div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="text" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			
		</div>
		<button className="block w-full p-3 hover:underline hover:bg-red-300 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Create Account</button>
	</form>
	
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Back to Login
		{/* <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Sign up</a> */}
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/login"> Login </Link>

	</p>
</div>
</div>

}

export default Signup;