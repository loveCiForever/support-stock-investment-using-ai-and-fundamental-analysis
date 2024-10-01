import * as React from 'react';

export default function Form() {
    return (
        <div className="w-1/3 bg-white px-10 py-10 rounded-3xl ">
            {/* Welcome Back */}
            <h1 className="text-5xl font-semibold text-center">Welcome Back</h1>

            {/* Form container */}
            <div className="mt-8">
                <div>
                    <label className="text-lg font-normal">Email</label>
                    <input 
                        className="w-full rounded-xl p-4 mt-1 bg-gray-100" 
                        placeholder="Enter your email" 
                        type="email"
                    />
                </div>
                <div className='mt-3'>
                    <label className="text-lg font-normal">Password</label>
                    <input 
                        className="w-full rounded-xl p-4 mt-1 bg-gray-100" 
                        placeholder="Enter your password" 
                        type="password"
                    />
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" id="remember"/>
                        <label 
                            className="ml-1 font-normal text-base"
                            for="remember">
                            Remember password
                        </label>
                    </div>
                    <button 
                        className="font-bold text-base text-orange-400
                        0 active:scale-[.98] active:duration-75 transition-all ">
                        Forgot password
                    </button>
                </div>
            </div>

            {/* Sign in button */}
            <div className='mt-8 flex flex-col gap-y-2'>
                <button 
                    className='py-3 rounded-xl bg-orange-400 text-xl text-white font-bold
                    active:scale-[.98] active:duration-75 transition-all'>
                    Sign In
                </button>
                <h1 className='my-3 text-center font-medium text-base'>OR</h1>
                {/* <h1 className='mb-1 text-center font-medium text-base'>Sign in with</h1> */}
                <div className='flex'>
                    <button 
                        className='flex w-1/2 content-center items-center justify-center 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal
                        active:scale-[.98] active:duration-75 transition-all '>  
                        <svg className=''
                            xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"> 
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            <path d="M1 1h22v22H1z" fill="none"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Google</div>
                    </button>
                    <button
                        className='flex w-1/2 ml-3 content-center items-center justify-center 
                        active:scale-[.98] active:duration-75 transition-all 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal'>  
                        <svg width="25px" height="25px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                            <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"/>
                            <defs>
                                <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#18ACFE"/>
                                <stop offset="1" stop-color="#0163E0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Facebook</div>
                    </button>
                </div>
                <div className='flex mt-1'>
                    <button 
                        className='flex w-1/2 content-center items-center justify-center 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal
                        active:scale-[.98] active:duration-75 transition-all '>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px">    
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Github </div>
                    </button>
                    <button
                        className='flex w-1/2 ml-3 content-center items-center justify-center 
                        active:scale-[.98] active:duration-75 transition-all 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal'>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px">
                            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Apple      </div>
                    </button>
                </div>
                <div className='flex mt-1'>
                    <button 
                        className='flex w-1/2 content-center items-center justify-center 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal
                        active:scale-[.98] active:duration-75 transition-all '>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="24px" height="24px">
                            <path fill="#8A4581" d="M443.3,129.4C411.4,93,363.7,70.5,317,60.7c-47-9.8-97.7-8-142,11.7c-73,32.5-131.8,108.2-133.5,189c0.2,0.8,0.3,1.7,0,2.7c0,1.5,0,3,0,4.4c-0.2,1.1-0.4,2.2-0.5,3.3c0.1,1,0.2,1.9,0.3,2.7c0.2,4.2,0.2,8.4,0.6,12.6c0.6,7.8,3,15.5,2.3,23.2c0.3,2.1,0.6,4.2,0.9,6.3c0,0.3,0.1,0.5,0.2,0.7c0.7,4.4,1.4,8.7,2.2,13.1c1.6,9.1,3.6,18.1,6.1,26.9c5,17.4,11.6,34.3,20.6,50.1c17,30,41.4,56,72.9,70.9c21.6,10.2,44.8,14.5,68.7,15.1c26,0.6,52.2-2.2,77.4-8.9c49.8-13.2,96.1-40.2,129.3-79.9C483.7,330.9,511.9,207.7,443.3,129.4z M342.7,235.8c-4,5.1-8.6,9.7-13.2,14.2c-4.6,4.5-9.4,8.9-14.1,13.3c-4.4,4.2-8.5,9.5-13.4,13.2c-4.7,3.6-9,8-13.2,12.2c-2.6,2.5-5.2,5.1-7.7,7.8c-0.9,1-1.9,2-2.7,3c-0.1,0.1-0.2,0.2-0.3,0.4c-0.3,0.9-0.8,1.6-1.5,2.2c0.1,1.7,0.1,3.4,0.2,5.1c1.9,16,1.6,32.3,1.6,48.5c0.5,5.4,0.5,10.8,0.1,16.1c0,1.6-0.1,3.2-0.1,4.8c0,0.5-0.1,1-0.2,1.5c7.4-0.2,14.8-0.5,22.2-1c4.6-0.3,9.3-0.6,13.9-1.3c0.7-0.1,1.4-0.2,2.1-0.4c0.1,0,0.4-0.1,0.7-0.2c2.8-3.5,9.5-1.8,10.6,3c4.5,7.7-0.3,14.4-8.7,16.2c-3.8,0.8-7.6,0.9-11.4,0.8c-5.7-0.1-11.3,0.7-17,1.2c-15.9,1.4-31.7,2.6-47.7,2.6c-16.4,0-32.7-0.5-49.1-0.5c-0.5,0-0.9,0-1.4-0.1c-0.7,0.5-1.6,0.8-2.6,0.9c-3,0.2-6.6-2.3-6.5-5.6c0-1.8,0.3-3.5,0.8-5.2c-3.1-4,0.8-10.9,6.3-9.6c0.4-0.1,0.9-0.2,1.4-0.2c9.9,0,19.7,0,29.6,0c0,0,0-0.1,0-0.1v-8.8c-0.2-28.5-8.2-57.5-4.9-85.9c-6.1-10.7-12.6-21.2-19.4-31.5c-8.7-13.1-19.6-24.5-28.6-37.3c-4.3-6.2-8.8-13.1-14.5-18.1c-4.7-4.1-9.5-8-13-13.2c-0.1-0.2-0.3-0.4-0.4-0.7c-10.5-0.3-21-0.5-31.5,0c-3.1,0.1-6.5-2.2-6.5-5.6v-5c-0.7-1.9-0.3-3.7,0.6-5.9c0.3-0.8,0.8-1.5,1.4-2c0.8-1.4,2.4-2.5,4.6-2.5c22.4-0.1,44.8-2,67.2-2.2c20.2-0.2,41.1,2.5,61-1.9c6.1-1.4,10,5.9,7.1,9.6c0.8,8.4-6.6,12.5-14.8,13.3c-10.2,1-20.5,1.6-30.7,2.3c0,0.1-0.1,0.3-0.1,0.4c8.9,10.1,18.5,19.4,26.9,30c6.1,7.7,11.7,15.9,17.1,24c2.7,4.1,5.3,8.1,7.8,12.3c1.4,2.4,2.8,4.7,4.1,7.2c0.6,1.2,1.4,3.8,2.2,4.7c0.2,0.2,0.4,0.4,0.5,0.7c6.1-5.4,12.9-10.2,19.8-14.8c1.7-2.1,3.6-4.1,5.3-6c6.7-7.3,14-14.2,20.7-21.6c-12.8-0.4-25.6-0.8-38.5-0.2c-3.1,0.1-6.5-2.2-6.5-5.6v-5c-0.7-1.9-0.3-3.7,0.6-5.9c0.3-0.8,0.8-1.5,1.4-2c0.8-1.4,2.4-2.5,4.6-2.5c22.4-0.1,44.8-2,67.2-2.2c20.2-0.2,41.1,2.5,61-1.9c6.1-1.4,10,5.9,7.1,9.6c0.8,8.4-6.6,12.5-14.8,13.3c-9.7,1-19.5,1.5-29.3,2.2c-0.4,0.4-0.8,0.8-1.4,1.2C349.6,225.2,346.5,231,342.7,235.8z M382.6,386.5c-6,7.3-15.6,0.7-23.2,2.2c-3,0.6-6.5-1.8-6.2-5.2c0.7-6,0.7-12,1.3-17.9c-1.1-2.6-0.3-6.3,3.3-7.2c8-2.1,16.4-1.1,24.6-0.1c3,0.4,4.7,2.4,4.8,5.3C387.7,370.8,387.4,380.7,382.6,386.5z M412,267.3c-1.6,5.2-3.2,10.4-3.9,15.8c-5.7,20.9-12.8,41.4-17.2,62.5c-2,3.2-4.7,5.7-8.8,6.2c-0.7,0.1-1.5,0.2-2.2,0.2c-5.7-0.2-11.4-0.5-17.1-1.2c-0.2-0.1-0.4-0.3-0.6-0.5c-0.3,0.1-0.7,0.2-1,0.3c-1.3-0.2-2.7-0.4-4-0.6c-1.3-0.8-2.2-2.3-2-4.4l0.2-2c0-0.2,0-0.3,0.1-0.4c0.2-1.7,0.4-3.3,0.6-5c-0.9-3.8-0.8-7.5-0.2-11.4c0-1.1,0-2.3,0-3.4c0.2-7.9,0.4-15.9,0.6-23.8c0.4-16.3-2.7-32.7-0.9-49c0.3-2.4,1.8-3.8,3.5-4.4c8,1.8,16.8,1,24.7,0.6c0.9,0,1.7-0.1,2.6-0.1c7.5,0.6,15,1.3,22.3,2.4c1.2,0.7,2.3,1.6,3.1,2.7c1.1,1.4,1.8,2.9,2.4,4.4C413.5,260,412.8,263.7,412,267.3z"/>
                            <path d="M437.6,109.2c-34.8-32.5-82.3-52.1-128.7-60.3c-47.1-8.3-97.4-4.5-141,15.7C92.5,99.6,32.7,178.2,31.5,262.4c-1.8,6.2-0.2,13.6-0.1,19.9c0.1,4.4,0.6,8.8,1.1,13.2c0.1,0.4,0.1,0.9,0.2,1.3c0,0.3,0,0.6,0,0.9c0.3,4.3,0.7,8.5,1.2,12.8c0,0.1,0,0.2,0,0.2c-0.2,1.3,0,2.3,0.5,3.2c1.1,8.1,2.6,16.1,4.1,24.1c2.2,11.3,5.1,22.4,8.6,33.2c7,21.2,17,41.5,29.8,59.8c25.6,36.4,63.8,62.1,107.9,69.7c25,4.3,51.4,3.5,76.5,0.1c25.5-3.4,50.6-10.3,74.2-20.5c47.2-20.3,87.4-54.2,114.7-97.8c26.3-42.2,42.7-91.8,42.9-141.7C493.4,190.9,474.2,143.4,437.6,109.2z M422.2,404.6c-33.2,39.8-79.5,66.7-129.3,79.9c-25.2,6.7-51.4,9.5-77.4,8.9c-23.8-0.5-47-4.8-68.7-15.1C115.4,463.4,91,437.4,74,407.4c-8.9-15.7-15.6-32.7-20.6-50.1c-2.6-8.9-4.6-17.9-6.1-26.9c-0.8-4.4-1.5-8.7-2.2-13.1c-0.1-0.2-0.2-0.4-0.2-0.7c-0.2-2.1-0.5-4.2-0.9-6.3c0.7-7.7-1.6-15.5-2.3-23.2c-0.3-4.2-0.4-8.4-0.6-12.6c0-0.8-0.2-1.8-0.3-2.7c0.2-1.1,0.3-2.2,0.5-3.3c0-1.5,0-3,0-4.4c0.3-1,0.3-1.9,0-2.7c1.7-80.8,60.5-156.5,133.5-189c44.3-19.7,95-21.5,142-11.7c46.7,9.8,94.4,32.3,126.3,68.7C511.9,207.7,483.7,330.9,422.2,404.6z"/>
                            <path fill="#D6E5E5" d="M393.1,195.4c-19.9,4.4-40.8,1.7-61,1.9c-22.4,0.2-44.8,2.1-67.2,2.2c-2.3,0-3.8,1-4.6,2.5c-0.6,0.5-1.1,1.1-1.4,2c-0.9,2.1-1.3,3.9-0.6,5.9v5c0,3.4,3.4,5.7,6.5,5.6c12.8-0.6,25.7-0.2,38.5,0.2c-6.8,7.3-14,14.3-20.7,21.6c-1.7,1.8-3.5,3.8-5.3,6c-6.9,4.6-13.7,9.3-19.8,14.8c-0.2-0.2-0.3-0.5-0.5-0.7c-0.9-0.9-1.6-3.5-2.2-4.7c-1.3-2.4-2.7-4.8-4.1-7.2c-2.5-4.2-5.1-8.3-7.8-12.3c-5.4-8.2-11-16.4-17.1-24c-8.3-10.5-18-19.9-26.9-30c0-0.1,0.1-0.3,0.1-0.4c10.2-0.7,20.5-1.2,30.7-2.3c8.2-0.8,15.6-5,14.8-13.3c2.9-3.7-1-11-7.1-9.6c-19.9,4.4-40.8,1.7-61,1.9c-22.4,0.2-44.8,2.1-67.2,2.2c-2.3,0-3.8,1-4.6,2.5c-0.6,0.5-1.1,1.1-1.4,2c-0.9,2.1-1.3,3.9-0.6,5.9v5c0,3.4,3.4,5.7,6.5,5.6c10.5-0.5,21-0.3,31.5,0c0.1,0.2,0.2,0.5,0.4,0.7c3.5,5.2,8.3,9.1,13,13.2c5.7,5,10.2,11.9,14.5,18.1c8.9,12.9,19.9,24.3,28.6,37.3c6.8,10.2,13.3,20.8,19.4,31.5c-3.3,28.4,4.7,57.4,4.9,85.9v8.8c0,0,0,0.1,0,0.1c-9.9,0-19.7,0-29.6,0c-0.5,0-1,0.1-1.4,0.2c-5.5-1.3-9.4,5.6-6.3,9.6c-0.5,1.7-0.7,3.4-0.8,5.2c-0.1,3.3,3.5,5.8,6.5,5.6c1-0.1,1.9-0.4,2.6-0.9c0.5,0.1,0.9,0.1,1.4,0.1c16.4,0,32.7,0.5,49.1,0.5c16,0,31.8-1.2,47.7-2.6c5.6-0.5,11.3-1.2,17-1.2c3.8,0,7.7,0,11.4-0.8c8.5-1.7,13.3-8.5,8.7-16.2c-1.1-4.8-7.8-6.5-10.6-3c-0.3,0.1-0.6,0.1-0.7,0.2c-0.7,0.1-1.4,0.2-2.1,0.4c-4.6,0.7-9.2,1-13.9,1.3c-7.4,0.5-14.8,0.8-22.2,1c0.1-0.5,0.2-0.9,0.2-1.5c0-1.6,0.1-3.2,0.1-4.8c0.4-5.3,0.4-10.7-0.1-16.1c0-16.2,0.3-32.5-1.6-48.5c-0.1-1.7-0.1-3.4-0.2-5.1c0.7-0.6,1.2-1.4,1.5-2.2c0.1-0.1,0.2-0.2,0.3-0.4c0.9-1,1.8-2,2.7-3c2.5-2.7,5.1-5.2,7.7-7.8c4.3-4.2,8.5-8.5,13.2-12.2c4.8-3.7,8.9-9,13.4-13.2c4.7-4.4,9.4-8.8,14.1-13.3c4.6-4.5,9.2-9.1,13.2-14.2c3.8-4.9,6.9-10.7,12.1-14.2c0.5-0.4,1-0.8,1.4-1.2c9.7-0.6,19.6-1.2,29.3-2.2c8.2-0.8,15.6-5,14.8-13.3C403.1,201.3,399.3,194,393.1,195.4z"/>
                            <path fill="#D6E5E5" d="M411.8 252c-.9-1.1-1.9-2-3.1-2.7-7.4-1.1-14.9-1.8-22.3-2.4-.9 0-1.7 0-2.6.1-7.9.4-16.7 1.2-24.7-.6-1.8.6-3.3 2-3.5 4.4-1.8 16.3 1.2 32.6.9 49-.2 7.9-.4 15.9-.6 23.8 0 1.1 0 2.3 0 3.4-.6 3.8-.7 7.5.2 11.4-.1 1.7-.3 3.3-.6 5 0 .1-.1.3-.1.4l-.2 2c-.3 2.1.6 3.5 2 4.4 1.3.2 2.7.4 4 .6.3-.1.7-.2 1-.3.2.2.4.4.6.5 5.6.7 11.4 1 17.1 1.2.7 0 1.5-.1 2.2-.2 4.1-.5 6.9-3.1 8.8-6.2 4.5-21.2 11.6-41.7 17.2-62.5.7-5.4 2.3-10.6 3.9-15.8.8-3.6 1.5-7.3 2.2-10.9C413.6 254.8 412.9 253.4 411.8 252zM387.3 363.6c-.2-2.9-1.9-4.9-4.8-5.3-8.1-1-16.5-2-24.6.1-3.6.9-4.5 4.6-3.3 7.2-.6 6-.6 12-1.3 17.9-.4 3.3 3.1 5.8 6.2 5.2 7.5-1.5 17.1 5.2 23.2-2.2C387.4 380.7 387.7 370.8 387.3 363.6z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Yahoo </div>
                    </button>
                    <button
                        className='flex w-1/2 ml-3 content-center items-center justify-center 
                        active:scale-[.98] active:duration-75 transition-all 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal'>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px" baseProfile="basic">
                            <path fill="#03a9f4" d="M16,9C7.168,9,0,16.168,0,25s7.168,16,16,16s16-7.168,16-16C32,16.168,24.832,9,16,9z M16,29.8	c-2.656,0-4.8-2.144-4.8-4.8c0-2.656,2.144-4.8,4.8-4.8c2.656,0,4.8,2.144,4.8,4.8C20.8,27.656,18.656,29.8,16,29.8z"/>
                            <path fill="#0288d1" d="M33.984,21c4.065,1.17,8.864,0,8.864,0c-1.392,6.08-5.808,9.888-12.176,10.352	C28.224,37.032,22.576,41,16,41l4.8-15.256C25.734,10.062,28.263,9,39.965,9L48,9C46.656,14.92,42.024,19.443,33.984,21z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with OnlyFans</div>
                    </button>
                </div>
                <div className='flex mt-1'>
                    <button 
                        className='flex w-1/2 content-center items-center justify-center 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal
                        active:scale-[.98] active:duration-75 transition-all '>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px">
                            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/>
                            <path fill="#FFF" d="M20 31L20 17 32 24z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Youtube</div>
                    </button>
                    <button 
                        className='flex w-1/2 ml-3 content-center items-center justify-center 
                        border-2 border-gray-200 py-3 rounded-xl 
                        bg-white text-black font-normal
                        active:scale-[.98] active:duration-75 transition-all '>  
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fd5"/>
                            <stop offset=".328" stop-color="#ff543f"/>
                            <stop offset=".348" stop-color="#fc5245"/>
                            <stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/>
                            <stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient>
                            <path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#4168c9"/>
                                <stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient>
                                <path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/>
                                <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/>
                                <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                        </svg>
                        <div className="ml-3 text-lg">Sign in with Instagram</div>
                    </button>
                </div>

                <div className='flex content-center items-center justify-center'>
                    <div className='font-normal text-base'>Don't have an account?</div>
                    <button 
                        className='active:scale-[.98] active:duration-75 transition-all
                        ml-2 font-bold text-base text-orange-400'>
                        Sign Up
                    </button>
                </div>
                
            </div>
        </div>
    );
}