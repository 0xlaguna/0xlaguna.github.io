var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/ckodai/ckodai.github.io.git'
}, (err) => {
  console.log(err);
});
