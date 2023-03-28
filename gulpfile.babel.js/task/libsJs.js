import gulp from "gulp";

//config
import path from "../config/path";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
    return gulp.src([
        "node_modules/svg4everybody/dist/svg4everybody.js",
        "node_modules/slick-carousel/slick/slick.js",
        "node_modules/simplebar/dist/simplebar.js",
        "node_modules/slim-select/dist/slimselect.js"
    ])
        .pipe(gp.concat("libs.min.js"))
        .pipe(gp.terser())
        .pipe(gulp.dest(path.libsJs.dest))
}