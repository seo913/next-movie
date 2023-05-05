import { connectDB } from '@/util/database'; //디비 불러오기1 순서
import { data } from 'autoprefixer';

export default async function join(req,res){ //req=유저들이 요청 res=유저들한테 응답  서버는 기능실행 후에 유저에게 응답해줘야함.
    if(req.body === 'POST'){
        //return res.status(200).json('처리완료');  //응답에 성공하면 제이슨으로 완료되었는지 나타낼수있음 
                                                //status (200 응답성공) (500 응답실패) (400 유저잘못)
                                                // 여러 요청을 어떤건 포스트 어떤건 겟을 쓰고싶으면 이프문을 서서 요청.메소드 ==="" 타입을 안에입력
    
    //현재유저정보 몽고디비에 있는 회원가입 정보 제이슨으로 불러오기
    // const db = (await connectDB).db('movie');    
    // let result = await db.collection('join').find().toArray();
    // return res.status(200).json(result);


    //현재 시간 불러오기
    //return res.status(200).json(new Date()); 
        const db =(await connectDB).db('movie');
        let result = await db.collection('join').find().toArray();
        return res.status(200).json(result);
    }

}