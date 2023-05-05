import { connectDB } from '@/util/database'; //디비 불러오기1 순서

export default async function join(req, res){
    if(req.method == 'POST'){
        if(req.body.id === ''){  //console.log(req.body) 찍고 아이디에 아무것도 안적혀있으면 '' 벨류에 공백으로 나옴 그걸 이프문으로 비교
            return res.status(500).json('아이디입력안함');
            
        }
        if(req.body.pw === ''){ //위와 동일
            return res.status(500).json('비밀번호입력안함');
            // alert('비밀번호를 입력해주세요.');
        }
        try {
        const db = (await connectDB).db('movie'); //디비 불러오기2 db('forum') 은 내가 만들어논 몽고디비저장소
        let result = await db.collection('join').insertOne(req.body); 
        //데이터를 입력하고싶으면 인서트원 오브젝트자료형 도큐먼트하나 발행하고싶으면
        return res.status(200).redirect(302,'/main'); // 저장완료하면 리다이렉트로 메인화면으로 돌아감 redirect(302,'/경로');
        } catch (error) {
            console.error(error);
        }
        
    }
}