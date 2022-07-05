import axios from "axios";
import React from 'react';
import { useHooksForImageUpload } from '../../app/hooks';
import { styles, imageDisplaySize } from '../../app/styles';

const calcMagnification = (naturalWidth: number, naturalHeight: number) => {
  const imagePreviewSize = imageDisplaySize.width;

  if (naturalWidth > naturalHeight) {
    return imagePreviewSize / naturalWidth;
  } else {
    return imagePreviewSize / naturalHeight;
  }
}

const PictureConvertChinpoUI = () => {
  const { handleFiles, imageContainerRef } = useHooksForImageUpload();
  
  //const url = "http://127.0.0.1:8000/chinpo"; //ローカル用
  const url = "https://afternoon-badlands-48725.herokuapp.com/chinpo"; //デプロイ用

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const originalImageElementCasted = imageContainerRef.current?.children[0] as HTMLImageElement;


    const canvas = document.createElement('canvas');
    canvas.width  = originalImageElementCasted.naturalWidth;
    canvas.height = originalImageElementCasted.naturalHeight;
    // Draw Image
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(originalImageElementCasted, 0, 0);
    // To Base64
    const src =  canvas.toDataURL("image/jpeg");

    const processingMessageElement = document.getElementById('processing-message')

    if (src !== "" && processingMessageElement) {
      processingMessageElement.textContent = "ちんぽ貼り付け中。ちょっと待ってね。"
      axios.post(
          url,
          {
            base64_image_string: src // リクエストボディで送る場合 JSONで複数指定
          }
          )
          .then(res => {
            const img = document.querySelector('#chinpo-image') as HTMLImageElement;
            img.src = "data:image/jpg;base64," + res.data.base64_image_string // Jsonで帰ってきたとき

            img.onload = function() {
              const magnification = calcMagnification (img.naturalWidth, img.naturalWidth)
  
              const chinpoImageElement = document.getElementById('chinpo-image') as HTMLImageElement;
  
              if (chinpoImageElement) {
                chinpoImageElement.width = magnification * img.naturalWidth
                chinpoImageElement.height = magnification * img.naturalWidth
              }

              processingMessageElement.textContent = "な、陰茎だろ？"
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
          onChange={handleFiles} 
          className="form-label inline-block mb-2 text-gray-700"
        />

        <button 
          className="shadow-lg px-2 py-1 bg-blue-400 text-lg text-white font-semibold rounded hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition"
          onClick={onClick}>ちんぽにゃ
        </button>
        <p className="text-base text-gray-700 md:text-lg" id="processing-message">
        </p>
        <div id="original-image" className="original-image" ref={imageContainerRef} style={{...styles.imageContainer}} />
        <img id="chinpo-image" className="chinpo-image"/>
      </div>
    )
  }

export default PictureConvertChinpoUI;