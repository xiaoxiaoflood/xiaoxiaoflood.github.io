//console.log('m '+a[i].m+' '+a[i].gm+' '+a[i].gv+' '+a[i].v+' '+a[i].a);

grp = {
	'g12': ['Atlético (MG)', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'São Paulo', 'Vasco'],
	'elite': ['Corinthians', 'Cruzeiro', 'Flamengo', 'Grêmio', 'Internacional', 'Palmeiras', 'Santos', 'São Paulo', 'Vasco'],
	'co': ['Atlético (GO)', 'Brasiliense', 'Goiás'],
	'go': ['Atlético (GO)', 'Goiás'],
	'df': ['Brasiliense'],
	'ne': ['América (RN)', 'Bahia', 'Ceará', 'CSA', 'Fortaleza', 'Náutico', 'Santa Cruz', 'Sport', 'Vitória'],
	'al': ['CSA'],
	'ba': ['Bahia', 'Vitória'],
	'ce': ['Ceará', 'Fortaleza'],
	'pe': ['Náutico', 'Santa Cruz', 'Sport'],
	'rn': ['América (RN)'],
	'n': ['Paysandu'],
	'pa': ['Paysandu'],
	'se': ['América (MG)', 'Atlético (MG)', 'Barueri', 'Botafogo', 'Corinthians', 'Cruzeiro', 'Flamengo', 'Fluminense', 'Guarani', 'Ipatinga', 'Palmeiras', 'Ponte Preta', 'Portuguesa', 'Santo André', 'Santos', 'São Caetano', 'São Paulo', 'Vasco'],
	'mg': ['América (MG)', 'Atlético (MG)', 'Cruzeiro', 'Ipatinga'],
	'mg2': ['Atlético (MG)', 'Cruzeiro'],
	'rj': ['Botafogo', 'Flamengo', 'Fluminense', 'Vasco'],
	'sp': ['Barueri', 'Corinthians', 'Guarani', 'Palmeiras', 'Ponte Preta', 'Portuguesa', 'RB Bragantino', 'Santo André', 'Santos', 'São Caetano', 'São Paulo'],
	'sp4': ['Corinthians', 'Palmeiras', 'Santos', 'São Paulo'],
	's': ['Athletico (PR)', 'Avaí', 'Chapecoense', 'Coritiba', 'Criciúma', 'Figueirense', 'Grêmio', 'Internacional', 'Joinville', 'Juventude', 'Paraná'],
	'pr': ['Athletico (PR)', 'Coritiba', 'Paraná'],
	'pr2': ['Athletico (PR)', 'Coritiba'],
	'rs': ['Grêmio', 'Internacional', 'Juventude'],
	'rs2': ['Grêmio', 'Internacional'],
	'sc': ['Avaí', 'Chapecoense', 'Criciúma', 'Figueirense', 'Joinville']
}

