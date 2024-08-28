/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const initialState = {
  nombre: "",
  cedula: "",
  email: "",
  telefono: "",
  direccion: "",
};

function ModalAgregarEditarCliente({
  isOpen,
  cliente,
  onClose,
  onAdd,
  onEdit,
}) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (cliente) {
      setForm({
        nombre: cliente.nombre || "",
        cedula: cliente.cedula || "",
        email: cliente.email || "",
        telefono: cliente.telefono || "",
        direccion: cliente.direccion || "",
      });
    } else {
      setForm(initialState);
    }
  }, [cliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (cliente) {
      onEdit(cliente.id, form);
    } else {
      onAdd(form);
    }
    onClose();
  };

  return (
    <dialog
      open={isOpen}
      className={`${
        isOpen ? "fixed inset-0 flex" : ""
      }  items-center justify-center rounded-lg`}
    >
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {cliente ? "Editar Cliente" : "Agregar Cliente"}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="cedula"
              className="block text-sm font-medium text-gray-700"
            >
              Cédula:
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              onChange={handleChange}
              value={form.cedula}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono:
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección:
            </label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {cliente ? "Guardar Cambios" : "Agregar Cliente"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default ModalAgregarEditarCliente;
