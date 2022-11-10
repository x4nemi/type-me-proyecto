import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { GiLightBulb } from "react-icons/gi";
import { MdEdit } from "react-icons/md";

export const DashboardPage = () => {
    return (
        <div className="items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold xl:text-5xl">
                    Bienvenidos a la aplicación
                </h1>
                <div className="flex">
                    <RiDoubleQuotesL className="text-2xl" />
                    <h2 className="text-3xl font-bold">Type Me</h2>
                    <RiDoubleQuotesR className="text-2xl" />
                </div>
            </div>

            <div className="grid min-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 ">
                <div className="card ring xl:h-52">
                    <div className="card-body">
                        <h2 className="card-title xl:text-2xl">
                            <GiLightBulb color="yellow" size={30} /> Interactúa
                        </h2>
                        <p className="mb-2">
                            Comparte tu opinión sobre el tipo de personalidad de
                            las personas que conozcas.
                        </p>
                    </div>
                </div>
                <div className="card image-full shadow-none xl:h-52">
                    <figure>
                        <img
                            src="https://i.pinimg.com/originals/51/da/7b/51da7bad43d853e80a43fd53ef0e7324.gif"
                            alt="gif"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>
                <div className="card image-full xl:h-52">
                    <figure>
                        <img
                            src="https://media.tenor.com/NEjTHwt9aRUAAAAS/punchy-dance.gif"
                            alt="gif"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>
                <div className="card ring xl:h-52">
                    <div className="card-body">
                        <h2 className="card-title">
                            <AiFillDelete color="red" size={30} />
                            Elimina publicaciones
                        </h2>
                        <p className="mb-2">
                            Si no quieres que se vea una publicación compartida
                            en tu perfil, puedes eliminarla.
                        </p>
                    </div>
                </div>
                <div className="card ring xl:h-52">
                    <div className="card-body">
                        <h2 className="card-title">
                            <MdEdit size={30} color="purple" /> Edita
                            publicaciones
                        </h2>
                        <p className="mb-2">
                            Si cometiste un error al escribir una publicación,
                            puedes editarla.
                        </p>
                    </div>
                </div>
                <div className="card image-full xl:h-52">
                    <figure>
                        <img
                            src="https://i.pinimg.com/originals/c4/61/87/c4618750abf893954f1cd58f8f410908.gif"
                            alt="gif"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};
