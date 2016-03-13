function images(locals) {
    var posts = locals.posts;
    var regImg = /<img[^>]*?src="(.*?)"[^>]*?>/g;
    var imgTotal = 0;
    var articleTotal = 0;
    var result = {};

    result.images = posts.map(function(item) {
        articleTotal ++;
        var imgs = {
            title: item.title,
            path: item.path,
            urls: []
        };
        var temp;
        while((temp = regImg.exec(item.content))) {
            imgTotal++;
            imgs.urls.push(temp[1]);
        }
        return imgs;
    }).filter(function(item) {
        return item.length !== 0;
    });

    result.iTotal = imgTotal;
    result.aTotal = articleTotal;

    return {
        path: 'images.json',
        data: JSON.stringify(result)
    };
}

module.exports = images;
