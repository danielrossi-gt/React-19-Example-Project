import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  /*const entries = data.map((entry) => <Entry key={entry.id} entry={entry} />);*/
  const entries = data.map((entry) => <Entry key={entry.id} {...entry} />);

  return (
    <>
      <Header />
      <main className="container">
        {/* Iterando sobre o array de objetos data e passando as propriedades para o componente Entry */}
        {entries}
      </main>
    </>
  );
}
