import React from 'react'
import axios from "axios";

const RecentChinpoTweetUI = () => {
  //const url = "http://127.0.0.1:8000/getRecentChinpo"; //ローカル用

  const url = "https://afternoon-badlands-48725.herokuapp.com/getRecentChinpo"; //デプロイ用
  
	const GetData = () => {
    document.getElementById('processing-message').textContent = "取得中。ちょっと待ってね。"
		axios.get(url).then((res) => {
      const ret = res.data;
      for (let i = 0; i < ret.length; i++) {
          const li = document.createElement('li');
          const innerUl = document.createElement('innerUl');
          const innerLiUser = document.createElement('innerLiUser');
          const innerLiText = document.createElement('innerLiText');

          innerLiUser.textContent = (ret[i].user_name + "(@" + ret[i].user_id + ") ");
          innerLiUser.style.fontWeight = "bold";
          innerLiUser.style.textDecoration = "underline";

          innerLiText.textContent = ret[i].text + "  " + ret[i].created_at;

          innerUl.appendChild(innerLiUser);
          innerUl.appendChild(innerLiText);

          innerUl.style.display = "inline";

          li.appendChild(innerUl);
          li.style.textAlign = "left";
          li.style.paddingTop = "20px";

          document.getElementById('chinpoTweetList').appendChild(li);

//          li.textContent = ret[i].user_name + " (@" + ret[i].user_id + ") " + ret[i].text + "  " + ret[i].created_at;

          //document.getElementById('chinpoTweetList').appendChild(li);
      }
      document.getElementById('processing-message').textContent = "ちんぽいっぱい採れましたぁ♡"
		});
	};
  
    return (
      < div className="products">
        <br></br>
        <button className="shadow-lg px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition" onClick={GetData}>最新ちんぽを取得</button>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 id="processing-message"></h2>
        </div>
        <br></br>
        <font size="5"><ul id="chinpoTweetList" className="content-list"></ul></font>
      </ div>
    );
  }

export default RecentChinpoTweetUI;