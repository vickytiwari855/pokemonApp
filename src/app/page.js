"use client";
import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm.js";
import PokemonCard from "../components/PokemonCard.js";

export default function Home() {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState([
    {
      name: "Bulbasaur",
      image: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
    },
    {
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/large/ivysaur.jpg",
    },
    {
      name: "Venusaur",
      image: "https://img.pokemondb.net/artwork/large/venusaur.jpg",
    },
  ]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) =>
        setPokemonTypes(
          data.results.map((type) => {
            return { type: type.name, url: type.url };
          })
        )
      );
  }, []);

  useEffect(() => {
    if (selectedType) {
      fetch(selectedType)
        .then((res) => res.json())
        .then((data) => {
          let newData = data.pokemon.map((item) => item.pokemon);
          setPokemonList(newData);
        });
    }
  }, [selectedType]);

  const handleSearch = () => {
    let searchData = pokemonList.filter((item) => item.name === searchTerm);
    setPokemonList(searchData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Pokémon Search App</h1>
      <SearchForm
        pokemonTypes={pokemonTypes}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => {
          return <PokemonCard key={pokemon} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}
