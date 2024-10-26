import { Card, CardContent } from "@/components/ui/card"

export const TopArstist = ({ name, image, index, artist}) => {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 text-4xl font-bold text-green-600 text-center">
                        #{index}
                    </div>
                    <img
                        src={image}
                        alt={`Foto de ${image}`}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <p className="text-sm text-gray-500">{artist}</p>
                    </div>
                    {/* <Badge variant="secondary">{artist.topGenre}</Badge> */}
                </div>
            </CardContent>
        </Card>
    )
}
