import { Search } from "lucide-react";

const WeatherSearch = ({ city, setCity, onSearch }) => {
  //recibo estado y setEstado como props e igual la funcion de busqueda

  const handleInputChange = (e) => {
    //esta funcion al ser de un input recibe un evento "e"
    setCity(e.target.value); //actualizamos el estado con el valor del input
  };

  const handleSubmit = (e) => {
    //esta funcion captura el envio del formulario
    e.preventDefault(); //esto hace que la pagina no se recargue al enviar el formulario
    onSearch(city.trim());
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2 mb-6"
    >
      <input
        type="text"
        placeholder="Escribe una ciudad..."
        onChange={handleInputChange}
        className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-150 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <Search className="h-4 w-4 mr-2" /> Consultar
      </button>
    </form>
  );
};

export default WeatherSearch;
