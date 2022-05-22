function drawHtml(data) {
    fetch("/static/src/json/Dictionary.json")
        .then(response => {
            return response.json()
        })
        .then(arr => {
            let Items = arr.Dictionary.map((item, j) => (
                <StateGroup
                    key={j}
                    Imgs={item.img}
                    unit={item.unit}
                    value1={item.value1}
                    value2={item.value2}
                    value3={item.value3}
                    value4={item.value4}
                    State={data[j].count} />
            ))
            ReactDOM.render(Items, document.getElementById("Content"));
        })
        .catch(function (error) {
            console.log(error)
        });
}