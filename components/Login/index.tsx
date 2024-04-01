"use client";

import React from "react";
import { MdAdsClick } from "react-icons/md";
import * as Form from "@radix-ui/react-form";

function Login() {
  return (
    <div className="max-w-md mx-auto flex rounded-xl min-h-full flex-col justify-center px-6 py-8 lg:px-8 border-l border-t border-b border-r border-gray-200 bg-gradient-to-br from-purple-600 to-gray-600">
      <div className="sm:mx-auto sm:w-full mt-0 mb-3 sm:max-w-sm inline-flex gap-4 justify-between">
        <h2 className="text-center text-lg font-medium leading-6  p-2 text-white">
          Sign into your account
        </h2>

        <div className="w-10 h-10 mb-3 text-white p-2 bg-indigo-500 rounded-full flex items-center justify-center">
          <MdAdsClick size="32px" />
        </div>
      </div>

      <Form.Root className="width:260px space-y-6" action="#" method="POST">
        <Form.Field className="display-grid mb-5px" name="email">
          <Form.Label className="font-size-15px font-weight-500 line-height-35px block leading-6 text-white">
            Email
          </Form.Label>
          <Form.Control asChild>
            <input
              className="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              type="email"
              placeholder=" Enter your email"
              required
            />
          </Form.Control>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          {/* <Form.ValidityState /> */}
        </Form.Field>

        <Form.Field className="display-grid mb-5px" name="password">
          <Form.Label className="font-size-15px font-weight-500 line-height-35px block leading-6 text-white">
            Password
          </Form.Label>
          <Form.Control asChild>
            <input
              className="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              type="password"
              placeholder=" Enter your password"
              required
            />
          </Form.Control>
          <Form.Message className="FormMessage" match="valueMissing">
            Enter your password
          </Form.Message>
          {/* <Form.ValidityState /> */}
        </Form.Field>

        <Form.Submit asChild>
          <button
            disabled
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            // className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-medium leading-none text-white disabled:opacity-60"
            type="submit"
          >
            Sign In
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

export default Login;
