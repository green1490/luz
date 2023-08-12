export default function Login() {
    return (
        <>
            <div className="h-screen grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >
                <p className="font-['Times_New_Roman'] text-7xl">Luz</p>
                <input autoComplete="off" className="px-2 outline outline-1 bg-transparent h-10" placeholder="Email" type="email" name="email"></input>
                <div className="text-center">
                    <input autoComplete="off" className="px-2 outline outline-1 bg-transparent h-10" placeholder="Password" type="password" name="password"></input>
                    <p className="row-start-4">Dont have an account? <a className="text-cyan-700/80" href="/registration">Sign Up</a></p>
                </div>
                <button className="row-start-6 w-64 outline outline-offset-2 outline-1 text-xl">Log in</button>
            </div>
        </>
    )
}