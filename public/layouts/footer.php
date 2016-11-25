    <div class="container footer-container">
        <footer class="wrapper">
            <div class="footer__left">
                <perch:content id="footer_left" type="text" label="Footer text - left" />
            </div>
            <div class="footer__right">
                <perch:content id="footer_right" type="pagelist" label="Footer text - right" />
            </div>
        </footer>
    </div>

    <div class="overlay"></div>

    <!-- loadJS -->
    <script>(function(w){var loadJS=function(src,cb){"use strict";var ref=w.document.getElementsByTagName("script")[0];var script=w.document.createElement("script");script.src=src;script.async=true;ref.parentNode.insertBefore(script,ref);if(cb && typeof(cb)==="function"){script.onload=cb;}return script;};if(typeof module!=="undefined"){module.exports=loadJS;}else{w.loadJS=loadJS;}}(typeof global!=="undefined"?global:this));</script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || loadJS('<script src="/js/vendor/jquery-1.11.2.min.js')</script>
    <script>loadJS('/js/calibro.min.js')</script>
</body>
</html>