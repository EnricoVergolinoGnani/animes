function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém a seção onde contém o que foi digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.trim();

    // Verifica se o campo de pesquisa foi preenchido
    if (!campoPesquisa) {
      section.innerHTML = "Nada for encontrado!";
      return  
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    campoPesquisa = campoPesquisa.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Inicializa uma string vazia para armazenar os resultados, titulo e descrição
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento div para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://www.google.com/search?q=${dado.titulo}" target="_blank">${dado.titulo}</a>
          </h2>
          <h3>${dado.episodios} episódios</h3>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link_list} target="_blank">MyAnimeList</a>
        </div>
        `;   
      }
    }
  
    if (!resultados) {
      section.innerHTML = "Nada for encontrado!";
      return
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }