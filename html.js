module.exports = function (args) {
    var bundleCss = ''

    if (args[0]!=='dev'){
        bundleCss = `
        <link rel="stylesheet" type="text/css" href="/output/style.css">
        `
    }

    return `
    <!DOCTYPE html>
    <html lang="zh-cn">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="format-detection"
          content="telephone=no">
    ${bundleCss}
    <title>Fit Design</title>

    <body>
    <div id='react-dom'></div>
    </body>
    <script src="/output/cdn/React.js"></script>
    <script src="/output/cdn/ReactRouter.js"></script>
    <script src="/output/cdn/classNames.js"></script>
    <script src="/output/cdn/_.js"></script>
    <script src="/output/cdn/$.js"></script>
    <script src="/output/index.js"></script>
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?9e6356ee54313747e9bbdb40ecdfa809";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
    </html>
    `
}