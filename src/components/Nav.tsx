import Link from "next/link";
import { Button } from "./ui/button";
import NavAvatar from "./NavAvatar";
import { useSession, signIn } from 'next-auth/react'

const Nav = () => {

    const { data: session } = useSession()

    // { formatDate(entry.createdAt.toDateString()) }
    return (
        <div className="flex w-full justify-between px-10 py-4">
            <Link href={"/"} className="text-4xl font-bold transition-colors hover:text-primary"></Link>
            <div className="flex items-center gap-3">
                {session?.user.id ? (
                    <NavAvatar />
                ) : (
                    <>
                        <Button asChild variant="secondary">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Register</Link>

                        </Button>
                    </>
                )}
            </div>

        </div>
    );
};

export default Nav;