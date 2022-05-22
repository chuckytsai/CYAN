function getAjax() {
    let data = {
        jsonrpc: "2.0",
        method: "get_tag_values",
        params: null,
        id: 2
    }
    $.ajax({
        type: 'POST',
        url: its_proxy + '/var',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'text/plain; charset=UTF-8',
        success: function (res) {
            const data = res.result.data
            //物件轉陣列
            let dataArr = Object.entries(data)
                .map(([TagName, TagCount]) => {
                    return { name: TagName, count: TagCount }
                });
            //陣列篩選需要的資料
            var dataFilter = dataArr.filter(function (item) {
                return item.name.length <= 5;
            });
            drawHtml(dataFilter);
        },
        error: function () {
            console.log('url 錯誤')
        },
    });
}
