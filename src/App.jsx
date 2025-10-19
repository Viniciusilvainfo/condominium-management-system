import Pedidos from "./components/Pedidos.jsx";
import AddPedidos from "./components/AddPedidos.jsx";
import { useState } from "react";

function App() {
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      titulo: "Pedido 1",
      descricao: "Pedido para o apartamento 101",
      pendente: false,
    },
    {
      id: 2,
      titulo: "Pedido 2",
      descricao: "Pedido para o apartamento 202",
      pendente: true,
    },
  ]);

  function onPedidoClick(pedidoId) {
    const novoPedidos = pedidos.map((pedido) => {
      if (pedido.id === pedidoId)
        return { ...pedido, pendente: !pedido.pendente };

      return pedido;
    });
    setPedidos(novoPedidos);
  }

  function onRemoverClick(pedidoId) {
    if (!confirm("Tem certeza que deseja remover este pedido?")) return false;
    const novoPedidos = pedidos.filter((pedido) => pedido.id != pedidoId);
    setPedidos(novoPedidos);
  }

  function onInsertClick() {
    const descricao = document.getElementById("descricao").value;
    const titulo = document.getElementById("titulo").value;
    const pedido = {
      titulo,
      descricao,
      id: pedidos.length + 1,
      pendente: true,
    };
    setPedidos([...pedidos, pedido]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Pedidos
        </h1>
        <AddPedidos setPedidos={setPedidos} onInsertClick={onInsertClick} />
        <Pedidos
          pedidos={pedidos}
          onPedidoClick={onPedidoClick}
          onRemoverClick={onRemoverClick}
        />
      </div>
    </div>
  );
}

export default App;
