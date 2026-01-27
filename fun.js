const ltimes = ['América-MG', 'América-RN', 'Athletico-PR', 'Atlético-GO', 'Atlético-MG', 'Avaí', 'Bahia', 'Barueri', 'Botafogo', 'Brasiliense', 'Ceará', 'Chapecoense', 'Corinthians', 'Coritiba', 'Criciúma', 'Cruzeiro', 'CSA', 'Cuiabá', 'Figueirense', 'Flamengo', 'Fluminense', 'Fortaleza', 'Goiás', 'Grêmio', 'Guarani', 'Internacional', 'Ipatinga', 'Joinville', 'Juventude', 'Mirassol', 'Náutico', 'Palmeiras', 'Paraná', 'Paysandu', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santa Cruz', 'Santo André', 'Santos', 'Sport', 'São Caetano', 'São Paulo', 'Vasco', 'Vitória'];

const grp = {
  'g12': ['Atlético-MG', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'São Paulo', 'Vasco'],
  'elite': ['Corinthians', 'Cruzeiro', 'Flamengo', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'São Paulo', 'Vasco'],
  'co': ['Atlético-GO', 'Brasiliense', 'Cuiabá', 'Goiás'],
  'go': ['Atlético-GO', 'Goiás'],
  'df': ['Brasiliense'],
  'mt': ['Cuiabá'],
  'ne': ['América-RN', 'Bahia', 'Ceará', 'CSA', 'Fortaleza', 'Náutico', 'Santa Cruz', 'Sport', 'Vitória'],
  'al': ['CSA'],
  'ba': ['Bahia', 'Vitória'],
  'ce': ['Ceará', 'Fortaleza'],
  'pe': ['Náutico', 'Santa Cruz', 'Sport'],
  'rn': ['América-RN'],
  'n': ['Paysandu'],
  'pa': ['Paysandu'],
  'se': ['América-MG', 'Atlético-MG', 'Barueri', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Guarani', 'Ipatinga', 'Mirassol', 'Palmeiras', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'Santos', 'São Caetano', 'São Paulo', 'Vasco'],
  'mg': ['América-MG', 'Atlético-MG', 'Cruzeiro', 'Ipatinga'],
  'mg2': ['Atlético-MG', 'Cruzeiro'],
  'rj': ['Botafogo', 'Flamengo', 'Fluminense', 'Vasco'],
  'sp': ['Barueri', 'Corinthians', 'Guarani', 'Mirassol', 'Palmeiras', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'Santos', 'São Caetano', 'São Paulo'],
  'sp4': ['Corinthians', 'Palmeiras', 'Santos', 'São Paulo'],
  's': ['Athletico-PR', 'Avaí', 'Chapecoense', 'Coritiba', 'Criciúma', 'Figueirense', 'Grêmio', 'Internacional', 'Joinville', 'Juventude', 'Paraná'],
  'pr': ['Athletico-PR', 'Coritiba', 'Paraná'],
  'pr2': ['Athletico-PR', 'Coritiba'],
  'rs': ['Grêmio', 'Internacional', 'Juventude'],
  'rs2': ['Grêmio', 'Internacional'],
  'sc': ['Avaí', 'Chapecoense', 'Criciúma', 'Figueirense', 'Joinville']
}

const classFinais = {
  2003: {
    'campeao': 'Cruzeiro',
    'classificados': ['Santos', 'São Paulo', 'São Caetano', 'Coritiba'],
    'rebaixados': ['Fortaleza', 'Bahia']
  },
  2004: {
    'campeao': 'Santos',
    'classificados': ['Athletico-PR', 'São Paulo', 'Palmeiras'],
    'rebaixados': ['Criciúma', 'Guarani', 'Vitória', 'Grêmio']
  },
  2005: {
    'campeao': 'Corinthians',
    'classificados': ['Internacional', 'Goiás', 'Palmeiras'],
    'rebaixados': ['Coritiba', 'Atlético-MG', 'Paysandu', 'Brasiliense']
  },
  2006: {
    'campeao': 'São Paulo',
    'classificados': ['Internacional', 'Grêmio', 'Santos', 'Paraná'],
    'rebaixados': ['Ponte Preta', 'Fortaleza', 'São Caetano', 'Santa Cruz']
  },
  2007: {
    'campeao': 'São Paulo',
    'classificados': ['Santos', 'Flamengo', 'Fluminense', 'Cruzeiro'],
    'rebaixados': ['Corinthians', 'Juventude', 'Paraná', 'América-RN']
  },
  2008: {
    'campeao': 'São Paulo',
    'classificados': ['Grêmio', 'Cruzeiro', 'Palmeiras'],
    'rebaixados': ['Figueirense', 'Vasco', 'Portuguesa', 'Ipatinga']
  },
  2009: {
    'campeao': 'Flamengo',
    'classificados': ['Internacional', 'São Paulo', 'Cruzeiro'],
    'rebaixados': ['Coritiba', 'Santo André', 'Náutico', 'Sport']
  },
  2010: {
    'campeao': 'Fluminense',
    'classificados': ['Cruzeiro', 'Corinthians', 'Grêmio'],
    'rebaixados': ['Vitória', 'Guarani', 'Goiás', 'Barueri']
  },
  2011: {
    'campeao': 'Corinthians',
    'classificados': ['Vasco', 'Fluminense', 'Flamengo', 'Internacional'],
    'rebaixados': ['Athletico-PR', 'Ceará', 'América-MG', 'Avaí']
  },
  2012: {
    'campeao': 'Fluminense',
    'classificados': ['Atlético-MG', 'Grêmio', 'São Paulo'],
    'rebaixados': ['Sport', 'Palmeiras', 'Atlético-GO', 'Figueirense']
  },
  2013: {
    'campeao': 'Cruzeiro',
    'classificados': ['Grêmio', 'Athletico-PR', 'Botafogo'],
    'rebaixados': ['Portuguesa', 'Vasco', 'Ponte Preta', 'Náutico']
  },
  2014: {
    'campeao': 'Cruzeiro',
    'classificados': ['São Paulo', 'Internacional', 'Corinthians'],
    'rebaixados': ['Vitória', 'Bahia', 'Botafogo', 'Criciúma']
  },
  2015: {
    'campeao': 'Corinthians',
    'classificados': ['Atlético-MG', 'Grêmio', 'São Paulo'],
    'rebaixados': ['Avaí', 'Vasco', 'Goiás', 'Joinville']
  },
  2016: {
    'campeao': 'Palmeiras',
    'classificados': ['Santos', 'Flamengo', 'Atlético-MG', 'Botafogo', 'Athletico-PR'],
    'rebaixados': ['Internacional', 'Figueirense', 'Santa Cruz', 'América-MG']
  },
  2017: {
    'campeao': 'Corinthians',
    'classificados': ['Palmeiras', 'Santos', 'Grêmio', 'Cruzeiro', 'Flamengo', 'Vasco', 'Chapecoense'],
    'rebaixados': ['Coritiba', 'Avaí', 'Ponte Preta', 'Atlético-GO']
  },
  2018: {
    'campeao': 'Palmeiras',
    'classificados': ['Flamengo', 'Internacional', 'Grêmio', 'São Paulo', 'Atlético-MG'],
    'rebaixados': ['Sport', 'América-MG', 'Vitória', 'Paraná']
  },
  2019: {
    'campeao': 'Flamengo',
    'classificados': ['Santos', 'Palmeiras', 'Grêmio', 'Athletico-PR', 'São Paulo', 'Internacional', 'Corinthians'],
    'rebaixados': ['Cruzeiro', 'CSA', 'Chapecoense', 'Avaí']
  },
  2020: {
    'campeao': 'Flamengo',
    'classificados': ['Internacional', 'Atlético-MG', 'São Paulo', 'Fluminense', 'Grêmio', 'Palmeiras', 'Santos'],
    'rebaixados': ['Vasco', 'Goiás', 'Coritiba', 'Botafogo']
  },
  2021: {
    'campeao': 'Atlético-MG',
    'classificados': ['Flamengo', 'Palmeiras', 'Fortaleza', 'Corinthians', 'RB Bragantino', 'Fluminense', 'América-MG'],
    'rebaixados': ['Grêmio', 'Bahia', 'Sport', 'Chapecoense']
  },
  2022: {
    'campeao': 'Palmeiras',
    'classificados': ['Internacional', 'Fluminense', 'Corinthians', 'Flamengo', 'Athletico-PR', 'Atlético-MG', 'Fortaleza'],
    'rebaixados': ['Ceará', 'Atlético-GO', 'Avaí', 'Juventude']
  },
  2023: {
    'campeao': 'Palmeiras',
    'classificados': ['Grêmio', 'Atlético-MG', 'Flamengo', 'Botafogo', 'RB Bragantino'],
    'rebaixados': ['Santos', 'Goiás', 'Coritiba', 'América-MG']
  },
  2024: {
    'campeao': 'Botafogo',
    'classificados': ['Palmeiras', 'Flamengo', 'Fortaleza', 'Internacional', 'São Paulo', 'Corinthians', 'Bahia'],
    'rebaixados': ['Athletico-PR', 'Criciúma', 'Atlético-GO', 'Cuiabá']
  },
  2025: {
    'campeao': 'Flamengo',
    'classificados': ['Palmeiras', 'Cruzeiro', 'Mirassol', 'Fluminense', 'Botafogo', 'Bahia'],
    'rebaixados': ['Ceará', 'Fortaleza', 'Juventude', 'Sport']
  },
}

const seta = {
  '-1': '↓',
  '1': '↑'
};

function somaJogo (linhas, time, gm, gs, tapetao = 0, wo, seen) {
  initTimeMatriz(time, seen);

  let i = linhas.map(e => e.n).indexOf(time);

  if (wo) {
    gm = 0,
    gs = 3;
  }

  let pontos = gm > gs ? 3 : gm == gs ? 1 : 0;

  linhas[i].p += pontos + tapetao;
  linhas[i].j ++;
  linhas[i].v += pontos === 3 ? 1 : 0;
  linhas[i].e += pontos === 1 ? 1 : 0;
  linhas[i].d += pontos === 0 ? 1 : 0;
  linhas[i].gm += gm;
  linhas[i].gs += gs;
  linhas[i].s += gm - gs;
}

function exibeClassificacao (arr, ano) {
  // quando houver mais de um time empatado em tudo, repetir menor posição
  let anterior;
  let posicaoRetida = 0;
  let tbl = '';
  let posicao = 1;

  for (const time of arr) {
    const atual = time.p + ' ' + time.j + ' ' + time.v + ' ' + time.s + ' ' + time.gm;
    const aprov = (time.p / (time.j * 3) * 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });

    if (atual === anterior) {
      posicaoRetida++;
      posicao--;
    } else {
      posicao += posicaoRetida;
      posicaoRetida = 0;
    }

    anterior = atual;

    tbl += `
      <tr>
        <td>${posicao}</td>
        <td>${time.n}</td>
        <td>${time.p}</td>
        <td>${time.j}</td>
        <td>${time.v}</td>
        <td>${time.e}</td>
        <td>${time.d}</td>
        <td>${time.gm}</td>
        <td>${time.gs}</td>
        <td>${time.s}</td>
        <td>${aprov}</td>
      </tr>`;

    posicao++;
  }

  tBody.innerHTML = tbl;

  if (tbl)
    tabela.style.visibility = 'visible';
  else
    tabela.style.visibility = 'hidden';

  if (ano && classFinais[ano]) {
    for (const linha of tBody.rows) {
      if (classFinais[ano].campeao == linha.cells[1].textContent)
        linha.cells[1].style.backgroundColor = 'dodgerblue';
      else if (classFinais[ano].classificados.includes(linha.cells[1].textContent))
        linha.cells[1].style.backgroundColor = 'lightgreen';
      else if (classFinais[ano].rebaixados.includes(linha.cells[1].textContent))
        linha.cells[1].style.backgroundColor = 'indianred';
    }
  }
}

function classificar ({
  anos = [],
  adv,
  jogos = j,
  mando = frm.mando.value,
  rfixas,
  rodadas = [1,],
  times = ltimes,
  turno = frm.turno.value,
  dataInicio,
  dataFinal
} = {}) {
  // j = [{"r":1,"y":2003,"d":"29/03","m":"Guarani","gm":4,"gv":2,"v":"Vasco","est":"Brinco de Ouro"},...] (dados em data.min.js)
  // propriedades opcionais em cada elemento de j: tm, tv e wo. tm indica dedução de pontos ao time mandante por alguma irregularidade, tm idem porém em relação ao time visitante. E wo significa que a partida não aconteceu e os dois times devem ser considerados perdedores pelo placar de 3-0.
  if (typeof anos === 'string') {
    let anosarr = [];
    let anosSplit = anos.split(':').map(a => Number(a));
    for (let i = anosSplit[0]; i <= anosSplit[1]; i++)
      anosarr.push(i);
    anos = anosarr;
  }

  let anoParaColorir = null;

  if (dataInicio && dataFinal) {
    // FILTRO DE DATAS ATIVO
    let dIni = new Date(dataInicio + "T12:00:00"); // Adiciona T12 para evitar fuso
    let dFim = new Date(dataFinal + "T12:00:00");

    // Limites dos campeonatos 2020 e 2021 (Regras de exceção)
    let c2020_ini = new Date("2020-01-01T12:00:00");
    let c2020_fim = new Date("2021-02-28T12:00:00"); // Fim de Fev/2021
    let c2021_ini = new Date("2021-03-01T12:00:00"); // Início de Mar/2021
    let c2021_fim = new Date("2021-12-31T12:00:00");

    let anoIni = dIni.getFullYear();
    let anoFim = dFim.getFullYear();

    // Req 2: Se o intervalo está TOTALMENTE DENTRO do camp. 2020
    if (dIni >= c2020_ini && dFim <= c2020_fim) {
        anoParaColorir = 2020;
    // Req 3: Se o intervalo está TOTALMENTE DENTRO do camp. 2021
    } else if (dIni >= c2021_ini && dFim <= c2021_fim) {
        anoParaColorir = 2021;
    // Req 1: Caso padrão (anos < 2020 ou > 2021)
    } else if (anoIni === anoFim) {
        if (anoIni < 2020 || anoIni > 2021) {
            anoParaColorir = anoIni;
        }
    }
    // Req 4 (Datas que cruzam campeonatos, ex: 2003-2004)
    // é o padrão (anoParaColorir = null)

  } else {
    // FILTRO DE ANOS (SLIDER) ATIVO
    if (anos.length === 1) {
      anoParaColorir = anos[0];
    }
  }

  let seen = new Set();
  let _rodadas = [...rodadas];
  adv = new Set(adv);
  times = times.length ? new Set(times) : new Set(ltimes);
  matriz = [];
  let i = 0;

  while (i < jogos.length) {
    let jogoValido = false;

    // PRIORIDADE 1: Se o filtro de Data está ativo, ele comanda.
    if (dataInicio && dataFinal) {
      let diaMes = jogos[i].d.split('/');
      let dia = diaMes[0];
      let mes = diaMes[1];
      let anoJogo = jogos[i].y;

      // Tratamento da Pandemia 2020 -> 2021
      if (anoJogo === 2020 && (mes === '01' || mes === '02')) {
        anoJogo = 2021;
      }

      let dataJogo = `${anoJogo}-${mes}-${dia}`;

      if (dataJogo >= dataInicio && dataJogo <= dataFinal) {
        jogoValido = true;
      }
    }
    // PRIORIDADE 2: Se a data NÃO está ativa, usamos o filtro de Anos + Rodadas
    else {
      // 1. Filtro de Ano (Slider)
      if (!anos.length || anos.includes(jogos[i].y)) {

        // 2. Lógica de Rodada/Turno (só é executada se passar no filtro de Ano)
        switch (turno) {
          case '1':
            switch (jogos[i].y) {
              case 2003: case 2004: rodadas[1] = 23; break;
              case 2005: rodadas[1] = 21; break;
              default: rodadas[1] = 19;
            }
            break;
          case '2':
            switch (jogos[i].y) {
              case 2003: case 2004: rodadas[0] = 24; rodadas[1] = 46; break;
              case 2005: rodadas[0] = 22; rodadas[1] = 42; break;
              default: rodadas[0] = 20; rodadas[1] = 38;
            }
            break;
          default:
            if (!rodadas[1] || (jogos[i].y !== anos[anos.length - 1] && !rfixas)) {
              switch (jogos[i].y) {
                case 2003: case 2004: rodadas[1] = 46; break;
                case 2005: rodadas[1] = 42; break;
                default: rodadas[1] = 38;
              }
            } else {
              rodadas[1] = _rodadas[1];
            }
            if (jogos[i].y > anos[0] && !rfixas)
              rodadas[0] = 1;
            else
              rodadas[0] = _rodadas[0];
        }

        if (jogos[i].r >= rodadas[0] && jogos[i].r <= rodadas[1]) {
          jogoValido = true;
        }
      }
    }

    let emjogotm = times.has(jogos[i].m);
    let emjogotv = times.has(jogos[i].v);
    let emjogoam = adv.has(jogos[i].m);
    let emjogoav = adv.has(jogos[i].v);

    // sem visitante
    if (mando !== '2') {
      if (jogoValido) {
        if (!adv.size && times.size == 1 && emjogotm)
          somaJogo(matriz, jogos[i].v, jogos[i].gm, jogos[i].gv, jogos[i].tm, jogos[i].wo, seen);
        else if (emjogotm && ((!adv.size && emjogotv) || emjogoav))
          somaJogo(matriz, jogos[i].m, jogos[i].gm, jogos[i].gv, jogos[i].tm, jogos[i].wo, seen);
      }
    }

    // sem mandante
    if (mando !== '1') {
      if (jogoValido) {
        if (!adv.size && times.size == 1 && emjogotv)
          somaJogo(matriz, jogos[i].m, jogos[i].gv, jogos[i].gm, jogos[i].tv, jogos[i].wo, seen);
        else if (emjogotv && ((!adv.size && emjogotm) || emjogoam))
          somaJogo(matriz, jogos[i].v, jogos[i].gv, jogos[i].gm, jogos[i].tv, jogos[i].wo, seen);
      }
    }
    i++;
  }

  if (times.size == ltimes.length && !adv.size)
    ordena(matriz, ordem, undefined, anoParaColorir);
  else
    ordena(matriz, 'adversarios', undefined, anoParaColorir);
}

function initTimeMatriz (nome, seen) {
  if (!seen.has(nome)) {
    matriz.push({
      n: nome,
      p: 0,
      j: 0,
      v: 0,
      e: 0,
      d: 0,
      gm: 0,
      gs: 0,
      s: 0
    });
    seen.add(nome);
  }
}

function preencheElementos () {
  Object.keys(classFinais).reverse().forEach(ano => {
    let opt = document.createElement('option');
    opt.value = ano;
    opt.text = ano;
    anoInicio.add(opt);
    let opt2 = opt.cloneNode(true);
    anoFinal.add(opt2);
  });
  anoInicio.selectedIndex = anoInicio.length - 1;

  ltimes.forEach(aTime => {
    let opt = document.createElement('option');
    opt.value = aTime;
    opt.text = aTime;
    time.add(opt);
    if (typeof timea !== 'undefined') {
      let opt2 = opt.cloneNode(true);
      timea.add(opt2);
    }
  });
}

function ordena (mat, t, inv, anoParaColorir) {
  if (inv)
    dir = dir * -1;

  switch (t) {
    case 'adversarios':
      exibeClassificacao(
        mat.sort(
          firstBy(a => -a.p / (a.j * 3)).thenBy('p', dir)
                                        .thenBy('v', dir)
                                        .thenBy('s', dir)
                                        .thenBy('gm', dir)
                                        .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'aproveitamento':
       exibeClassificacao(
         mat.sort(
           firstBy(a => (a.p / (a.j * 3)), dir).thenBy('p', dir)
                                               .thenBy('v', dir)
                                               .thenBy('s', dir)
                                               .thenBy('gm', dir)
                                               .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'derrotas':
      exibeClassificacao(
        mat.sort(
          firstBy('d', dir).thenBy('p', dir)
                           .thenBy('v', dir)
                           .thenBy('s', dir)
                           .thenBy('gm', dir)
                           .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'empates':
      exibeClassificacao(
        mat.sort(
          firstBy('e', dir).thenBy('p', dir)
                            .thenBy('v', dir)
                            .thenBy('s', dir)
                            .thenBy('gm', dir)
                            .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'golscontra':
      exibeClassificacao(
        mat.sort(
          firstBy('gs', dir).thenBy('p', dir)
                            .thenBy('v', dir)
                            .thenBy('s', dir)
                            .thenBy('gm', dir)
                            .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'golspro':
      exibeClassificacao(
        mat.sort(
          firstBy('gm', dir).thenBy('p', dir)
                            .thenBy('v', dir)
                            .thenBy('s', dir)
                            .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'jogos':
      exibeClassificacao(
        mat.sort(
          firstBy('j', dir).thenBy('p', dir)
                               .thenBy('v', dir)
                               .thenBy('s', dir)
                               .thenBy('gm', dir)
                               .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'saldo':
      exibeClassificacao(
        mat.sort(
          firstBy('s', dir).thenBy('p', dir)
                           .thenBy('v', dir)
                           .thenBy('gm', dir)
                           .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break;
    case 'times':
      exibeClassificacao(
        mat.sort(firstBy(a => a.n.toUpperCase(), dir)),
        anoParaColorir
      );
      break;
    case 'vitorias':
      exibeClassificacao(
        mat.sort(
          firstBy('v', dir).thenBy('p', dir)
                           .thenBy('s', dir)
                           .thenBy('gm', dir)
                           .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
      break
    default:
      exibeClassificacao(
        mat.sort(
          firstBy('p', dir).thenBy('v', dir)
                          .thenBy('s', dir)
                          .thenBy('gm', dir)
                          .thenBy(a => a.n.toUpperCase())
        ),
        anoParaColorir
      );
  }

  prevordem = t;
}

function init () {
  preencheElementos();
  classificar();
}

// thenBy.js
/*** Copyright 2020 Teun Duynstee Licensed under the Apache License, Version 2.0 ***/
!function(n,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():n.firstBy=t()}(this,function(){function s(n){return n}function y(n){return"string"==typeof n?n.toLowerCase():n}function p(n,t){var e,i,o,r,f,u="function"==typeof this&&!this.firstBy&&this,c=(t="object"==typeof(t=t)?t:{direction:t},"function"!=typeof(e=n)&&(i=e,e=function(n){return n[i]||""}),1===e.length&&(o=e,r=t.ignoreCase?y:s,f=t.cmp||function(n,t){return n<t?-1:t<n?1:0},e=function(n,t){return f(r(o(n)),r(o(t)))}),t.direction in{"-1":"",desc:""}?function(n,t){return-e(n,t)}:e),t=u?function(n,t){return u(n,t)||c(n,t)}:c;return t.thenBy=p,t}return p.firstBy=p});

addEventListener('DOMContentLoaded', init);