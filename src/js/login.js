const its_proxy = 'http://localhost:3000/jsonrpc'

$(function () {
    let data = {
        jsonrpc: "2.0",
        method: "login",
        params: {
            c_name: "admin",
            c_passwd: "admin"
        },
        id: 2
    }
    $.ajax({
        url: its_proxy + '/public',
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        crossDomain: true,
        xhrFields: { withCredentials: false },
        success: function (data) {
            if (data.result) {
                setInterval(() => {
                    getAjax(its_proxy)
                }, 2000);
            }
        },
        error: function () {
            console.log('url 錯誤 無法登入')
        },
    });
});



