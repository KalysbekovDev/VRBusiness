import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa'

const Subscribe = () => {
    return (
        <section id='subscribe'>
            <div className="subscribe container">
                <h1>Subscribe to get the Latest News</h1>
                <p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                <form>
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search"
                               style={{borderRadius:'35px'}}
                               className="block w-full  p-6 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Enter your email address" required/>
                            <button type="submit" style={{display:'flex', alignItems:'center',borderRadius:'35px', padding:'15px 30px'}}
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <FaTelegramPlane/>
                                Subscribe
                            </button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Subscribe;
