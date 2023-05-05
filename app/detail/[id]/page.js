import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import {ObjectId} from 'mongodb'; //ObjectId불러오는법 

export default async function Detail (props){
    const db = (await connectDB).db('movie'); 
    let result = await db.collection('movies').findOne({ _id : new ObjectId(props.params.id) }); 
    return(
        <>
        <div className='min-h-screen flex flex-col justify-center items-left relative'>
        
            <div>
            <img src={`./movie${ props.searchParams.index }.jpeg`} 
            className='w-80 h-[150] absolute left-[400px] bottom-28 ' ></img>
            </div>  
        
        <div className='bg-blue-300 flex flex-col h-48 w-[480px] absolute left-[800px] px-3 py-3 
        items-center justify-center text-center rounded-lg font-bold' >
        <div className='pb-3 text-2xl'>{result.title}</div>
        <div className=' text-xl'>{result.content}</div>
        <div>{result.date}-{result.where}</div>
        </div>
        </div>
        </> 
    )
}