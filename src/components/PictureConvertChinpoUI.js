import axios from "axios";
import React, { useRef } from 'react';

const PictureConvertChinpoUI = () => {
  const userImg = useRef();
  const imagePreviewSize = 900;

  const onChange = (e) => {
        const image = e.target.files[0];

        if (image) {
          userImg.current.title = image.name;

          const reader = new FileReader();        
          reader.onload = (event) => {
              userImg.current.setAttribute('src', event.target.result)

              const wkImage = new Image();
              wkImage.src = event.target.result;
              wkImage.onload = function() {

                const wkWidth = wkImage.naturalWidth;
                const wkHeight = wkImage.naturalHeight;

                let magnification = 0

                if (wkWidth > wkHeight) {
                  magnification = imagePreviewSize / wkWidth;
                } else {
                  magnification = imagePreviewSize / wkHeight;
                }

                document.getElementById('original-image').width = magnification * wkWidth
                document.getElementById('original-image').height = magnification * wkHeight
              }
          };
          reader.readAsDataURL(image);
        }
  }

  //const url = "http://127.0.0.1:8000/chinpo"; //ローカル用

  const url = "https://afternoon-badlands-48725.herokuapp.com/chinpo"; //デプロイ用

    const onClick = (e) => {
      const src = document.getElementById('original-image').src;

      if (src !== "") {
        axios.post(
            url,
            {
              base64_image_string: src // リクエストボディで送る場合 JSONで複数指定
            }
            )
            .then(res => {
              const img = document.querySelector('#chinpo-image')
              img.src = "data:image/jpg;base64," + res.data.base64_image_string // Jsonで帰ってきたとき

              img.onload = function() {

                const wkWidth = img.naturalWidth;
                const wkHeight = img.naturalHeight;
                
                let magnification = 0

                if (wkWidth > wkHeight) {
                  magnification = imagePreviewSize / wkWidth;
                } else {
                  magnification = imagePreviewSize / wkHeight;
                }

                document.getElementById('chinpo-image').width = magnification * wkWidth
                document.getElementById('chinpo-image').height = magnification * wkHeight
              }
            }
        )
      }
    }
  
    return (
      <div>
        <input
          type="file"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={onChange} 
          className="form-label inline-block mb-2 text-gray-700"
        />

        <button 
          className="shadow-lg px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
          onClick={onClick}>ちんぽにゃ
        </button>

        <br></br>
        <img id="original-image" ref={userImg}/>
        <img id="chinpo-image" className="chinpo-image"/>
      </div>
    )
  }

export default PictureConvertChinpoUI;