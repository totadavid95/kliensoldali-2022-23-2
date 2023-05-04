import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
import { Tracks } from "./tracks/Tracks";
import { Search } from "./search/Search";
// import { Menu } from "./menu/Menu";
import { Layout } from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="playlists/:playlistID?/:trackID?" element={<Playlists />} />
          <Route path="tracks" element={<Tracks />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <Layout>
  //     <Home />
  //     <Playlists />
  //     <Tracks />
  //     <Search />
  //   </Layout>
  // )
  // return (
  //   <div className="ui container">
  //     <Menu />
  //     <Home />
  //     <Playlists />
  //     <Tracks />
  //     <Search />
  //   </div>
  // );
}
