import MangaCard from "../../components/MangaCard/MangaCard";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/scroll/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { createGlobalStyle } from "styled-components";
import ToTop from "../../components/ToTop/ToTop";

//style

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
`;

function Manga() {
  const [manga, setManga] = useState([]);
  const [offset, setOffset] = useState(0);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  let kategorija = "";
  let naziv = "";
  let pomeraj = 0;
  const navigate = useNavigate();
  const { state } = useLocation();
  const [hasMore, setHasMore] = useState(true);
  const [promena, setPromena] = useState(true);

  async function getManga() {
    let res;
    if (kategorija.length === 0 && naziv.length === 0) {
      res = await fetch(
        `https://kitsu.io/api/edge/manga?&page[limit]=20&page[offset]=${pomeraj}`
      );
    } else {

      if (naziv.length !== 0 && kategorija.length === 0) {
        res = await fetch(
          `https://kitsu.io/api/edge/manga?filter[text]=${naziv}&page[limit]=20&page[offset]=${pomeraj}`
        );
      } else if (value.length === 0 && kategorija.length !== 0) {
        res = await fetch(
          `https://kitsu.io/api/edge/manga?filter[categories]=${kategorija}&page[limit]=20&page[offset]=${pomeraj}`
        );
      } else {
        res = await fetch(
          `https://kitsu.io/api/edge/manga?filter[categories]=${kategorija}&filter[text]=${naziv}&page[limit]=20&page[offset]=${pomeraj}`
        );
      }
    }
    const data = await res.json();
    setManga((prevValue) => [...prevValue, ...data.data]);
    if (data.data.length === 0) {
      setPromena(false);
    } else {
      setPromena(true);
    }
  }

  useEffect(() => {
    if (state) {
      setCategory(state.category);
      kategorija = state.category;
    }
    window.scrollTo({top: 0});
    getManga();
  }, []);

  useEffect(() => {
      promena === true ? setHasMore(true) : setHasMore(false);
  }, [promena]);

  useEffect(() => {
    setOffset(offset + 20);
  }, [manga]);

  pomeraj = offset;
  naziv = value;
  kategorija = category;

  return (
    <div className="bg-dark">
      <div className="w-full flex justify-around">
        <select
          id="default"
          value={category}
          className="bg-dark h-10 w-4/12 border border-white text-grayish rounded-lg my-auto ml-5"
          onChange={(e) => {
            kategorija = e.target.value;
            setCategory(kategorija);
            setManga([]);
            pomeraj = 0;
            setOffset(-12);
            setValue(naziv);
            getManga();
          }}
        >
          <option selected>Choose a category</option>
          <option value="adventure">Adventure</option>
          <option value="action">Action</option>
          <option value="fantasy">Fantasy</option>
          <option value="crime">Crmie</option>
          <option value="drama">Drama</option>
          <option value="romance">Romance</option>
          <option value="supernatural">Supernatural</option>
          <option value="magic">Magic</option>
          <option value="horror">Horror</option>
        </select>
        <form
          className="bg-dark flex justify-end m-12"
          onSubmit={(e) => {
            e.preventDefault();
            setValue(naziv);
            setOffset(-12);
            setManga([]);
            pomeraj = 0;
            getManga();
          }}
        >
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block h-10 pl-10 w-full text-sm text-gray-900 border-white bg-dark rounded-lg border border-gray-300"
              placeholder="Search"
              required=""
              onChange={(e) => {
                naziv = e.target.value;
              }}
            />
          </div>
        </form>
      </div>
      <hr className="text-white w-11/12 m-auto"></hr>
      <GlobalStyle />

      <InfiniteScroll
        dataLength={manga.length}
        next={getManga}
        hasMore={hasMore}
        loader={<Loader className=" bg-dark" />}
        endMessage={
          <p className="text-center text-white">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ToTop/>
        <div className="flex flex-wrap gap-8 justify-center bg-dark py-10">
          {manga.map((manga) => (
            <div
              key={manga.id}
              className="flex flex-wrap w-1/5 justify-center"
              onClick={() => {
                navigate(`${manga.attributes.canonicalTitle}/${manga.id}`, {
                  state: {
                    id: manga.id,
                    image: manga.attributes.posterImage.small,
                    title: manga.attributes.canonicalTitle,
                    description: manga.attributes.description,
                    type: manga.type,
                  },
                });
              }}
            >
              <MangaCard
                image={manga.attributes.posterImage.small}
                title={manga.attributes.canonicalTitle}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Manga;
