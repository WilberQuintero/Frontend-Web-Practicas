import { Saludo } from './Saludo.tsx';
import { TarjetaPerfil } from './TarjetaPerfil.tsx';

export default function App() {
  return (
    <main className="App">
      <Saludo nombre="Wilber VQ" />
   
    <section className="equipo">  
      <TarjetaPerfil nombre="Wilber VQ" carrera="Ingeniería en Sistemas Computacionales" semestre={6} />
      <TarjetaPerfil nombre="Juan Pérez" carrera="Ingeniería Industrial" semestre={4} />
      <TarjetaPerfil nombre="María López" carrera="Licenciatura en Administración" semestre={2} />
    </section>
    </main>
  );
}