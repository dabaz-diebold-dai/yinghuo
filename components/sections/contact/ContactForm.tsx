"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdorjvqr");

  if (state.succeeded) {
    return <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-md lg:max-w-lg text-center">
        <p className="text-neutral-100 text-xl">感谢您的信息，我们将尽快回复。</p>
      </div>
    </div>
  }

  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-md lg:max-w-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-neutral-50 font-medium text-lg">
              姓名
            </label>
            <Input
              id="name"
              type="text" 
              name="name"
              placeholder="请输入您的姓名"
              className="my-4 bg-neutral-800 border-neutral-700 text-neutral-50"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <label htmlFor="email" className="text-neutral-50 font-medium text-lg">
              电子邮箱
            </label>
            <Input
              id="email"
              type="email" 
              name="email"
              placeholder="请输入您的电子邮箱"
              className="my-4 bg-neutral-800 border-neutral-700 text-neutral-50"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="name" className="text-neutral-50 font-medium text-lg">
              信息
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="请输入您的信息"
              className="my-4 bg-neutral-800 border-neutral-700 text-neutral-50"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="text-center">
            <button type="submit" disabled={state.submitting} className="text-neutral-950 bg-neutral-50 px-3.5 py-2.5 rounded-md text-sm mt-4">
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}