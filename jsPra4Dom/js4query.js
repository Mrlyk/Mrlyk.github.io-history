    function getAllListItem() {
        // 返回页面中所有li标签
        var li = document.querySelectorAll("li");
        console.log(li);
    }

    function findAllHtmlSpanInOneSection(sectionId) {
        // 返回某个section下所有span中内容为HTML的span标签
        var sec = document.querySelector('#' + sectionId).querySelectorAll('span');
        for (var i = 0; i < sec.length; i++) {
            if (sec[i].innerHTML == 'HTML') {
                console.log(sec[i]);
            }
        }


    }

    function findListItem(sectionId, spanCont) {
        // 返回某个section下，所有所包含span内容为spanCont的LI标签
        var sec_b = document.querySelector('#' + sectionId).querySelectorAll('span');
        for (var i = 0; i < sec_b.length; i++) {
            if (sec_b[i].textContent == spanCont) {
                console.log(sec_b[i].parentNode);
            }
        }

    }

    function getActiveLinkContent(sectionId) {
        // 返回某个section下，class为active的链接中包含的文字内容
        var sec_c = document.querySelector('#' + sectionId).querySelectorAll('a.active');
        for (var i = 0; i < sec_c.length; i++) {
            console.log(sec_c[i].textContent);
        }
    }