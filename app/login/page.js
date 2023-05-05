'use client'

export default function LogIn (){
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className=" text-center mb-3 text-2xl font-bold">로그인</div>
            <div className="flex flex-col justify-center items-center" action="/api/post/new" method="POST">  
                <input className="border w-80 h-10 border-blue-400 mb-3 " name="id" type="text" placeholder="아이디"/>
                <input className="border w-80 h-10 border-blue-400" name="password" type="password" placeholder="비밀번호"/>
                {/* 폼태그 사용할때  본인이 만든서버 유알엘적고 메소드에 포스트랑 겟만 사용할수있음 */}
                <button  className=" bg-blue-300 hover:bg-blue-500 py-2 px-3 rounded-lg mt-3">로그인</button>
            </div>
        </div>
    )
}