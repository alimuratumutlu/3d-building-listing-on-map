import styles from "styles/Home.module.css";

// Components
import { Customizer, Information, Map, MetaTags } from "components";

const Meta = [
  { name: "title", content: "Title of the website" },
  { name: "description", content: "Description of the website" },
];

export default function Home() {
  return (
    <>
      <MetaTags tags={Meta} />
      <main className={styles.main}>
        <Customizer />
        <Map />
        <Information />
      </main>
    </>
  );
}
