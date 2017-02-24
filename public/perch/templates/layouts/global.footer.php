    <div class="container footer-container">
        <footer class="footer wrapper row">
            <div class="footer__left">
                <?php perch_content('Footer left'); ?>
            </div>
            <div class="footer__right">
                <?php perch_content('Footer right'); ?>
            </div>
        </footer>
    </div>

    <div class="overlay"></div>
    <div class="dialog">
        <button class="dialog__close" onclick="dialog.close();overlay.close();">✕</button>
        <div class="dialog__body"></div>
    </div>

    <!-- loadJS -->
    <script>(function(w){var loadJS=function(src,cb){"use strict";var ref=w.document.getElementsByTagName("script")[0];var script=w.document.createElement("script");script.src=src;script.async=true;ref.parentNode.insertBefore(script,ref);if(cb && typeof(cb)==="function"){script.onload=cb;}return script;};if(typeof module!=="undefined"){module.exports=loadJS;}else{w.loadJS=loadJS;}}(typeof global!=="undefined"?global:this));</script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || loadJS('/js/vendor/jquery-1.11.2.min.js')</script>
    <script>loadJS('/js/vendor/jquery.vide.min.js')</script>
    <script>loadJS('/js/calibro.min.js')</script>
</body>
</html>