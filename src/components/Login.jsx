"use client"

import { loginUrl } from "../auth/auth";

export const Login = () => {

    return (
        <div className="container mx-auto border min-h-screen">

            <div>
                <h1>Login to Spotify</h1>
                <a href={loginUrl}>Login with Spotify</a>
            </div>

        </div>
    );

};
