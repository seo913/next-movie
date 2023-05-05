import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import Link from 'next/link';

export default async function Main() {
  const db = (await connectDB).db('movie'); //디비 불러오기2 db('forum') 은 내가 만들어논 몽고디비저장소
  let result = await db.collection('movies').find().toArray(); //디비 불러오기3 // 이 줄이 모든 데이터를가져와주세요.
  // console.log(result);

//전체 페이지 조회
//1.HTMl 페이지 필요
//2.페이지 들어가면 DB에서 글 가져오기
//3.글들을 HTML에 뿌리기
  return (
    <div className='min-h-screen'>
    <div className=' flex items-center ml-[198px] text-black font-bold mt-5 text-2xl h-16'>박스오피스 순위</div>
    <div className='flex justify-center '>
    {result.map((v,i)=>{
      return(
          <div key={i}>
            <div className=' relative left-1 top-10 bg-black  text-white font-bold
            w-8 h-8 rounded-md flex justify-center items-center opacity-80'>{i+1}</div>
            {/* <Link href={`./detail/${result[i]._id }`} >  */}
            <Link href={`./detail/${result[i]._id}?index=${i} `} >
            <img className=' h-80 w-120 mr-4 rounded-xl lg:hover:scale-110 transition-transform ease-in-out duration-500' 
            src={`./movie${i}.jpeg`}></img>
            </Link>
            
          <div className='mt-4'>
            <p>{result[i].title}</p>
            <p>{result[i].date} ・ {result[i].where}</p>
          </div>
          </div>
          )
        })}
        </div>
  </div>
  )
}
