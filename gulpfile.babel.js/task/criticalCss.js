import gulp from "gulp";

//config
import path from "../config/path";
import app from "../config/app";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins(app.loadPlugins);

export default () => {
    return gulp.src(["node_modules/normalize.scss/normalize.scss", path.criticalCss.src])
        .pipe(gp.sass())
        .pipe(gp.autoprefixer())
        .pipe(gp.shorthand())
        .pipe(gp.groupCssMediaQueries())
        .pipe(gp.csso())
        .pipe(gp.concat("critical.min.css"))
        .pipe(gulp.dest(path.criticalCss.dest))
}