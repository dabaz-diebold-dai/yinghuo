"use client";

import { posts } from '@/components/CMS'

export default function BlogPosts() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-0 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-neutral-500">
                {post.date}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-100 group-hover:text-neutral-300 transition-colors">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-400">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.author.imageUrl} alt={post.author.imageAlt} className="h-10 w-10 rounded-full bg-neutral-950" />
              <div className="text-sm leading-6">
                <p className="font-semibold text-neutral-100">
                  <div>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </div>
                </p>
                <p className="text-neutral-400">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}