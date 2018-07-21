window.onload = function() {
    var table = document.getElementById("intable");
    for (var i = 1; i <= 9; i++) {
        // 当i，j相等时创建一个新的tr节点
        var new_tr = document.createElement("tr");
        table.appendChild(new_tr);
        for (var j = 1; j <= i; j++) {
            var old_tr = document.getElementsByTagName("tr");
            var length_tr = old_tr.length;
            var new_td = document.createElement("td");
            new_td.innerHTML = j + "*" + i + "=" + i * j;

            old_tr[length_tr - 1].appendChild(new_td);
        }
        // 拿到tr节点，往里面循环添加td子节点


    }
}
