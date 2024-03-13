//Se crea array con objetos dentro
const arrayRadiologia = [
    {hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA"},
    {hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
    {hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
    {hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA"},
    {hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA",
    },
];
//Se crea array con objetos dentro
const arrayTraumatologia = [
    {hora: "8:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA"},
    {hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE"},
    {hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA"},
    {hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE"},
    {hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE"},
];
//Se crea array con objetos dentro
const arrayDental = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
];

//Se crea variable con asignación en Id
let radiologia = document.getElementById('radiologia');
//Se indica 1era y última atención/previsión, se imprime en el div
radiologia.innerHTML = `<h2>Radiología</h2>` + radiologia.innerHTML + `<p>Primera atención: ${arrayRadiologia[0].paciente} - ${arrayRadiologia[0].prevision} | Última atención: ${arrayRadiologia[arrayRadiologia.length -1].paciente} - ${arrayRadiologia[arrayRadiologia.length -1].prevision}</p>`;
//Se crea cabecera de table
let cabeceraTabla1 = `<thead>
                            <tr>
                                <th>Hora</th>
                                <th>Especialista</th>
                                <th>Paciente</th>
                                <th>Rut</th>
                                <th>Previsión</th>
                            </tr>
                    </thead>`;
//Se crea contenido de table
let contenidoTabla1 = '<tbody>';
//Se usar for of para iterar en el array
for (const item of arrayRadiologia) {
    contenidoTabla1 += `<tr>
                            <td>${item.hora}</td>
                            <td>${item.especialista}</td>
                            <td>${item.paciente}</td>
                            <td>${item.rut}</td>
                            <td>${item.prevision}</td> 
                        </tr>`;
}
//Se imprime table en div
radiologia.innerHTML += '<table>' + cabeceraTabla1 + contenidoTabla1 + '</table>';

//Se crea variable con asignación en Id
let traumatologia = document.getElementById('traumatologia')
//Se indica 1era y última atención/previsión, se imprime en el div
traumatologia.innerHTML = `<h2>Traumatología</h2>` + traumatologia.innerHTML + `<p>Primera atención: ${arrayTraumatologia[0].paciente} - ${arrayTraumatologia[0].prevision} | Última atención: ${arrayTraumatologia[arrayTraumatologia.length -1].paciente} - ${arrayTraumatologia[arrayTraumatologia.length -1].prevision}</p>`
//Se crea cabecera de table
let cabeceraTabla2 = `<thead>
                            <tr>
                                <th>Hora</th>
                                <th>Especialista</th>
                                <th>Paciente</th>
                                <th>Rut</th>
                                <th>Previsión</th>
                            </tr>
                    </thead>`;
//Se crea contenido de table
let contenidoTabla2 = '<tbody>';
//Se usar for of para iterar en el array
for (const item of arrayTraumatologia) {
    contenidoTabla2 += `<tr>
                            <td>${item.hora}</td>
                            <td>${item.especialista}</td>
                            <td>${item.paciente}</td>
                            <td>${item.rut}</td>
                            <td>${item.prevision}</td> 
                        </tr>`;
}
//Se imprime table en div
traumatologia.innerHTML += '<table>' + cabeceraTabla2 + contenidoTabla2 + '</table>';

//Se crea variable con asignación en Id
let dental = document.getElementById('dental')
//Se indica 1era y última atención/previsión, se imprime en el div
dental.innerHTML = `<h2>Dental</h2>` + dental.innerHTML +`<p>Primera atención: ${arrayDental[0].paciente} - ${arrayDental[0].prevision} | Última atención: ${arrayDental[arrayDental.length -1].paciente} - ${arrayDental[arrayDental.length -1].prevision}</p>`
//Se crea cabecera de table
let cabeceraTabla3 = `<thead>
                            <tr>
                                <th>Hora</th>
                                <th>Especialista</th>
                                <th>Paciente</th>
                                <th>Rut</th>
                                <th>Previsión</th>
                            </tr>
                    </thead>`;
//Se crea contenido de table
let contenidoTabla3 = '<tbody>';
//Se usar for of para iterar en el array
for (const item of arrayDental) {
    contenidoTabla3 += `<tr>
                            <td>${item.hora}</td>
                            <td>${item.especialista}</td>
                            <td>${item.paciente}</td>
                            <td>${item.rut}</td>
                            <td>${item.prevision}</td> 
                        </tr>`;
}
//Se imprime table en div
dental.innerHTML += '<table>' + cabeceraTabla3 + contenidoTabla3 + '</table>';