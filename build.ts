import {project, Service} from '@wasm/studio-utils';
import * as gulp from 'gulp';

gulp.task('build', async () => {
  const data = await Service.compileFile(
      project.getFile('src/main.c'), 'c', 'wasm', '-O3');
  const outWasm = project.newFile('out/main.wasm', 'wasm', true);
  outWasm.setData(data);
});

gulp.task('default', ['build'], async () => {});
