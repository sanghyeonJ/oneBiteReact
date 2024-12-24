function Main(){
    const user = {
        name: "jsh",
        islogin : true
    }

    return (
        <>
            {user.islogin ? <div>로그아웃</div> : <div>로그인</div>}
        </>
    )
}

export default Main;