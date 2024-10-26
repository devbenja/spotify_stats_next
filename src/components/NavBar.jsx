import { User } from "lucide-react";

export const NavBar = () => {

    return (
        <nav className="flex items-center justify-between bg-green-600 p-2 px-4">
            <span className="text-xl font-bold text-white">Spotify Stats</span>
            <button className="rounded-full border-white p-2" aria-label="Perfil de usuario">
                <User className="h-7 w-7 text-white" aria-hidden="true" />
            </button>
        </nav>
    );

};
