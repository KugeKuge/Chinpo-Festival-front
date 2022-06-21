import React from 'react'
import { Link } from 'react-router-dom'
import TweetImage from "../inkeitweet.jpg";
import GanmenImage from "../ganmen.png";

function Home() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="flex justify-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        陰茎のお祭りじゃ
      </h1>  
      <br></br>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <Link to="/ChinpoTweet">
          <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 md:text-center">
            <div className="relative">
              <img class="inline-flex items-center mr-8" src={TweetImage} width="300" height="50"/>

              <div className="absolute inset-0 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                俺とお前のちんぽついーと
              </h5>
              <p className="mb-5 text-gray-700">
                ついったーのみんながどれくらいちんぽについて考えてるか、知りたくない？ Here we go.
              </p>

              <button
                type="submit"
                className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
              >
                ちんぽついーとを見に行く
              </button>

            </div>
          </div>
        </Link>
        <Link to="/ChinpoFace">
          <div className="transition duration-300 transform bg-white rounded hover:-translate-y-1 md:text-center">
            <div className="relative">

              <img class="inline-flex items-center mr-8" src={GanmenImage} width="300" height="50"/>

              <div className="absolute inset-0 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                お前の顔面は所詮陰茎
              </h5>
              <p className="mb-5 text-gray-700">
                人間の顔面なんて所詮陰茎だよ。そうだろ？
              </p>

              <button
                type="submit"
                className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
              >
                顔面に陰茎を貼り付ける
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
  
export default Home;