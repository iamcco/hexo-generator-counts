function images(locals) {
    var search = this.theme.search;
    var posts = locals.posts;
    var regImg = /<img[^>]*?src="(.*?)"[^>]*?>/g;
    var imgTotal = 0;
    var articleTotal = 0;
    var result = {};

    result.contents = posts.map(function(item) {
        articleTotal ++;
        var imgs = {
            title: item.title,
            path: item.path,
            urls: [],
            content: item.content
        };
        var temp;
        while((temp = regImg.exec(item.content))) {
            imgTotal++;
            imgs.urls.push(temp[1]);
        }
        return imgs;
    });

    result.iTotal = imgTotal;
    result.aTotal = articleTotal;

    return {
        path: search.path,
        data: JSON.stringify(result)
    };
}

module.exports = images;
