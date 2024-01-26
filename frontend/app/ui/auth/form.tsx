'use client'
import Link from 'next/link';
import { FormEvent } from "react";
import React, { useState } from "react"

export default function LoginForm() {

  async function LoginHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method='post' onSubmit={LoginHandler}>
        <input
          placeholder=" "
          name="username"
          type='text'
        />
        <label >
          NIS
        </label>
        <input
          type="password"
          placeholder=" "
          name="password"
        />
        <label>
          Password
        </label>
        <button
          type="submit"
          data-ripple-light="true"
        >
          Sign In
        </button>

      </form>

    </div>


  )
}
