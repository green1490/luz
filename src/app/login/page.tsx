export default function Login() {
    return (
        <>
            <div className="h-screen grid bg-[#ef4444] place-items-center" >
                <p className="text-7xl">Luz</p>
                <input autoComplete="off" className="h-10" placeholder="Email" type="email" name="email"></input>
                <input autoComplete="off" className="h-10" placeholder="Password" type="password" name="password"></input>
                <button className="text-xl">Log in</button>
            </div>
        </>
    )
}