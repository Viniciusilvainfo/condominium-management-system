function AddPedidos({ onInsertClick }) {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        id="titulo"
        name="titulo"
        placeholder="Digte o título do pedido"
      />
      <input
        type="text"
        id="descricao"
        name="descricao"
        placeholder="Digite a descrição"
      />
      <button onClick={onInsertClick}>Adicionar</button>
    </div>
  );
}

export default AddPedidos;
