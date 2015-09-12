(function () {

	'use strict';

	// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
	var gulp = require('gulp');
	var jshint = require('gulp-jshint');
	var uglify = require('gulp-uglify');
	var concat = require('gulp-concat');
	var rename = require('gulp-rename');		
	var browserSync = require('browser-sync').create();

	// Definimos o diretorio dos arquivos para evitar repetição futuramente
	var arquivosJs = "./app/*.js";
	var arquivosHtml = "./app/*.html"

	//Aqui criamos uma nova tarefa através do ´gulp.task´ e damos a ela o nome 'lint'
	gulp.task('lint', function() {
		// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
		// E logo depois usamos o `pipe` para rodar a tarefa `jshint`
		gulp.src(arquivosJs)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});

	//Criamos outra tarefa com o nome 'dist'
	gulp.task('dist', function() {
		// Carregamos os arquivos novamente
		// E rodamos uma tarefa para concatenação
		// Renomeamos o arquivo que sera minificado e logo depois o minificamos com o `uglify`
		// E pra terminar usamos o `gulp.dest` para colocar os arquivos concatenados e minificados na pasta dist/
		gulp.src(arquivosJs)
			.pipe(concat('./dist'))
			.pipe(rename('dist.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dist'));
	});

	//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
	gulp.task('default', function() {
		// Usamos o `gulp.run` para rodar as tarefas
		// E usamos o `gulp.watch` para o Gulp esperar mudanças nos arquivos para rodar novamente
		gulp.run('serve');
	});

	// Tarefa que levanta um servidor para exbição do projeto
	gulp.task('serve', function() {
		gulp.watch(arquivosJs, ['lint']).on("change", browserSync.reload);
		gulp.watch(arquivosHtml).on("change", browserSync.reload);

	    browserSync.init({
	        server: {
	            baseDir: "./app"
	        }
	    });
	});

})();