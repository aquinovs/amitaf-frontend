import './index.scss';

export default function Login() {
    return (
        <div className="App">
            <div className=" login"> 
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="password" />
                <input type="submit" value="Sign in" />
                <div className='grupo'>
                    <a href="/">esqueci minha senha</a>
                    <button href="/">inscrever-se</button>
                </div>
            </div>
        </div> 
    )

}