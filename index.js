async function getData() {
    const response = await fetch("Popular_Baby_Names_20241217.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let ranks = [];
    let counts = [];
    const filtered = rows.filter(x => {
        const row = x.split(",")
        return (row[0] == "2011" && row[1] == "MALE" && row[2] == "WHITE NON HISPANIC")
    })
    console.log(filtered.length)
    filtered.forEach((elem) => {
        const row = elem.split(",");
        ranks.push(row[5]);
        counts.push(row[4]);
    })

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ranks,
            datasets: [{
                label: 'Count of Babies',
                data: counts,
                borderWidth: 1
            }]
        }
    });
}

getData();