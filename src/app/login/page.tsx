'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter
import LoginIllustrator from '../../../public/assets/file.png'; // Adjust path if needed

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter(); // Initialize useRouter

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        if (email === "abc@gmail.com" && password === "123") {
            window.alert("Success");
            router.push('/home'); // Redirect to the desired page
        } else {
            window.alert("Failure");
        }
    }

    return (
        <div className="container flex justify-center">
            <div className="w-[80%] h-[80vh] flex bg-white">
                <div className="w-[50%] bg-blue-300 flex justify-center items-center">
                    <Image
                        src={LoginIllustrator}
                        alt="Login Illustration"
                        className="aspect-square w-2/3 h-2/3"
                    />
                </div>
                <div className="w-1/2 text-black flex justify-center items-center">
                    <div className="w-2/3 h-1/2 bg-slate-100 flex flex-col gap-3 justify-center items-center">
                        <h1 className="font-semibold text-lg">Login</h1>
                        <input
                            type="text"
                            placeholder="Email"
                            className="text-sm"
                            value={email}
                            onChange={handleEmail}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-sm"
                            value={password}
                            onChange={handlePassword}
                        />
                        <div
                            className="bg-blue-400 text-white cursor-pointer py-1 px-2 rounded-md"
                            onClick={handleSubmit}
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
