document.addEventListener("DOMContentLoaded", function () {

  // Menu do site
  const menu = document.getElementById("menu");
  const nav = document.querySelector("nav");

  if (menu && nav) {
    menu.onclick = function () {
      nav.classList.toggle("open");
    };

    document.querySelectorAll("nav a").forEach(function (link) {
      link.onclick = function () {
        nav.classList.remove("open");
      };
    });
  }

  // Simulador financeiro
  const simulador = document.querySelector("#simulador");

  if (simulador) {
    simulador.innerHTML = `
      <div class="wrap">
        <b class="pink">SIMULADOR</b>
        <h2>Faça uma estimativa</h2>
        <p>Informe o valor desejado e o prazo para visualizar uma estimativa.</p>

        <div class="simulador-box">
          <label>Valor desejado</label>
          <input id="valorSimulacao" type="number" placeholder="Ex.: 10000">

          <label>Prazo em meses</label>
          <input id="prazoSimulacao" type="number" placeholder="Ex.: 24">

          <button id="calcularSimulacao" type="button">
            Calcular simulação
          </button>

          <div id="resultadoSimulacao"></div>
        </div>
      </div>
    `;

    const botao = document.getElementById("calcularSimulacao");

    botao.onclick = function () {
      const valor = Number(document.getElementById("valorSimulacao").value);
      const prazo = Number(document.getElementById("prazoSimulacao").value);
      const resultado = document.getElementById("resultadoSimulacao");

      if (!valor || !prazo || valor <= 0 || prazo <= 0) {
        resultado.innerHTML = "<p>Preencha o valor e o prazo corretamente.</p>";
        return;
      }

      const parcela = valor / prazo;

      resultado.innerHTML = `
        <h3>Estimativa</h3>
        <p>Valor: <strong>R$ ${valor.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })}</strong></p>
        <p>Prazo: <strong>${prazo} meses</strong></p>
        <p>Estimativa sem juros: <strong>R$ ${parcela.toLocaleString("pt-BR", {
          minimumFractionDigits: 2
        })} por mês</strong></p>
        <small>Esta é apenas uma estimativa. As condições reais dependem da análise da DMA Financeira.</small>
      `;
    };
  }
});
