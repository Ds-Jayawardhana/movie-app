import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// Define the Movie type
interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
  
  
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/fff.png'
          }}
          className="w-full h-52 rounded-lg"
          resizeMode='cover'
        />
          <Text className="text-white text-sm font-bold mt-2" >
            {title}
          </Text>
         <Text className="text-gray-400 text-xs mt-1">
            ⭐ {vote_average.toFixed(1)}
          </Text>
          <Text className="text-gray-500 text-xs">
            {new Date(release_date).getFullYear()}
          </Text>
        
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard