"use client"

import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useRouter } from 'next/navigation';
import { getTokenFromUrl } from '../auth/auth';

const spotify = new SpotifyWebApi();

export const Callback = () => {

    const router = useRouter();

    useEffect(() => {

        console.log('useEffect is running');

        const hash = getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token && _token !== '') {

            console.log('Token exists:', _token);
            spotify.setAccessToken(_token);

            localStorage.setItem('spotifyToken', _token);

            router.push('/dashboard');

        } else {

            console.log('No token found, redirecting to login.');

            router.push('/');

        }

    }, [router]);

    return (
        <div>
            <h2>Autenticando...</h2>
        </div>
    );

}


