import { ChevronRightIcon } from "lucide-react";

function Pedidos(props) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {props.pedidos.map((pedido) => (
          <li key={pedido.id} className="flex">
            <button
              onClick={() => props.onPedidoClick(pedido.id)}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pedidos;
