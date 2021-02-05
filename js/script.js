let daysOfWeek = ['пн','вт','ср','чт','пт','сб','вс'],
    monthstart,
    nums,
    numOfWeeks,
    day = 1,
    calendar = '';


while ((monthstart = daysOfWeek.indexOf(monthstart)) == -1) {
    monthstart = prompt('С какого дня начало?(пн,вт,ср,чт,пт,сб,вс)');
}

while (true) {
    nums = prompt('Сколько дней в месяце?(28, 29, 30, 31)');
    nums = Number(nums);
    if (nums == 28 || nums == 29 || nums == 30 || nums == 31) break;
}

numOfWeeks = Math.ceil((monthstart + nums) / 7);

calendar += '<table><tr>';

for (let i = 0; i < 7; i++) {
    calendar += `<th>${daysOfWeek[i]}</th>`;
}

calendar += '</tr>';


for (let i = 1; i <= numOfWeeks; i++) {
    calendar += '<tr>';

    let week = ['','','','','','',''];

    for (let j = monthstart; j < 7 && day <= nums; j++) {
        week[j] = day;
        day++;
    }

    for (let j = 0; j < 7; j++) {
        calendar += `<td>${week[j]}</td>`;
    }

    calendar += '</tr>';
    monthstart = 0;

}

calendar += '</table>';

document.write(calendar);



