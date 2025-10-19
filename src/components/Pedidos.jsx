import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Pedidos({ pedidos, onPedidoClick, onRemoverClick }) {
  // ou direto props
  return (
    <div>
      <ul className="mt-5 space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {pedidos.map(
          // ou props.
          (pedido) => (
            <li key={pedido.id} className="flex">
              <button
                onClick={() => onPedidoClick(pedido.id)}
                className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${
                  pedido.pendente ? "opacity-100" : "opacity-50"
                }`}
              >
                {pedido.titulo}

                {pedido.pendente ? " (Pendente)" : " (Concluído)"}
              </button>
              <button className="bg-slate-400 text-white p-2 rounded-md ml-2">
                <ChevronRightIcon />
              </button>
              <button
                onClick={() => onRemoverClick(pedido.id)}
                className="bg-slate-400 text-white p-2 rounded-md ml-2"
              >
                <DeleteIcon />
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Pedidos;
