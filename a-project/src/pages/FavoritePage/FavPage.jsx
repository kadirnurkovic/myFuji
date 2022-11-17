import { FavoritesList } from "../../components/Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function FavPage() {
  const { favItems, removeFromFav } = useContext(FavoritesList);
  const navigate = useNavigate();
  let anime = favItems.filter((e) => {
    return e.type === "anime";
  });

  let manga = favItems.filter((e) => {
    return e.type === "manga";
  });


  return (
    <div className="bg-dark h-full">
      {favItems.length === 0 ? (
        <div className=" text-white text-2xl pt-10 flex justify-center">
          <p className="cursor-pointer" onClick={() => {
            navigate('/', {
            })
          }}>You have no favorites</p>

        </div>
      ) : (
        <div>
          {anime.length !== 0 ? (
            <div className="flex flex-col">
              <h1 className="text-white bg-dark text-2xl p-4 text-left">
                Anime
              </h1>
              <hr className="text-white w-3/4"></hr>
              <div className="w-full border-b pb-3 border-white flex flex-wrap">
                {anime?.map((el) => (
                  <div key={el.id} 
                  className="group flex justify-center hover:scale-105 mx-3 transition ease-out mt-10 relative w-fit bg-black cursor-pointer rounded-lg shadow-md hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:group-hover:bg-gray-900">
                    <div
                      className="flex justify-center"
                      onClick={() => {
                        navigate(`/manga/${el.title}/${el.id}`, {
                          state: {
                            id: el.id,
                            image: el.image,
                            title: el.title,
                            description: el.description,
                            type: el.type,
                          },
                        });
                      }}
                    >
                      <h1 className="absolute text-xl text-white top-2 z-10 opacity-0 delay-150 group-hover:opacity-100">
                        {el.title}
                      </h1>
                      <img
                        src={el.image}
                        alt=""
                        className=" rounded-lg delay-150 group-hover:brightness-20"
                      />
                    </div>
                    <div
                      className="absolute self-end text-white delay-150 z-10 opacity-0 group-hover:opacity-100 w-full flex justify-center"
                      onClick={() => removeFromFav(el.id, el.title)}
                    >
                      <p className="absolute self-end bottom-5 text-white delay-150 z-10 opacity-0 group-hover:opacity-100">
                        Remove from Favorites
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {manga.length !== 0 ? (
            <div className="flex flex-col">
              <h1 className="text-white bg-dark text-2xl p-4 text-left">
                Manga
              </h1>
              <hr className="text-white w-3/4"></hr>
              <div className="w-full border-b pb-3 border-white flex flex-wrap">
                {manga?.map((el) => (
                  <div key={el.id} 
                   className="group flex justify-center hover:scale-105 transition ease-out mt-10 relative w-fit bg-black cursor-pointer rounded-lg shadow-md hover:bg-gray-25 dark:bg-gray-800 dark:border-gray-700 dark:group-hover:bg-gray-900 mx-3">
                    <div
                      className="flex justify-center"
                      onClick={() => {
                        navigate(`/manga/${el.title}/${el.id}`, {
                          state: {
                            id: el.id,
                            image: el.image,
                            title: el.title,
                            description: el.description,
                            type: el.type,
                          },
                        });
                      }}
                    >
                      <h1 className="absolute text-xl text-white top-2 z-10 opacity-0 delay-150 group-hover:opacity-100">
                        {el.title}
                      </h1>
                      <img
                        src={el.image}
                        alt=""
                        className=" rounded-lg delay-150 group-hover:brightness-20"
                      />
                    </div>
                    <div
                      className="absolute self-end text-white delay-150 z-10 opacity-0 group-hover:opacity-100 w-full flex justify-center"
                      onClick={() => {
                        removeFromFav(el.id, el.title);
                      }}
                    >
                      <p className="absolute self-end bottom-5 text-white delay-150 z-10 opacity-0 group-hover:opacity-100">
                        Remove from Favorites
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}