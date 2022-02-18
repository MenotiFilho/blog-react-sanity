import React from 'react'

function Post() {
  return (
    <div>
      <div className=" flex h-64 w-96 justify-start gap-4 bg-red-500">
        <div className=" h-32 w-32 bg-slate-500"></div>
        <div className="flex flex-col gap-3">
          <h1 className="mt-4 text-5xl">Title</h1>
          <p className="w-60">
            This is a subtitle, you can put a little description of what this
            post is about in here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
