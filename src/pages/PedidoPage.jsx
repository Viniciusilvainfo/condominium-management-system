import { ArrowLeft, Backpack } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PedidoPage() {
  const navigate = useNavigate();
  const [searchParms] = useSearchParams();
  const titulo = searchParms.get("titulo");
  const descricao = searchParms.get("descricao");
  return (
    <div className="w-screen h-screen bg-slate-500  p-6">
      <div className="mt-5 space-y-4 p-6 bg-slate-200 rounded-md shadow">
        <button
          onClick={() => {
            navigate("/"); // -1 volta para a página anterior
          }}
        >
          <ArrowLeft />
        </button>
        <div
          className={`bg-slate-400 text-left text-white p-2 rounded-md w-full`}
        >
          {titulo}
        </div>
        <p>{descricao}</p>
      </div>
    </div>
  );
}

export default PedidoPage;
