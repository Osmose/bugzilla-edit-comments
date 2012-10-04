var data = require('self').data;
var pageMod = require("page-mod");

pageMod.PageMod({
    include: /.*bugzilla.mozilla.org\/show_bug.*/,
    contentScriptFile: [
        data.url('jquery-1.8.2.min.js'),
        data.url('editComments.js')
    ]
});
