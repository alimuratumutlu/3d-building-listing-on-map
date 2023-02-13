import styles from "styles/Home.module.css";

// Components
import { Customizer, Information, Map, MetaTags } from "components";

const Meta = [
  { name: "title", content: "Title of the website" },
  { name: "description", content: "Description of the website" },
];

export default function Home() {
  const initialViewState = {
    maxZoom: 16,
    pitch: 0,
    bearing: 0,
    longitude: -74,
    latitude: 40.7,
  };

  return (
    <>
      <MetaTags tags={Meta} />
      <main className={styles.main}>
        <Customizer />
        <Map initialViewState={initialViewState} />
        <Information />
      </main>
    </>
  );
}
