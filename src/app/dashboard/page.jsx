"use client"

import { CurrentTrack } from "@/components/CurrentTrack";
import { Account } from "@/components/Account";
import { TopArstist } from "@/components/TopArstist";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi();

const page = () => {

	const [user, setUser] = useState({ name: '', image: '' });
	const [currentTrack, setCurrentTrack] = useState({ name: '', artist: '', image: '' });
	const [topArtist, setTopArtist] = useState([]);
	const [topTracks, setTopTracks] = useState([]);
	const [loading, setLoading] = useState(true);

	const navigate = useRouter();

	useEffect(() => {

		const token = localStorage.getItem('spotifyToken');

		if (token) {

			spotify.setAccessToken(token);

			spotify.getMe().then(user => {

				setUser({
					name: user.display_name,
					image: user.images[0].url
				});

			});

			spotify.getMyCurrentPlayingTrack().then(track => {

				if (track && track.item) {

					setCurrentTrack({
						name: track.item.name,
						artist: track.item.artists[0].name,
						image: track.item.album.images[0].url
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

					console.log(tracks.items);

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
		<main className="container mx-auto">
			{
				user ? (
					<div>
						<div className="block md:flex flex-col md:flex-row justify-between items-center mt-6 flex-wrap gap-4 mx-4 md:mx-0">
							<div className="flex-1 mb-2 md:mb-0">
								<Account image={user.image} name={user.name} />
							</div>
							<div className="flex-1">
								<CurrentTrack image={currentTrack.image} name={currentTrack.name} artist={currentTrack.artist} />
							</div>
						</div>
						{
							loading ? (
								<p>Loading...</p>
							) : (
								<>
									<div className="flex flex-col md:flex-row mt-6 gap-6 mx-4 md:mx-0">
										<section className="flex-1">
											<h2 className="text-2xl font-bold mb-4 text-gray-700">Top 10 Artistas más Escuchados</h2>
											<div className="space-y-4">
												{
													topArtist.map((artist, index) => (
														<TopArstist 
															name={artist.name} 
															index={index + 1} 
															key={index} 
															image={artist.images[0].url} 
														/>
													))
												}
											</div>
										</section>
										<section className="flex-1">
											<h2 className="text-2xl font-bold mb-4 text-gray-700">Top 10 Canciones más Escuchadas</h2>
											<div className="space-y-4">
												{
													topTracks.map((track, index) => (
														<TopArstist 
															name={track.name} 
															index={index + 1} 
															key={index} 
															image={track.album.images[0].url} 
															artist={track.artists[0].name}
														/>
													))
												}
											</div>
										</section>
									</div>
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