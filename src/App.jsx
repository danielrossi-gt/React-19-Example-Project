import Header from "./components/Header";
import Entry from "./components/Entry";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Passando as propriedades para o componente Entry */}
        <Entry
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </main>
    </>
  );
}
