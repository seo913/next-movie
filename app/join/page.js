export default function Join(){

    
    return(
        <> 
            <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="bg-blue-400 w-96 h-96 text-center flex flex-col justify-center items-center text-white ">
                <p className=" font-bold text-2xl mb-3">회원가입</p>

                <form  action='/api/post/join' method="POST" > 

                    <div className="ml-3 mb-2  ">ID : 
                    <input type="text" placeholder="아이디를 입력해주세요." name="id"
                    className="border border-teal-300 focus:outline-red-300 h-10  text-black"></input>
                    </div>
                    <div className="mb-2">PW : 
                    <input type="password" placeholder="비밀번호를 입력해주세요." name="pw"
                    className=" border border-teal-300 focus:outline-red-300 h-10 text-black "></input>
                    </div>
                    <div className="mb-2">이름 : 
                    <input type="text" placeholder="이름을 입력해주세요." name="name"
                    className=" border border-teal-300 focus:outline-red-300 h-10 text-black "></input>
                    </div>
                    <div className="mb-2">PH : 
                    <input type="text" placeholder="전화번호를 입력해주세요." name="phone"
                    className=" border border-teal-300 focus:outline-red-300 h-10 text-black "></input>
                    </div>
                {/* 폼은 post get만 가능  */}
                    <button type="submit" className="border-2 px-3 py-2 rounded-xl ">가입하기</button>
                </form>
            </div>
            </div>
        </>
    )
}