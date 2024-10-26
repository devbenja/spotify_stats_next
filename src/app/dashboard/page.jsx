"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const page = () => {

	const [user, setUser] = useState([]);
	const [currentTrack, setCurrentTrack] = useState({ name: '', artist: '' });
	const [topArtist, setTopArtist] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [loading, setLoading] = useState(true);

	const navigate = useRouter();

	useEffect(() => {

		const token = localStorage.getItem('spotifyToken');

		if (token) {

			spotify.setAccessToken(token);

			spotify.getMe().then(user => {
				setUser(user);
			});

			spotify.getMyCurrentPlayingTrack().then(track => {

				if (track && track.item) {

					setCurrentTrack({
						name: track.item.name,
						artist: track.item.artists[0].name
					});

				}

			}).catch(error => {

				console.log(error);

			});

			spotify.getMyTopArtists({ limit: 10 }).then(artists => {

				if (artists && artists.items) {

					setTopArtist(artists.items);

				};

			}).catch(error => {
 
				console.log('artists', error);

			})

			spotify.getMyTopTracks({ limit: 10 }).then(tracks => {

				if (tracks && tracks.items) {

					setTopTracks(tracks.items);

				};

			}).catch(error => {

				console.log('tracks', error)

			});

			setLoading(false);

		} else {

			navigate.push('/');

		}

	}, [navigate]);

	return (
		<main>
			{
				user ? (
					<div>
						<div>
							<h1 className="text-2xl font-semibold">Bienvenido a tus estadisticas de Spotify, {user.display_name}</h1>

						</div>
						{
							loading ? (
								<p>Loading...</p>
							) : (
								<>
									<section className="m-4">
										<h3>
											Actualmente Escuchando: {currentTrack.name} - {currentTrack.artist}
										</h3>
									</section>
									<section className="m-4">
										<h3>Top Artistas más Escuchados</h3>
										<ul>
											{
												topArtist.map(artist => (
													<li key={artist.id}>
														{artist.name}
													</li>
												))
											}
										</ul>
									</section>
									<section className="m-4">
										<h3>Top Canciones más Escuchadass</h3>
										<ul>
											{
												topTracks.map(track => (
													<li key={track.id}>
														{track.name}
													</li>
												))
											}
										</ul>
									</section>
								</>
							)
						}
					</div>
				) : (
					<p>Cargando...</p>
				)
			}
		</main>
	)
}

export default page;