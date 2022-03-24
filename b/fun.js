//console.log('m '+a[i].m+' '+a[i].gm+' '+a[i].gv+' '+a[i].v+' '+a[i].a);

grp = {
	'g12': ['Atlético (MG)', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Internacional', 'Palmeiras', 'Vasco'],
	'elite': ['Corinthians', 'Cruzeiro', 'Internacional', 'Palmeiras', 'Vasco'],
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
	'n': ['Paysandu', 'Remo', 'São Raimundo'],
  'am': ['São Raimundo'],
	'pa': ['Paysandu', 'Remo'],
	'sd': ['América (MG)', 'Atlético (MG)', 'Boa', 'Botafogo (SP)', 'Barueri', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Duque de Caxias', 'Guarani', 'Guaratinguetá', 'Ipatinga', 'Ituano', 'Macaé', 'Marília', 'Mogi Mirim', 'Oeste', 'Palmeiras', 'Paulista', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'São Bento', 'São Caetano', 'Tupi', 'Vasco'],
	'mg': ['América (MG)', 'Atlético (MG)', 'Boa', 'Cruzeiro', 'Ipatinga', 'Tupi'],
	'mg2': ['Atlético (MG)', 'Cruzeiro'],
	'rj': ['Botafogo', 'Duque de Caxias', 'Macaé', 'Vasco'],
	'rj4': ['Botafogo', 'Vasco'],
	'sp': ['Barueri', 'Botafogo (SP)', 'Corinthians', 'Guarani', 'Guaratinguetá', 'Ituano', 'Marília', 'Mogi Mirim', 'Oeste', 'Palmeiras', 'Paulista', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'São Bento', 'São Caetano'],
	'sp4': ['Corinthians', 'Palmeiras'],
	's': ['Athletico (PR)', 'Avaí', 'Brasil de Pelotas', 'Brusque', 'Chapecoense', 'Coritiba', 'Criciúma', 'Figueirense', 'Internacional', 'Joinville', 'Juventude', 'Londrina', 'Operário (PR)', 'Paraná'],
	'pr': ['Athletico (PR)', 'Coritiba', 'Londrina', 'Operário (PR)', 'Paraná'],
	'pr2': ['Athletico (PR)', 'Coritiba'],
	'rs': ['Brasil de Pelotas', 'Internacional', 'Juventude'],
	'rs2': ['Internacional'],
	'sc': ['Avaí', 'Brusque', 'Chapecoense', 'Criciúma', 'Figueirense', 'Joinville'],
}

cfinal = {
	2006: {
		'c': 'Atlético (MG)',
		'l': ['Sport', 'Náutico', 'América (RN)'],
		'r': ['Paysandu', 'Guarani', 'São Raimundo', 'Vila Nova']
	},
	2007: {
		'c': 'Coritiba',
		'l': ['Ipatinga', 'Portuguesa', 'Vitória'],
		'r': ['Paulista', 'Remo', 'Santa Cruz', 'Ituano']
	},
	2008: {
		'c': 'Corinthians',
		'l': ['Santo André', 'Avaí', 'Barueri'],
		'r': ['Marília', 'Criciúma', 'Gama', 'CRB']
	},
	2009: {
		'c': 'Vasco',
		'l': ['Guarani', 'Ceará', 'Atlético (GO)'],
		'r': ['Juventude', 'Fortaleza', 'Campinense', 'ABC']
	},
	2010: {
		'c': 'Coritiba',
		'l': ['Figueirense', 'Bahia', 'América (MG)'],
		'r': ['Brasiliense', 'Santo André', 'Ipatinga', 'América (RN)']
	},
	2011: {
		'c': 'Portuguesa',
		'l': ['Náutico', 'Ponte Preta', 'Sport'],
		'r': ['Icasa', 'Vila Nova', 'Salgueiro', 'Duque de Caxias']
	},
	2012: {
		'c': 'Goiás',
		'l': ['Criciúma', 'Athletico (PR)', 'Vitória'],
		'r': ['CRB', 'Guarani', 'Ipatinga', 'Barueri']
	},
	2013: {
		'c': 'Palmeiras',
		'l': ['Chapecoense', 'Sport', 'Figueirense'],
		'r': ['Guaratinguetá', 'Paysandu', 'São Caetano', 'ASA']
	},
	2014: {
		'c': 'Joinville',
		'l': ['Ponte Preta', 'Vasco', 'Avaí'],
		'r': ['América (RN)', 'Icasa', 'Vila Nova', 'Portuguesa']
	},
	2015: {
		'c': 'Botafogo',
		'l': ['Santa Cruz', 'Vitória', 'América (MG)'],
		'r': ['Macaé', 'ABC', 'Boa', 'Mogi Mirim']
	},
	2016: {
		'c': 'Atlético (GO)',
		'l': ['Avaí', 'Vasco', 'Bahia'],
		'r': ['Joinville', 'Tupi', 'RB Bragantino', 'Sampaio Corrêa']
	},
	2017: {
		'c': 'América (MG)',
		'l': ['Internacional', 'Ceará', 'Paraná'],
		'r': ['Luverdense', 'Santa Cruz', 'ABC', 'Náutico']
	},
	2018: {
		'c': 'Fortaleza',
		'l': ['CSA', 'Avaí', 'Goiás'],
		'r': ['Paysandu', 'Sampaio Corrêa', 'Juventude', 'Boa']
	},
	2019: {
		'c': 'RB Bragantino',
		'l': ['Sport', 'Coritiba', 'Atlético (GO)'],
		'r': ['Londrina', 'São Bento', 'Criciúma', 'Vila Nova']
	},
	2020: {
		'c': 'Chapecoense',
		'l': ['América (MG)', 'Juventude', 'Cuiabá'],
		'r': ['Figueirense', 'Paraná', 'Botafogo (SP)', 'Oeste']
	},
  2021: {
    'c': 'Botafogo',
    'l': ['Goiás', 'Coritiba', 'Avaí'],
    'r': ['Remo', 'Vitória', 'Confiança', 'Brasil de Pelotas']
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

!function(n,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():n.firstBy=t()}(this,function(){var n=function(){function n(n){return n}function t(n){return"string"==typeof n?n.toLowerCase():n}function e(e,r){if(r="number"==typeof r?{direction:r}:r||{},"function"!=typeof e){var i=e;e=function(n){return n[i]?n[i]:""}}if(1===e.length){var o=e,f=r.ignoreCase?t:n;e=function(n,t){return f(o(n))<f(o(t))?-1:f(o(n))>f(o(t))?1:0}}return r.direction===-1?function(n,t){return-e(n,t)}:e}function r(n,t){var i="function"==typeof this&&this,o=e(n,t),f=i?function(n,t){return i(n,t)||o(n,t)}:o;return f.thenBy=r,f}return r}();return n});
 
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
							if (cfinal[a].c == clas.tBodies[0].rows[n].cells[1].textContent) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'dodgerblue';
							} else if (cfinal[a].l.includes(clas.tBodies[0].rows[n].cells[1].textContent)) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'lightgreen';
							} else if (cfinal[a].r.includes(clas.tBodies[0].rows[n].cells[1].textContent)) {
								clas.tBodies[0].rows[n].cells[1].style.backgroundColor = 'indianred';
							}
						}
					}
}
 
