import { CardProps } from "../../models/cardComponent";

interface Movie {
  name: string,
  description?: string,
  c_poster?: {
    url: string,
    thumbnails: {url: string}[]
  },
  c_genres?: string[],
  c_mpaRating?: string
}

export function MovieCard(props: CardProps): JSX.Element {
  const movie = props.result.rawData as unknown as Movie;
  const movieThumbnail = movie.c_poster?.thumbnails[movie.c_poster?.thumbnails.length - 1].url ?? '';

  function renderMovieInfo() {
    return (
      <ul className="space-x-1 text-sm">
        <li>{movie.c_mpaRating ? movie.c_mpaRating :  ''}</li>
        <li>/</li>
        <li>2h 13min</li>
        <li>/</li>
        <li>{movie.c_genres?.[0] ?? ''}</li>
      </ul>
    )
  }

  function renderDescription() {
    return (
      <div className="flex flex-col px-4">
        <div>Description:</div>
        <div className="text-sm">{movie.description}</div>
      </div>
    )
  }

  return (
    <div className="w-64 h-96 flex flex-col rounded-lg relative" >
      <div className="flex flex-col group">
        <div className="absolute top-0 bottom-0 right-0 left-0 w-full rounded-lg bg-gray-900 object-cover opacity-0 transition duration-300 ease-linear group-hover:opacity-90"></div>
        <div className="w-full h-96 bg-cover rounded-lg" style={{ backgroundImage: `url(${movieThumbnail})` }}/>
        <div className="flex flex-col font-body text-white absolute opacity-0 transition duration-500 sm:group-hover:opacity-100 ">
          <div className="w-60 px-4 mt-1 mb-2">
            <div className="truncate text-lg">{movie.name}</div>
            {renderMovieInfo()}
          </div>
          {renderDescription()}
        </div>
      </div>
    </div>
  )
}