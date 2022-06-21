import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h1>お探しのページは見つかりませんでした。あるのはちんぽだけだよ。</h1>
          <Link to="/">
              <button
                type="submit"
                className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
              >
                入口へ
              </button>
            </Link>
        </ div>
      </ div>
    </ div>
  );

};

export default NotFound;