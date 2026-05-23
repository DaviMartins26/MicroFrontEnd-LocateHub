import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

function ItensList() {
  const [itens, setItens] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  // NOVO: Estado para guardar o resultado do cálculo de cada item separadamente
  const [calculos, setCalculos] = useState({}); 

  useEffect(() => {
    fetch('https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io
/items/list')
      .then((response) => response.json())
      .then((data) => {
        setItens(data || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar itens do BFF:", error);
        setLoading(false);
      });
  }, []);

  // FUNÇÃO NOVA: Envia os dados para o BFF calcular na Azure Function
  const handleSimular = async (itemId, precoDia, dias) => {
    if (!dias || dias <= 0) {
      alert("Por favor, insira a quantidade de dias.");
      return;
    }

    try {
      const response = await fetch('https://locatehub-bff.greenmoss-1512f455.eastus2.azurecontainerapps.io
/items/calcular-aluguel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ precoDia, dias: parseInt(dias) })
      });

      if (!response.ok) throw new Error("Erro no cálculo");

      const data = await response.json();

      // Guardamos o resultado no estado usando o ID do item como chave
      setCalculos((prev) => ({
        ...prev,
        [itemId]: data // Aqui salvamos o objeto todo que a Function retorna
      }));
    } catch (error) {
      console.error("Erro ao simular:", error);
      alert("Erro ao calcular orçamento. Verifique se o BFF e a Function estão ligados.");
    }
  };

  return (
    <Layout>
      <h1>Itens para Alugar</h1>

      {loading ? (
        <p>Carregando itens do servidor...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {itens.map((item) => (
            <div
              key={item.id}
              style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                width: '240px', 
                borderRadius: '8px',
                backgroundColor: '#f9f9f9' 
              }}
            >
              <img
                src={item.urlImagem || 'https://via.placeholder.com/150'}
                alt={item.nome}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <h3>{item.nome}</h3>
              <p>Categoria: {item.categoria || 'Geral'}</p>
              <p><strong>R$ {item.valorAluguelDia || item.valor_diaria}/dia</strong></p>

              {/* --- ÁREA DA SIMULAÇÃO (AZURE FUNCTION) --- */}
              <div style={{ marginTop: '15px', borderTop: '1px dashed #bbb', paddingTop: '10px' }}>
                <label style={{ fontSize: '12px' }}>Simular dias:</label>
                <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                  <input
                    type="number"
                    min="1"
                    placeholder="Dias"
                    id={`input-dias-${item.id}`}
                    style={{ width: '60px', padding: '5px' }}
                  />
                  <button 
                    onClick={() => {
                      const dias = document.getElementById(`input-dias-${item.id}`).value;
                      const preco = item.valorAluguelDia || item.valor_diaria;
                      handleSimular(item.id, preco, dias);
                    }}
                    style={{ cursor: 'pointer', padding: '5px 10px' }}
                  >
                    Calcular
                  </button>
                </div>

                {/* Exibe o resultado se ele existir para este item */}
                {calculos[item.id] && (
                  <div style={{ marginTop: '10px', color: '#27ae60', fontSize: '14px' }}>
                    <p style={{ margin: 0 }}><strong>Total: R$ {calculos[item.id].valorFinal}</strong></p>
                    <small>{calculos[item.id].mensagem}</small>
                  </div>
                )}
              </div>
              {/* ------------------------------------------ */}
            </div>
          ))}
        </div>
      )}
      
      {itens.length === 0 && !loading && <p>Nenhum item encontrado no servidor.</p>}
    </Layout>
  );
}

export default ItensList;