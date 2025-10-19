import Pedidos from "./components/Pedidos.jsx";
import AddPedidos from "./components/AddPedidos.jsx";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [pedidos, setPedidos] = useState(
    JSON.parse(localStorage.getItem("pedidos")) || []
  );

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=5",
    //     {
    //       method: "GET",
    //     }
    //   );
    //   const dados = await response.json();
    //   setPedidos(dados);
    // }
    // fetchData();
  }, []); //lista vazio só executa da primeira vez que o usuário entra na página

  useEffect(() => {
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }, [pedidos]);

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
      id: v4(),
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
