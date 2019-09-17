const {src, dest, watch, series, parallel} = require("gulp");

const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/styles/*.css"
}

function copyHTML(){
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

function copyCss(){
    return src(files.cssPath)
        .pipe(dest('pub/css')
    );
}



exports.default = series(copyHTML, copyCss);