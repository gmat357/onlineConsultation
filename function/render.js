exports.render = (content_name,rows,rows2)=>{
    var nav = require('../layout/admin/nav');
    var header = require('../layout/admin/header');
    var content = require('../layout/admin/'+content_name);
    var footer = require('../layout/admin/footer');

    var render = {
        nav:nav.nav(),
        header:header.header(),
        content:content.content(rows,rows2),
        footer:footer.footer(),
        css:content_name
    };

    return render;
}