"use client";
import React, { useEffect, useState } from "react";

export default function PokemonDetails({ params }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (params.pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
        .then((res) => res.json())
        .then((data) => {
          const details = {
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            type: data.types.map((t) => t.type.name).join(", "),
            stats: data.stats.map((stat) => stat.stat.name).join(", "),
            abilities: data.abilities.map((ab) => ab.ability.name).join(", "),
            moves: data.moves
              .slice(0, 5)
              .map((move) => move.move.name)
              .join(", "),
          };
          setPokemonDetails(details);
        });
    }
  }, [params.pokemon]);

  if (!pokemonDetails) return <p>Loading...</p>;
  return (
    <div className="container mx-auto p-6">
      <div className="border border-gray-300 rounded-md p-6 text-center">
        <img
          src={pokemonDetails.image}
          alt={pokemonDetails.name}
          className="w-48 h-48 mx-auto"
        />
        <h1 className="text-2xl font-bold">{pokemonDetails.name}</h1>
        <p>
          <strong>Type:</strong> {pokemonDetails.type}
        </p>
        <p>
          <strong>Stats:</strong> {pokemonDetails.stats}
        </p>
        <p>
          <strong>Abilities:</strong> {pokemonDetails.abilities}
        </p>
        <p>
          <strong>Some Moves:</strong> {pokemonDetails.moves}
        </p>
      </div>
    </div>
  );
}