function cls (a, Args = {}) {
  var mando = 'mando' in Args ? Args.mando : 1;
  var anos = [], res = [1,], rodadas = [1,];
  var turno = 'turno' in Args ? Args.turno : undefined;
	if ('rodadas' in Args)
		rodadas[0] = Number(Args.rodadas.split(':')[0]),
		rodadas[1] = Number(Args.rodadas.split(':')[1]);
    var rfixas = 'rfixas' in Args ? Args.rfixas : undefined;
	var times = 'times' in Args && Args.times.length ? new Set(Args.times) : new Set(ltimes);
	var adv = 'adv' in Args && Args.adv.length ? new Set(Args.adv) : new Set();
	if ('anos' in Args){
		if (typeof Args.anos === 'object')
			anos = Args.anos;
		else if (typeof Args.anos === 'string') {
			for (var i = Number(Args.anos.split(':')[0]); i <= Number(Args.anos.split(':')[1]); i++) {
				anos.push(i);
			}
		}
	}

  seen = new Set(); var aux;
  i = a.length;
  x = new Array();

  while (i--) {
    if (anos.length == 0 || anos.indexOf(a[i].y) > -1){
      if (turno == 1){
        res[1] = 19;
      } else if (turno == 2){
        res[0] = 20, res[1] = 38;
      } else {
        if (!rodadas[1] || (a[i].y != anos[anos.length - 1] && !rfixas)) {
          res[1] = 38;
        } else
          res[1] = rodadas[1];
        if (a[i].y == anos[0] || rfixas) {
          res[0] = rodadas[0];
        } else
          res[0] = 1;
      }
      emjogotm = times.has(a[i].m);
      emjogotv = times.has(a[i].v);
      emjogoam = adv.has(a[i].m);
      emjogoav = adv.has(a[i].v);
      if (mando < 2) {
        if (a[i].r >= res[0] && a[i].r <= res[1]){
          if (!adv.size && times.size == 1 && emjogotm) {
            if (!seen.has(a[i].v)) {
              x.push({n:a[i].v,p:0,j:0,v:0,e:0,d:0,gm:0,gs:0,s:0});
              seen.add(a[i].v);
            }
            classifica(x, a[i].v, a[i].gm, a[i].gv, a[i].tm, a[i].wo);
          } else if (emjogotm && ((!adv.size && emjogotv) || emjogoav)) {
            if (!seen.has(a[i].m)) {
              x.push({n:a[i].m,p:0,j:0,v:0,e:0,d:0,gm:0,gs:0,s:0});
              seen.add(a[i].m);
            }
            classifica(x, a[i].m, a[i].gm, a[i].gv, a[i].tm, a[i].wo);
          }
        }
      }
      if (mando > 0) {
        if (a[i].r >= res[0] && a[i].r <= res[1]){
          if (!adv.size && times.size == 1 && emjogotv) {
            if (!seen.has(a[i].m)) {
              x.push({n:a[i].m,p:0,j:0,v:0,e:0,d:0,gm:0,gs:0,s:0});
              seen.add(a[i].m);
            }
            classifica(x, a[i].m, a[i].gv, a[i].gm, a[i].tv, a[i].wo);
          } else if (emjogotv && ((!adv.size && emjogotm) || emjogoam)) {
            if (!seen.has(a[i].v)) {
              x.push({n:a[i].v,p:0,j:0,v:0,e:0,d:0,gm:0,gs:0,s:0});
              seen.add(a[i].v);
            }
            classifica(x, a[i].v, a[i].gv, a[i].gm, a[i].tv, a[i].wo);
          }
        }
      }
    }
  }

  if (times.size == ltimes.length && !adv.size)
    classificacao(x.sort(firstBy('p',-1).thenBy('v',-1).thenBy('s',-1).thenBy('gm',-1).thenBy(function(a){return a.n.toUpperCase()})));
  else
    classificacao(x.sort(firstBy(function(a){return -a.p / (a.j * 3)}).thenBy('p',-1).thenBy('v',-1).thenBy('s',-1).thenBy('gm',-1).thenBy(function(a){return a.n.toUpperCase()})));
}

cls(j);