export const metadata = {
  title: "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
  const res = await fetch(URL);
  const json = await res.json();
  return json;
}

export default async function HomePage(){
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
}