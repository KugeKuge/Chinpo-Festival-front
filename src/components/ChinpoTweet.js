import React from 'react'
import RecentChinpoTweetUI from './RecentChinpoTweetUI'

function ChinpoTweet() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            見ろよ見ろよ
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          俺とお前のちんぽついーと
        </h2>

      </div>
      <br></br>
      <div className="sm:text-center">
        <RecentChinpoTweetUI />
      </div>
    </div>
  );
}
  
export default ChinpoTweet;