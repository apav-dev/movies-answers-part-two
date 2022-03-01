import { CardProps } from "../../models/cardComponent";

interface Actor {
  name: string,
  primaryPhoto?: {
    image: {
      url: string
  }
},
  c_bio?: string
}

export function ActorCard(props: CardProps): JSX.Element {
  const actor = props.result.rawData as unknown as Actor;

  return (
    <div className='min-w-1/3 h-96 relative flex flex-col justify-center'>
      <div 
        className='absolute z-10 h-full w-2/5 top-0 left-8 bg-cover shadow-2xl'
        style={{ backgroundImage: `url(${actor.primaryPhoto?.image.url})` }}>
      </div>
      <div className='h-80 bg-gray-300 flex justify-end text-gray-800'>
        <div className='w-1/2 flex flex-col items-center  my-8 mr-2 bg-white shadow-2xl'>
          <span className='text-3xl truncate text-ellipsis font-bold w-64 text-center font-display'>
            {actor.name}
          </span>
          <div className='text-xs overflow-y-hidden text-ellipsis w-64 text-justify font-body max-h-56 pt-4'>
            {actor.c_bio}
          </div>
        </div>
      </div>
    </div>
  )
}