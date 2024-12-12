const ltimes = ['ABC', 'Amazonas', 'América (MG)', 'América (RN)', 'ASA', 'Athletico (PR)', 'Atlético (GO)', 'Atlético (MG)', 'Avaí', 'Bahia', 'Barueri', 'Boa', 'Botafogo', 'Botafogo (SP)', 'Brasil de Pelotas', 'Brasiliense', 'Brusque', 'Campinense', 'Ceará', 'Chapecoense', 'Confiança', 'Corinthians', 'Coritiba', 'CRB', 'Criciúma', 'Cruzeiro', 'CSA', 'Cuiabá', 'Duque de Caxias', 'Figueirense', 'Fortaleza', 'Gama', 'Goiás', 'Grêmio', 'Guarani', 'Guaratinguetá', 'Icasa', 'Internacional', 'Ipatinga', 'Ituano', 'Joinville', 'Juventude', 'Londrina', 'Luverdense', 'Macaé', 'Marília', 'Mirassol', 'Mogi Mirim', 'Náutico', 'Novorizontino', 'Oeste', 'Operário (PR)', 'Palmeiras', 'Paraná', 'Paulista', 'Paysandu', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Remo', 'Salgueiro', 'Sampaio Corrêa', 'Santa Cruz', 'Santo André', 'Santos', 'Sport', 'São Bento', 'São Caetano', 'São Raimundo', 'Tombense', 'Tupi', 'Vasco', 'Vila Nova','Vitória'];

const grp = {
	'g12': ['Atlético (MG)', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'Vasco'],
	'elite': ['Corinthians', 'Cruzeiro', 'Internacional', 'Palmeiras', 'Santos', 'Vasco'],
	'co': ['Atlético (GO)', 'Brasiliense', 'Cuiabá', 'Gama', 'Goiás', 'Luverdense', 'Vila Nova'],
	'go': ['Atlético (GO)', 'Goiás', 'Vila Nova'],
	'df': ['Brasiliense', 'Gama'],
  'mt': ['Cuiabá', 'Luverdense'],
	'ne': ['América (RN)', 'ASA', 'ABC', 'Bahia', 'Campinense', 'Ceará', 'Confiança', 'CRB', 'CSA', 'Fortaleza', 'Icasa', 'Náutico', 'Salgueiro', 'Sampaio Corrêa', 'Santa Cruz', 'Sport', 'Vitória'],
  'al': ['ASA', 'CRB', 'CSA'],
  'al2': ['CRB', 'CSA'],
	'ba': ['Bahia', 'Vitória'],
	'ce': ['Ceará', 'Fortaleza', 'Icasa'],
	'ce2': ['Ceará', 'Fortaleza'],
  'ma': ['Sampaio Corrêa'],
  'pb': ['Campinense'],
	'pe': ['Náutico', 'Salgueiro', 'Santa Cruz', 'Sport'],
	'pe3': ['Náutico', 'Santa Cruz', 'Sport'],
  'rn': ['ABC', 'América (RN)'],
  'se': ['Confiança'],
	'n': ['Amazonas', 'Paysandu', 'Remo', 'São Raimundo'],
  'am': ['Amazonas', 'São Raimundo'],
	'pa': ['Paysandu', 'Remo'],
	'sd': ['América (MG)', 'Atlético (MG)', 'Boa', 'Botafogo (SP)', 'Barueri', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Duque de Caxias', 'Guarani', 'Guaratinguetá', 'Ipatinga', 'Ituano', 'Macaé', 'Marília', 'Mogi Mirim', 'Novorizontino', 'Oeste', 'Palmeiras', 'Paulista', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'Santos', 'São Bento', 'São Caetano', 'Tombense', 'Tupi', 'Vasco'],
	'mg': ['América (MG)', 'Atlético (MG)', 'Boa', 'Cruzeiro', 'Ipatinga', 'Tombense', 'Tupi'],
	'mg2': ['Atlético (MG)', 'Cruzeiro'],
	'rj': ['Botafogo', 'Duque de Caxias', 'Macaé', 'Vasco'],
	'rj4': ['Botafogo', 'Vasco'],
	'sp': ['Barueri', 'Botafogo (SP)', 'Corinthians', 'Guarani', 'Guaratinguetá', 'Ituano', 'Marília', 'Mirassol', 'Mogi Mirim', 'Novorizontino', 'Oeste', 'Palmeiras', 'Paulista', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'Santos', 'São Bento', 'São Caetano'],
	'sp4': ['Corinthians', 'Palmeiras', 'Santos'],
	's': ['Athletico (PR)', 'Avaí', 'Brasil de Pelotas', 'Brusque', 'Chapecoense', 'Coritiba', 'Criciúma', 'Figueirense', 'Grêmio', 'Internacional', 'Joinville', 'Juventude', 'Londrina', 'Operário (PR)', 'Paraná'],
	'pr': ['Athletico (PR)', 'Coritiba', 'Londrina', 'Operário (PR)', 'Paraná'],
	'pr2': ['Athletico (PR)', 'Coritiba'],
	'rs': ['Brasil de Pelotas', 'Grêmio', 'Internacional', 'Juventude'],
	'rs2': ['Grêmio', 'Internacional'],
	'sc': ['Avaí', 'Brusque', 'Chapecoense', 'Criciúma', 'Figueirense', 'Joinville'],
}

const classFinais = {
	2006: {
		'campeao': 'Atlético (MG)',
		'classificados': ['Sport', 'Náutico', 'América (RN)'],
		'rebaixados': ['Paysandu', 'Guarani', 'São Raimundo', 'Vila Nova']
	},
	2007: {
		'campeao': 'Coritiba',
		'classificados': ['Ipatinga', 'Portuguesa', 'Vitória'],
		'rebaixados': ['Paulista', 'Remo', 'Santa Cruz', 'Ituano']
	},
	2008: {
		'campeao': 'Corinthians',
		'classificados': ['Santo André', 'Avaí', 'Barueri'],
		'rebaixados': ['Marília', 'Criciúma', 'Gama', 'CRB']
	},
	2009: {
		'campeao': 'Vasco',
		'classificados': ['Guarani', 'Ceará', 'Atlético (GO)'],
		'rebaixados': ['Juventude', 'Fortaleza', 'Campinense', 'ABC']
	},
	2010: {
		'campeao': 'Coritiba',
		'classificados': ['Figueirense', 'Bahia', 'América (MG)'],
		'rebaixados': ['Brasiliense', 'Santo André', 'Ipatinga', 'América (RN)']
	},
	2011: {
		'campeao': 'Portuguesa',
		'classificados': ['Náutico', 'Ponte Preta', 'Sport'],
		'rebaixados': ['Icasa', 'Vila Nova', 'Salgueiro', 'Duque de Caxias']
	},
	2012: {
		'campeao': 'Goiás',
		'classificados': ['Criciúma', 'Athletico (PR)', 'Vitória'],
		'rebaixados': ['CRB', 'Guarani', 'Ipatinga', 'Barueri']
	},
	2013: {
		'campeao': 'Palmeiras',
		'classificados': ['Chapecoense', 'Sport', 'Figueirense'],
		'rebaixados': ['Guaratinguetá', 'Paysandu', 'São Caetano', 'ASA']
	},
	2014: {
		'campeao': 'Joinville',
		'classificados': ['Ponte Preta', 'Vasco', 'Avaí'],
		'rebaixados': ['América (RN)', 'Icasa', 'Vila Nova', 'Portuguesa']
	},
	2015: {
		'campeao': 'Botafogo',
		'classificados': ['Santa Cruz', 'Vitória', 'América (MG)'],
		'rebaixados': ['Macaé', 'ABC', 'Boa', 'Mogi Mirim']
	},
	2016: {
		'campeao': 'Atlético (GO)',
		'classificados': ['Avaí', 'Vasco', 'Bahia'],
		'rebaixados': ['Joinville', 'Tupi', 'RB Bragantino', 'Sampaio Corrêa']
	},
	2017: {
		'campeao': 'América (MG)',
		'classificados': ['Internacional', 'Ceará', 'Paraná'],
		'rebaixados': ['Luverdense', 'Santa Cruz', 'ABC', 'Náutico']
	},
	2018: {
		'campeao': 'Fortaleza',
		'classificados': ['CSA', 'Avaí', 'Goiás'],
		'rebaixados': ['Paysandu', 'Sampaio Corrêa', 'Juventude', 'Boa']
	},
	2019: {
		'campeao': 'RB Bragantino',
		'classificados': ['Sport', 'Coritiba', 'Atlético (GO)'],
		'rebaixados': ['Londrina', 'São Bento', 'Criciúma', 'Vila Nova']
	},
	2020: {
		'campeao': 'Chapecoense',
		'classificados': ['América (MG)', 'Juventude', 'Cuiabá'],
		'rebaixados': ['Figueirense', 'Paraná', 'Botafogo (SP)', 'Oeste']
	},
  2021: {
    'campeao': 'Botafogo',
    'classificados': ['Goiás', 'Coritiba', 'Avaí'],
    'rebaixados': ['Remo', 'Vitória', 'Confiança', 'Brasil de Pelotas']
  },
  2022: {
    'campeao': 'Cruzeiro',
    'classificados': ['Grêmio', 'Bahia', 'Vasco'],
    'rebaixados': ['CSA', 'Brusque', 'Operário (PR)', 'Náutico']
  },
  2023: {
    'campeao': 'Vitória',
    'classificados': ['Juventude', 'Criciúma', 'Atlético (GO)'],
    'rebaixados': ['Sampaio Corrêa', 'Tombense', 'Londrina', 'ABC']
  },
  2024: {
    'campeao': 'Santos',
    'classificados': ['Mirassol', 'Sport', 'Ceará'],
    'rebaixados': ['Ponte Preta', 'Ituano', 'Brusque', 'Guarani']
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

function exibeClassificacao (arr) {
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

  if (anoInicio.value == anoFinal.value) {
    const ano = anoInicio.value;
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

classifica = function(tabela, time, gm, gs, t, wo) {
	var ind = x.map(function(e) { return e.n; }).indexOf(time);
	if (wo) {
		gm = 0,
		gs = 3;
	}
	r = gm > gs ? 3 : gm == gs ? 1 : 0;
	tabela[ind].p += r + (t ? t : 0);
	tabela[ind].j ++;
	tabela[ind].v += r == 3 ? 1 : 0;
	tabela[ind].e += r == 1 ? 1 : 0;
	tabela[ind].d += r == 0 ? 1 : 0;
	tabela[ind].gm += gm;
	tabela[ind].gs += gs;
	tabela[ind].s += (gm - gs);
}

classificacao = function(a) {
	var ult = undefined;
	var ajus = 0;
	var tbl = '';
	var s = '#\tTime\t\tP\tJ\tV\tE\tD\tGP\tGC\tSG\t%\n', p = 0;
	for(b of a){
		var ultn = b.p + ' ' + b.j + ' ' + b.v + ' ' + b.s + ' ' + b.gm;
		if(typeof ult != 'undefined'){
			if (ultn == ult)
				ajus++, p--;
			else
				p += ajus, ajus = 0;
		}
		ult = ultn;
		tbl += '<tr><td>' + (++p) + '</td><td>' + b.n + '</td><td>' + b.p + '</td><td>' + b.j + '</td><td>' + b.v + '</td><td>' + b.e + '</td><td>' + b.d + '</td><td>' + b.gm + '</td><td>' + b.gs + '</td><td>' + b.s + '</td><td>' + ((b.p / (b.j * 3))*100).toLocaleString('pt-BR', {minimumFractionDigits:1,maximumFractionDigits:1}) + '</td></tr>';
	}
	if(tbl)
		document.getElementById('clas').style.visibility = 'visible';
	else
		document.getElementById('clas').style.visibility = 'hidden';
	document.getElementById('clas').getElementsByTagName('tbody')[0].innerHTML = tbl;

					if (document.getElementById('s1').value == document.getElementById('s2').value) {
						a = document.getElementById('s1').value;
						for (var n = 0; n < clas.tBodies[0].rows.length; n++) {
							if (classFinais[a].c == clas.tBodies[0].rows[n].cells[1].textContent) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'dodgerblue';
							} else if (classFinais[a].l.includes(clas.tBodies[0].rows[n].cells[1].textContent)) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'lightgreen';
							} else if (classFinais[a].r.includes(clas.tBodies[0].rows[n].cells[1].textContent)) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'indianred';
							}
						}
					}
}

function calcClass({
  anos = [],
  adv,
  jogos = j,
  mando = frm.mando.value,
  rfixas,
  rodadas = [1,],
  times = ltimes,
  turno = frm.turno.value,
} = {}) {
  if (typeof anos === 'string') {
    let anosarr = [];
    let anosSplit = anos.split(':').map(a => Number(a));
    for (let i = anosSplit[0]; i <= anosSplit[1]; i++)
      anosarr.push(i);
    anos = anosarr;
  }

  let seen = new Set();
  let rod = [1,];
  adv = new Set(adv);
  times = times.length ? new Set(times) : new Set(ltimes);
  matriz = [];
  let i = 0;
  while (i < jogos.length) {
    if (!anos.length || anos.includes(jogos[i].y)){
      switch (turno) {
        case '1':
          rodadas[1] = 19;
          break;
        case '2':
          rodadas[0] = 20;
          rodadas[1] = 38;
          break;
        default:
          if (!rodadas[1] || (jogos[i].y !== anos[anos.length - 1] && !rfixas))
            rodadas[1] = 38;
          if (jogos[i].y > anos[0] && !rfixas)
            rodadas[0] = 1;
      }

      let emjogotm = times.has(jogos[i].m);
      let emjogotv = times.has(jogos[i].v);
      let emjogoam = adv.has(jogos[i].m);
      let emjogoav = adv.has(jogos[i].v);

      // sem visitante
      if (mando !== '2') {
        if (jogos[i].r >= rodadas[0] && jogos[i].r <= rodadas[1]) {
          if (!adv.size && times.size == 1 && emjogotm)
            somaJogo(matriz, jogos[i].v, jogos[i].gm, jogos[i].gv, jogos[i].tm, jogos[i].wo, seen);
          else if (emjogotm && ((!adv.size && emjogotv) || emjogoav))
            somaJogo(matriz, jogos[i].m, jogos[i].gm, jogos[i].gv, jogos[i].tm, jogos[i].wo, seen);
        }
      }

      // sem mandante
      if (mando !== '1') {
        if (jogos[i].r >= rodadas[0] && jogos[i].r <= rodadas[1]) {
          if (!adv.size && times.size == 1 && emjogotv)
            somaJogo(matriz, jogos[i].m, jogos[i].gv, jogos[i].gm, jogos[i].tv, jogos[i].wo, seen);
          else if (emjogotv && ((!adv.size && emjogotm) || emjogoam))
            somaJogo(matriz, jogos[i].v, jogos[i].gv, jogos[i].gm, jogos[i].tv, jogos[i].wo, seen);
        }
      }
    }
    i++;
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
} = {}) {
  calcClass(...arguments);

  if (times.size == ltimes.length && !adv.size)
    exibeClassificacao(matriz.sort(firstBy('p', -1).thenBy('v', -1)
                                                   .thenBy('s', -1)
                                                   .thenBy('gm', -1)
                                                   .thenBy(a => a.n.toUpperCase())));
  else
    exibeClassificacao(matriz.sort(firstBy(a => -a.p / (a.j * 3)).thenBy('p', -1)
                                                                 .thenBy('v', -1)
                                                                 .thenBy('s', -1)
                                                                 .thenBy('gm', -1)
                                                                 .thenBy(a => a.n.toUpperCase())));
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
    let opt2 = opt.cloneNode(true);
    timea.add(opt2);
  });
}

function init () {
  preencheElementos();
  classificar();
}

// thenBy.js
/*** Copyright 2020 Teun Duynstee Licensed under the Apache License, Version 2.0 ***/
!function(n,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():n.firstBy=t()}(this,function(){function s(n){return n}function y(n){return"string"==typeof n?n.toLowerCase():n}function p(n,t){var e,i,o,r,f,u="function"==typeof this&&!this.firstBy&&this,c=(t="object"==typeof(t=t)?t:{direction:t},"function"!=typeof(e=n)&&(i=e,e=function(n){return n[i]||""}),1===e.length&&(o=e,r=t.ignoreCase?y:s,f=t.cmp||function(n,t){return n<t?-1:t<n?1:0},e=function(n,t){return f(r(o(n)),r(o(t)))}),t.direction in{"-1":"",desc:""}?function(n,t){return-e(n,t)}:e),t=u?function(n,t){return u(n,t)||c(n,t)}:c;return t.thenBy=p,t}return p.firstBy=p});

addEventListener('DOMContentLoaded', init);
