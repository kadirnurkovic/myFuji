import { useEffect, useState } from "react";
import HomePoster from "../../components/HomePoster/HomePoster";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [romance, setRomance] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const navigate = useNavigate();

  const getTrending = () => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((json) => {
        setTrending(json.data);
      });
  };

  const getCategories = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=adventure")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.data);
      });
  };

  const getTrendingManga = () => {
    fetch("https://kitsu.io/api/edge/manga")
      .then((res) => res.json())
      .then((json) => {
        setTrendingManga(json.data);
      });
  };

  const getAction = () => {
    fetch("https://kitsu.io/api/edge/manga?filter[categories]=action")
      .then((res) => res.json())
      .then((json) => {
        setAction(json.data);
      });
  };

  const getRomance = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=romance")
      .then((res) => res.json())
      .then((json) => {
        setRomance(json.data);
      });
  };

  const getHorror = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=horror")
      .then((res) => res.json())
      .then((json) => {
        setHorror(json.data);
      });
  };



  useEffect(() => {
    getTrending();
    getCategories();
    getRomance();
    getHorror();
    getAction();
    getTrendingManga();
  }, []);

  const clickAnimeCategoryHandler = (cat) => {
    navigate(`/anime`, {
      state: {
        category: cat
      },
    });
  }
  const clickMangaCategoryHandler = (cat) => {
    navigate(`/manga`, {
      state: {
        category: cat
      },
    });
  }

  return (
    <div className="bg-dark">
      <Carousel
        className="shadow-xl"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="true"
        interval={5000}
      >
        {trending.slice(0, 5).map((el) => (
          <HomePoster
            image={el.attributes.coverImage.large}
            title={el.attributes.canonicalTitle}
            episodes={el.attributes.episodeCount}
            rating={el.attributes.averageRating}
            description={el.attributes.description}
            posterImage={el.attributes.posterImage.small}
            id={el.id}
          />
        ))}
      </Carousel>
      <h1 className="flex flex-start text-2xl ml-5 mt-5 text-white cursor-pointer" onClick={() => {
        clickAnimeCategoryHandler("action")
      }}>
        Adventure
      </h1>
      <div className="rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5 m-3">
        {categories.map((el) => (
          <img
            src={el.attributes.posterImage.small}
            alt=''
            onClick={() => {
              navigate(`/anime/${el.id}/${el.attributes.canonicalTitle}`, {
                state: {
                  id: el.id,
                  image: el.attributes.posterImage.small,
                  title: el.attributes.canonicalTitle,
                  description: el.attributes.description,
                },
              });
            }}
            className="w-full shadow-xl mr-5 hover:scale-110 object-contain h-52 transition-transform duration-400 cursor-pointer"
          />
        ))}
      </div>

      <h1 className="flex flex-start text-2xl ml-5 mt-5 text-white cursor-pointer" onClick={() => {
        clickAnimeCategoryHandler("action")
      }}>
        Romance</h1>
      <div className="rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5 m-3">
        {romance.map((el) => (
          <img
            src={el.attributes.posterImage.small}
            alt=''
            onClick={() => {
              navigate(`/anime/${el.id}/${el.attributes.canonicalTitle}`, {
                state: {
                  id: el.id,
                  image: el.attributes.posterImage.small,
                  title: el.attributes.canonicalTitle,
                  description: el.attributes.description,
                },
              });
            }}
            className="w-full shadow-xl mr-5 hover:scale-110 object-contain h-52 transition-transform duration-400 cursor-pointer"
          />
        ))}
      </div>
      <h1 className="flex flex-start text-2xl ml-5 mt-5 text-white cursor-pointer" onClick={() => {
        clickAnimeCategoryHandler("horror")
      }}>
        Horror</h1>
      <div className="rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5 m-3">
        {horror.map((el) => (
          <img
            src={el.attributes.posterImage.small}
            alt=''
            onClick={() => {
              navigate(`/anime/${el.id}/${el.attributes.canonicalTitle}`, {
                state: {
                  id: el.id,
                  image: el.attributes.posterImage.small,
                  title: el.attributes.canonicalTitle,
                  description: el.attributes.description,
                },
              });
            }}
            className="w-full shadow-xl mr-5 hover:scale-110 object-contain h-52 transition-transform duration-400 cursor-pointer"
          />
        ))}
      </div>
      <h1 className="flex flex-start text-2xl ml-5 mt-5 text-white cursor-pointer" onClick={() => {
        clickMangaCategoryHandler("adventure")
      }}>
        Adventure Manga</h1>
      <div className="rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5 ml-3">
        {trendingManga.map((el) => (
          <img
            src={el.attributes.posterImage.small}
            alt=''
            onClick={() => {
              navigate(`/manga/${el.id}/${el.attributes.canonicalTitle}`, {
                state: {
                  id: el.id,
                  image: el.attributes.posterImage.small,
                  title: el.attributes.canonicalTitle,
                  description: el.attributes.description,
                },
              });
            }}
            className="w-full shadow-xl mr-5 hover:scale-110 object-contain h-52 transition-transform duration-400 cursor-pointer"
          />
        ))}
      </div>
      <h1 className="flex flex-start text-2xl ml-5 mt-5 text-white cursor-pointer" onClick={() => {
        clickMangaCategoryHandler("action")
      }}>
        Action Manga</h1>
      <div className="rowPosters flex flex-row overflow-y-hidden overflow-x-scroll p-5 ml-3">
        {action.map((el) => (
          <img
            src={el.attributes.posterImage.small}
            alt=''
            onClick={() => {
              navigate(`/manga/${el.id}/${el.attributes.canonicalTitle}`, {
                state: {
                  id: el.id,
                  image: el.attributes.posterImage.small,
                  title: el.attributes.canonicalTitle,
                  description: el.attributes.description,
                },
              });
            }}
            className="w-full shadow-xl mr-5 hover:scale-110 object-contain h-52 transition-transform duration-400 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
