<?php

    require_once 'inc/comment.php';

?><!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="utf-8">


    <link rel="stylesheet/less" type="text/css" href="styles.less" />
    <script type="text/javascript">
        var less = {
            env: "production", // or "production"
            async: true,       // load imports async
            fileAsync: false,   // load imports async when in a page under
            // a file protocol
            poll: 3000,         // when in watch mode, time in ms between polls
            functions: {},      // user functions, keyed by name
            dumpLineNumbers: "all", // or "mediaQuery" or "all"
            relativeUrls: false// whether to adjust url's to be relative
        };
    </script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.4.1/less.min.js"></script>

</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Dat tutorial about quotes!</h1>
        </div>
        <div class="quote-container jumbotron">
            <blockquote class="quote">
                Let's decide what to put here later on.</blockquote>
            <span class="author">Fräntz Miccoli</span>
        </div>
        <div class="clearfix"></div>
        <div class="comments">
            <h3 class="title">Comments</h3>
            <div class="comment-add">
                <form class="comment-form" action="" role="form" method="post">
                    <div class="form-group">
                        <label for="nickname">Nickname</label>
                        <input type="text" id="nickname" name="nickname" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea id="comment" name="comment" class="form-control"></textarea>
                    </div>
                    <input class="btn btn-primary valid" type="submit"/>
                </form>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="footer"></div>
    </div>
</body>
</html>