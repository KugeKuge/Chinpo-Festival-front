import { useSelector } from '../../app/store';

function ChinpoCount() {

  const chinpoString = useSelector(state => state.chinpoString.chinpoString)
  const count = useSelector(state => state.chinpoString.count)
  
  return (
    <div className="text-3xl px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {chinpoString ? <div><h2>{chinpoString}</h2></div> : <div></div>}
      {count ? <div><h2>{count}ちんぽじゃ</h2></div> : <div></div>}
    </div>
  );
}
  
export default ChinpoCount;