cfinal = {
	2003: {
		'c': 'Cruzeiro',
		'l': ['Santos', 'São Paulo', 'São Caetano', 'Coritiba'],
		'r': ['Fortaleza', 'Bahia']
	},
	2004: {
		'c': 'Santos',
		'l': ['Athletico (PR)', 'São Paulo', 'Palmeiras'],
		'r': ['Criciúma', 'Guarani', 'Vitória', 'Grêmio']
	},
	2005: {
		'c': 'Corinthians',
		'l': ['Internacional', 'Goiás', 'Palmeiras'],
		'r': ['Coritiba', 'Atlético (MG)', 'Paysandu', 'Brasiliense']
	},
	2006: {
		'c': 'São Paulo',
		'l': ['Internacional', 'Grêmio', 'Santos', 'Paraná'],
		'r': ['Ponte Preta', 'Fortaleza', 'São Caetano', 'Santa Cruz']
	},
	2007: {
		'c': 'São Paulo',
		'l': ['Santos', 'Flamengo', 'Fluminense', 'Cruzeiro'],
		'r': ['Corinthians', 'Juventude', 'Paraná', 'América (RN)']
	},
	2008: {
		'c': 'São Paulo',
		'l': ['Grêmio', 'Cruzeiro', 'Palmeiras'],
		'r': ['Figueirense', 'Vasco', 'Portuguesa', 'Ipatinga']
	},
	2009: {
		'c': 'Flamengo',
		'l': ['Internacional', 'São Paulo', 'Cruzeiro'],
		'r': ['Coritiba', 'Santo André', 'Náutico', 'Sport']
	},
	2010: {
		'c': 'Fluminense',
		'l': ['Cruzeiro', 'Corinthians', 'Grêmio'],
		'r': ['Vitória', 'Guarani', 'Goiás', 'Barueri']
	},
	2011: {
		'c': 'Corinthians',
		'l': ['Vasco', 'Fluminense', 'Flamengo', 'Internacional'],
		'r': ['Athletico (PR)', 'Ceará', 'América (MG)', 'Avaí']
	},
	2012: {
		'c': 'Fluminense',
		'l': ['Atlético (MG)', 'Grêmio', 'São Paulo'],
		'r': ['Sport', 'Palmeiras', 'Atlético (GO)', 'Figueirense']
	},
	2013: {
		'c': 'Cruzeiro',
		'l': ['Grêmio', 'Athletico (PR)', 'Botafogo'],
		'r': ['Portuguesa', 'Vasco', 'Ponte Preta', 'Náutico']
	},
	2014: {
		'c': 'Cruzeiro',
		'l': ['São Paulo', 'Internacional', 'Corinthians'],
		'r': ['Vitória', 'Bahia', 'Botafogo', 'Criciúma']
	},
	2015: {
		'c': 'Corinthians',
		'l': ['Atlético (MG)', 'Grêmio', 'São Paulo'],
		'r': ['Avaí', 'Vasco', 'Goiás', 'Joinville']
	},
	2016: {
		'c': 'Palmeiras',
		'l': ['Santos', 'Flamengo', 'Atlético (MG)', 'Botafogo', 'Athletico (PR)'],
		'r': ['Internacional', 'Figueirense', 'Santa Cruz', 'América (MG)']
	},
	2017: {
		'c': 'Corinthians',
		'l': ['Palmeiras', 'Santos', 'Grêmio', 'Cruzeiro', 'Flamengo', 'Vasco', 'Chapecoense'],
		'r': ['Coritiba', 'Avaí', 'Ponte Preta', 'Atlético (GO)']
	},
	2018: {
		'c': 'Palmeiras',
		'l': ['Flamengo', 'Internacional', 'Grêmio', 'São Paulo', 'Atlético (MG)'],
		'r': ['Sport', 'América (MG)', 'Vitória', 'Paraná']
	},
	2019: {
		'c': 'Flamengo',
		'l': ['Santos', 'Palmeiras', 'Grêmio', 'Athletico (PR)', 'São Paulo', 'Internacional', 'Corinthians'],
		'r': ['Cruzeiro', 'CSA', 'Chapecoense', 'Avaí']
	},
  2020: {
    'c': 'Flamengo',
    'l': ['Internacional', 'Atlético (MG)', 'São Paulo', 'Fluminense', 'Grêmio', 'Palmeiras', 'Santos'],
    'r': ['Vasco', 'Goiás', 'Coritiba', 'Botafogo']
  },
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
        if (a[i].y < 2005) res[1] = 23;
        if (a[i].y == 2005) res[1] = 21;
        if (a[i].y > 2005) res[1] = 19;
      } else if (turno == 2){
        if (a[i].y < 2005) res[0] = 24, res[1] = 46;
        if (a[i].y == 2005) res[0] = 22, res[1] = 42;
        if (a[i].y > 2005) res[0] = 20, res[1] = 38;
      } else {
        if (!rodadas[1] || (a[i].y != anos[anos.length - 1] && !rfixas)) {
          if (a[i].y < 2005) res[1] = 46;
          if (a[i].y == 2005) res[1] = 42;
          if (a[i].y > 2005) res[1] = 38;
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