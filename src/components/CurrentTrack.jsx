import { Card, CardContent } from "@/components/ui/card";

export const CurrentTrack = ({ name, artist, image }) => {

	return (
		<Card className="w-full rounded-md">
			<CardContent className="p-3">
				<h3 className="text-md font-semibold mb-2">Escuchando</h3>
				<div className="flex items-center space-x-4">
					<div className="">
						<img
							src={image}
							alt={`Portada de ${name}`}
							width={90}
							height={80}
							className="rounded-md"
						/>
					</div>
					<div className="flex-grow">
						<h2 className="text-xl font-bold truncate" title={name}>
							{name}
						</h2>
						<p className="text-gray-500 truncate" title={artist}>
							{artist}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);

};
