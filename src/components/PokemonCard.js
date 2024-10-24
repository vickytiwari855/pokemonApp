import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="border border-gray-300 rounded-md p-4 text-center">
      <img
        src={
          pokemon.image ||
          "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
        }
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-lg font-semibold">{pokemon.name}</h2>
      <Link href={`/${pokemon.name.toLowerCase()}`}>Details →</Link>
    </div>
  );
}
