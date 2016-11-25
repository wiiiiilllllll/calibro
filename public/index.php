<?php include($_SERVER['DOCUMENT_ROOT']."/layouts/head.php"); ?>
<?php include($_SERVER['DOCUMENT_ROOT']."/layouts/header.php"); ?>
<?php perch_content('Hero'); ?>
<div class="container main-container">
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
<?php perch_content('Call to action'); ?>
<?php perch_content('Footer'); ?>
<?php // include($_SERVER['DOCUMENT_ROOT']."/layouts/footer.php"); ?>