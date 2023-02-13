import styles from "styles/Home.module.css";

// Components
import { MetaTags } from "@/components";

export default function Home() {
  return (
    <>
      <MetaTags
        title="Muum Dev Maps"
        description="Built with MapBox, DeckGL, and React"
      />

      <main className={styles.main}></main>
    </>
  );
}
