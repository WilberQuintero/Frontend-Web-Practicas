interface SaludoProps {
  nombre: string;
}

export const Saludo = ({ nombre }: SaludoProps) => {
  return (
    <header className="saludo">
        <h1>Hola, {nombre}</h1>
        <p>Mi primera aplicación con React y Vite</p>
    </header>
  );
}