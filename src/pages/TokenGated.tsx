import  { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Button from '@/components/ui/button';
import toast, { Toaster } from 'react-hot-toast';
import { useAccount, useReadContract } from "wagmi";
import abi from '../utils/abi.json';





export default function SPLTokenLoginCard() {
    const { address } = useAccount();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {

        if (!address) {
            toast.error("Connect You Wallet First", {
                position: 'bottom-center'
            });
            return;
        }
        // @ts-ignore
        if (Number(data)/Number(10**18) < 10) {
            toast.error("You need 10 SPL Token to Login",{
                position:'bottom-center'
            });
            return;
        }
        // @ts-ignore

        if (address || Number(data)/Number(10**18) >= 10) {
            toast.success("You logged Successfully",{
                position:'bottom-center'
            });
            setIsLoggedIn(true)
            return;
        }


    };

    const { data } = useReadContract({
        abi,
        address: "0x69217B786fC0a8daA9F6DfE374C85a5052cD2389",
        functionName: "balanceOf",
        args: [address],
    });

    console.log();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 z-40">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>SPL Token Login</CardTitle>
                    <CardDescription>
                        Ensure you have SPL tokens to login.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!isLoggedIn ? (
                        <Button onClick={handleLogin} className="w-full">
                            Login
                        </Button>
                    ) : (
                        <Button  className="w-full">
                        Welcome You are logged in !
                    </Button>
                    )}

                    <Toaster />
                </CardContent>
            </Card>
        </div>
    );
}
