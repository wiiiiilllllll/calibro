<!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div class="container header-container">
    <header class="header wrapper">
        <div class="header__primary">
            <a href="/" class="header__logo">
                <img src="/img/calibro-logo@2x.png" alt="Calibro Transport, Highway &amp; Infrastructure Consultants">
            </a>
            <button class="menu button button--outline">Menu</button>
        </div>
        <div class="header__secondary">
            <ul class="header__contact">
                <li>0123456789</li>
                <li>email@example.com</li>
                <li><img src="perch/resources/twitter-128.png" alt=""></li>
                <li><img src="perch/resources/fb-art.png" alt=""></li>
            </ul>
            <?php perch_pages_navigation([
                'template'  => ['nav--level1.html','nav--level2.html']
            ]); ?>
        </div>
    </header>
</div>