var search = hexo.theme.search || {};

search.path = search.path || 'search.json';

hexo.theme.search = search;

hexo.extend.generator.register('images', require('./lib/generator'));
