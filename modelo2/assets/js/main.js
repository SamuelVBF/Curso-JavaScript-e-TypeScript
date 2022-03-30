// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toString();


// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'Segunda-Feira';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'Terça-Feira';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'Quarta-Feira';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta-Feira';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'Sexta-Feira';
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'Sabado';
//         return diaSemanaTexto;

//     }
// }

// h1.innerHTML = getDiaSemanaTexto(data.getDay());

// function getNomeMes(numeroMes) {
//     let nomeMEs;

//     switch (numeroMes) {
//     case 0:
//         nomeMEs = 'Janeiro';
//         return nomeMEs;
//     case 1:
//         nomeMEs = 'Fevereiro';
//         return nomeMEs;
//     case 2:
//         nomeMEs = 'Março';
//         return nomeMEs;
//     case 3:
//         nomeMEs = 'Abril';
//         return nomeMEs;
//     case 4:
//         nomeMEs = 'Maio';
//         return nomeMEs;
//     case 5:
//         nomeMEs = 'Junho';
//         return nomeMEs;
//     case 6:
//         nomeMEs = 'Julho';
//         return nomeMEs;
//     case 7:
//         nomeMEs = 'Agosto';
//         return nomeMEs;
//     case 8:
//         nomeMEs = 'Setembro';
//         return nomeMEs;
//     case 9:
//         nomeMEs = 'Outubro';
//         return nomeMEs;
//     case 10:
//         nomeMEs = 'Novembro';
//         return nomeMEs;
//     case 11:
//         nomeMEs = 'Dezembro';
//         return nomeMEs;
//     }
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMEs = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${ nomeMEs}` +
//         ` de ${data.getFullYear()} ` + ` 
//         ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(data);


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR' , {dateStyle: 'full' ,timeStyle:'short'});

