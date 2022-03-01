import { CardProps } from "../../models/cardComponent";

// Name is only required field for a Movie entity, every other field needs the conditional operator
interface Movie {
  name: string,
  description?: string,
  c_poster?: {
    url: string
  },
  c_genres?: string[],
  c_mpaRating?: string,
  c_runtime?: string
}

export function MovieCard(props: CardProps): JSX.Element {
  const movie = props.result.rawData as unknown as Movie;

  // converts time from minutes to hh mm format (i.e. 127 minutes -> 2 h 7 min)
  function timeConvert(runtime?: string) {
    if(!runtime){
      return null;
    }

    const runtimeMins = parseInt(runtime);

    if(!runtimeMins){
      return null;
    }
    
    const hours = (runtimeMins / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + " h " + rminutes + " m";
  }

  function renderMovieInfo() {
    return (
      <ul className='space-x-1 text-sm'>
        <li>{movie.c_mpaRating ? movie.c_mpaRating :  ''}</li>
        <li>/</li>
        <li>{timeConvert(movie.c_runtime)}</li>
        <li>/</li>
        <li>{movie.c_genres?.[0] ?? ''}</li>
      </ul>
    )
  }

  function renderDescription() {
    return (
      <div className='flex flex-col mt-4'>
        <span className='font-display text-lg'>Description:</span>
        <div className='text-sm'>{movie.description}</div>
      </div>
    )
  }

  return (
    <div className='w-64 h-96 flex flex-col rounded-lg relative group' >
      <div className='absolute top-0 bottom-0 right-0 left-0 rounded-lg bg-gray-200 opacity-0 transition duration-300 ease-linear group-hover:opacity-90'></div>
      <div className='w-full h-96 bg-cover rounded-lg shadow-movie' style={{ backgroundImage: `url(${movie.c_poster?.url})` }}/>
      <div className='w-60 px-4 mt-1 mb-2 flex flex-col font-body text-gray-800 absolute opacity-0 transition duration-500 group-hover:opacity-100'>
        <span className='font-display text-lg'>{movie.name}</span>
        {renderMovieInfo()}
        {renderDescription()}
      </div>
    </div>
  );
}