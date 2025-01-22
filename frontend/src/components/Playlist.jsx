import icarus from "../assets/icarus-bk.jpeg"
import liked from "../assets/hearth.svg"
import nonLiked from "../assets/hearth-liked.svg"
const musics = [
    {
        title: "Asa Branca",
        artists: "Luiz Gonzaga",
        image: icarus,
        liked: false
    },
    {
        title: "Cerol na mão",
        artists: "Bonde do tigrao",
        image: icarus,
        liked: true
    },
    {
        title: "Vai Lacraia",
        artists: "Bonde do tigrão",
        image: icarus,
        liked: false
    },
    {
        title: "Avião sem asa",
        artists: "Claudinho e Bochecha",
        image: icarus,
        liked: true
    },
    {
        title: "Pegasus Fantasy",
        artists: "Artista Desconhecido",
        image: icarus,
        liked: false
    },
    {
        title: "Só fé",
        artists: "Mc Poze",
        image: icarus,
        liked: true
    },
    {
        title: "Título da Música 7",
        artists: "Artists da Música 7",
        image: icarus,
        liked: false
    },
    {
        title: "Título da Música 8",
        artists: "Artists da Música 8",
        image: icarus,
        liked: true
    },
    {
        title: "Título da Música 9",
        artists: "Artists da Música 9",
        image: icarus,
        liked: false
    },
    {
        title: "Título da Música 10",
        artists: "Artists da Música 10",
        image: icarus,
        liked: true
    },
    {
        title: "Título da Música 11",
        artists: "Artists da Música 11",
        image: icarus,
        liked: false
    },
    {
        title: "Título da Música 12",
        artists: "Artists da Música 12",
        image: icarus,
        liked: true
    },
    {
        title: "Título da Música 13",
        artists: "Artists da Música 13",
        image: icarus,
        liked: false
    }
]
export default function Playlist() {
    return(
        <section className="flex flex-col gap-4">
            {musics.map((music, index) => (
                <div key={index} className="flex flex-row justify-between gap-2 items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <img className="h-20 rounded-2xl" src={music.image} alt="imagem da musica" />
                        <div>
                            <strong className="text-xl front-semibold trucate max-w-60">{music.title}</strong>
                            <p className="text-sm text-gray-300 trucate max-w-60">{music.artists}</p>
                        </div>
                    </div>
                    <img className="h-5" src={music.liked ? liked : nonLiked} alt="icone do coracao" />
                </div> 
            )
            )}
        </section>
    )
}