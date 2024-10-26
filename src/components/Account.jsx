import { Card, CardContent } from "@/components/ui/card";

export const Account = ({ name, image }) => {

    return (
        <Card className="w-full rounded-md">
            <CardContent className="p-3">
                <h3 className="text-md font-semibold mb-2">Cuenta</h3>
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
                        <h2 className="text-xl font-semibold text-gray-500" title="Bienvenida">
                            Bienvenido a tus Estadisticas de Spotify
                        </h2>
                        <h2 className="text-xl font-semibold" title={name}>
                            {name}
                        </h2>
                    </div>
                </div>
            </CardContent>
        </Card>
    );

};
