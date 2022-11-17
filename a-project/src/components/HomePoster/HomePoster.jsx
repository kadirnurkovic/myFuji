import { useNavigate } from "react-router-dom";


export default function HomePoster({image, posterImage, title, episodes, rating, description, id}) {
    const navigate = useNavigate();
    
    return (
        <div className="group relative rounded-lg transition ease-out delay-150 cursor-pointer"
        onClick={() => {
            navigate(`/anime/${title}/${id}`, {
              state: {
                id: id,
                image: posterImage,
                title: title,
                description: description,
              },
            });
          }}>
            <img src={image} alt='' className="group-hover:brightness-50 h-full transition ease-out delay-150"/>
            <h1 className="absolute drop-shadow-xl self-end top-5 ml-10 text-white text-3xl delay-150 z-0 opacity-0 group-hover:opacity-100">{title}</h1>
            <h1 className="absolute drop-shadow-xl self-end top-16 ml-10 text-white text-xl delay-150 z-0 opacity-0 group-hover:opacity-100">Episodes: {episodes}</h1>
            <h1 className="absolute drop-shadow-xl self-end top-24 ml-10 text-white text-xl delay-150 z-0 opacity-0 group-hover:opacity-100">Rating: {rating}</h1>
        </div>
    )
}