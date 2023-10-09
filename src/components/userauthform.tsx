"use client"
import GithubIcon from "@/components/GithubIcon";
import GoogleIcon from "@/components/GoogleIcon";
import { Button } from "@/components/ui/button";

import * as React from "react"
import { signIn } from "next-auth/react"
import { cn } from "@/utils/utils"
import { buttonVariants } from "./ui/button"
import { Chrome, Github, Loader2 } from "lucide-react"
import { APP_NAME } from "@/utils/constants";
import TwitterIcon from "./TwitterIcon";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)

    const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)



    return (
        <div className="flex flex-col gap-2">
            <Button
                variant="outline"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
                <GoogleIcon className="mr-2 h-5 w-5" />
                Continue with Google
            </Button>
            <Button
                variant="outline"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
                <GithubIcon className="mr-2 h-5 w-5" />
                Continue with Github
            </Button>
            <Button
                variant="outline"
                onClick={() => signIn("twitter", { callbackUrl: "/dashboard" })}
            >
                <TwitterIcon className="mr-2 h-5 w-5" />
                Continue with X
            </Button>
        </div>


    )
}