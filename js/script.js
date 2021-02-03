let daysOfWeek = ['пн','вт','ср','чт','пт','сб','вс'];



let monthstart = daysOfWeek.indexOf(prompt('С какого дня начало?(пн,вт,ср,чт,пт,сб,вс)')),
    nums = parseInt(prompt('сколько дней в месяце?')),
    numOfWeeks = Math.ceil((monthstart + nums) / 7),
    day = 1;


document.write('<table>');
document.write('<thead>');
for (let i = 0; i < 7; i++) {
    document.write(`<th>${daysOfWeek[i]}</th>`);
}
document.write('</thead>');
for (let i = 1; i <= numOfWeeks && day <= nums; i++) {
    document.write('<tr>');
    let week = ['','','','','','',''];
    for (let j = monthstart; j < 7 && day <= nums; j++) {
        week[j] = day;
        day++;
    }
    for (let j = 0; j < 7; j++) {
        document.write(`<td>${week[j]}</td>`);
    }
    document.write('</tr>');
    monthstart = 0;
}

document.write('</table>');


