import React from 'react';
import Link from 'next/link';

function CreateAds() {
    return (
        <div className="flex justify-center items-center bg-gray-100 p-4">
            <div className="flex flex-col items-center">
                <div className="w-full h-4 max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-3 p-10">
                    <div className="flex items-center justify-between mb-4">
                        <Link href="/sales" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-0">
                            Back
                        </Link>
                        <h5 className="text-center font-bold leading-none text-gray-900 dark:text-white flex-1">
                            Post Ad
                        </h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 ml-auto">
                            Clear
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="title"
                            required
                        />
                    </div>

                    <select id="countries" className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Foods</option>
                        <option value="US">Electronics</option>
                        <option value="CA">Clothes</option>
                        <option value="FR">Furniture</option>
                        <option value="DE">Cars</option>
                    </select>


                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea
                                id="description"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Description"
                                required
                            />
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="15000"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Add Bulk price
                                </label>
                                <input
                                    type="text"
                                    id="bulk-price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="2-pieces"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label htmlFor="remember" className="block ml-2 text-sm font-medium text-gray-900 dark:text-white">
                                Negotiable
                            </label>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="ml-4">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="+256-756767687"
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Doe john"
                                    required
                                />
                            </div>

                        </div>
                    </form>


                </div>
                <br></br>
                <div className="w-full max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-8 dark:bg-gray-800 dark:border-gray-700">

                    <p>Delivery</p>
                    <select id="countries" className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Add delivery options</option>
                        <option value="US">Door Delivery</option>
                        <option value="CA">Pick Up</option>
                        <option value="FR">Others</option>
                    </select>
                </div>
                <br></br>
                <div className="w-full max-w-xl xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 px-8 dark:bg-gray-800 dark:border-gray-700">
                    <h3>Promote your ad</h3>
                    <p>please, choose one of the following to promote your add</p>
                    <div>
                        <Link href="">
                            <button
                                type="button"
                                className="py-2.5 px-5 flex items-center justify-between w-full mb-2 text-sm font-medium text-gray-900 focus:outline-none w-full rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <h5 className="mr-2">Standard ad</h5>
                                <p className="">free</p>
                            </button>
                        </Link>
                    </div>
                    <div className="py-2.5 px-5 flex items-center justify-between w-full mb-2 text-sm font-medium text-gray-900 focus:outline-none w-full rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        <div className="mr-2">
                            <h4 className='mb-10'>TOP</h4>
                            <button
                                type="button"
                                className="rounded-lg border border-gray-200 px-2 mr-4 py-2"
                            >
                                7 days
                            </button>
                            <button
                                type="button"
                                className="rounded-lg border border-gray-200 px-2 mr-4 py-2"
                            >
                                30days
                            </button>
                        </div>
                        <p className="py-0">Ush 7000</p>

                    </div>
                    <div className="py-2.5 px-5 flex items-center justify-between w-full mb-2 text-sm font-medium text-gray-900 focus:outline-none w-full rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        <div className="mr-2">
                            <h4 className='mb-10'>Boost Premium</h4>
                            <button
                                type="button"
                                className="rounded-lg border border-gray-200 px-2 mr-4 py-2"
                            >
                                1 month
                            </button>
                        </div>
                        <p className="py-0">Ush 70000</p>

                    </div>
                    <Link href="/">
                        <button type="button" className="py-2.5 px-5 block w-full  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-700 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Post ad</button>
                    </Link>
                    <div className="text-xs">
                        By clicking on Post Ad, you accept the
                        <a href="/rules" className="text-blue-700">
                            Terms of Use
                        </a>
                        , confirm that you will abide by the Safety Tips, and declare that this posting does not include any Prohibited Items.
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateAds;
