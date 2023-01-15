elem.addEventListener("click", (event) => {
    let date = new Date(document.getElementById("date").value);
    let m = date.getMonth() + 1;
    let d = date.getDate();
    var signs = [{
            name: "козерог",
            m: 1,
            d: 20
        },
        {
            name: "водолей",
            m: 2,
            d: 20
        },
        {
            name: "рыбы",
            m: 3,
            d: 20
        },
        {
            name: "овен",
            m: 4,
            d: 20
        },
        {
            name: "телец",
            m: 5,
            d: 20
        },
        {
            name: "близнецы",
            m: 6,
            d: 21
        },
        {
            name: "рак",
            m: 7,
            d: 22
        },
        {
            name: "лев",
            m: 8,
            d: 23
        },
        {
            name: "дева",
            m: 9,
            d: 23
        },
        {
            name: "весы",
            m: 10,
            d: 23
        },
        {
            name: "скорпион",
            m: 11,
            d: 22
        },
        {
            name: "стрелец",
            m: 12,
            d: 21
        },
        {
            name: "козерог",
            m: 13,
            d: 20
        },
    ];
    if (signs[m - 1].d <= d) {
        alert(signs[m].name);
    } else alert(signs[m - 1].name);
});