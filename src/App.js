import "./styles.css";
import Form from "./Form";

const movies = [
  { name: "Avengers", availables: 5 },
  { name: "Terminator", availables: 5 },
  { name: "Avatar", availables: 5 },
  { name: "Terminator 2", availables: 5 }
];

export default function App() {
  return (
    <div>
      <h2>Películas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
