<?php include($_SERVER['DOCUMENT_ROOT']."/layouts/head.php"); ?>
<?php include($_SERVER['DOCUMENT_ROOT']."/layouts/header.php"); ?>
<?php perch_content('Hero'); ?>
<div class="container main-container">
	<main class="main wrapper">

		<h1>/public/successes/index.php</h1>
		<?php include(str_replace('/', DIRECTORY_SEPARATOR, '../perch/templates/pages/default.php')); ?>
		
	</main>
</div>
<?php perch_content('Call to action'); ?>
<?php include($_SERVER['DOCUMENT_ROOT']."/layouts/footer.php"); ?>