import React from 'react';
import Link from 'next/link';


const PostAds = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <div className="w-full h-4 max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-3 p-10">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-center font-bold leading-none text-gray-900 dark:text-white flex-1">Post Ad</h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              clear
            </a>
          </div>
        </div>
        <div className="w-full max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-8 dark:bg-gray-800 dark:border-gray-700">
          <select id="countries" className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Category*</option>
            <option value="US">Electronics</option>
            <option value="CA">Clothes</option>
            <option value="FR">Furniture</option>
            <option value="DE">Cars</option>
          </select>
          <select id="countries" className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Location*</option>
            <option value="kampala">kampala</option>
            <option value="mukono">mukono</option>
            <option value="mbale">mbale</option>
            <option value="mbarara">mbarara</option>
          </select>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Add photo</p>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Add atleast 1 photo for this category </span></p>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">First picture- is the title picture.
            you can change the order of photos. just drag and drop</p>
          <div className="flex items-center">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>

          </div>
          <p className="text-xs mb-3 text-gray-500 dark:text-gray-400"> supported formats are .svg .png .jpg or gif (MAX. 800x400px)</p>


          <Link href="#" className="inline-flex items-center mb-3  block w-full border border-gray-200 justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="w-full">Link to Youtube videos</span>

          </Link>
          <br></br>
          <Link href="/create">
            <button type="button" className="py-2.5 px-5 block w-full  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-700 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white ">Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostAds;
