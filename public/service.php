<?php include "layouts/head.php" ?>
<?php include "layouts/header.php" ?>
<?php perch_content('Hero'); ?>
<div class="main-container container">
	<main class="main wrapper">
		<div class="intro row">
			<div class="intro__text">
				<?php perch_content('Intro text'); ?>
			</div>
			<div class="intro__image">
				<?php perch_content('Intro image'); ?>
			</div>
		</div>
	</main>
</div>
<?php include "layouts/cta.php" ?>
<?php include "layouts/footer.php" ?>