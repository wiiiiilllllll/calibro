<?php if (!defined('PERCH_RUNWAY')) include($_SERVER['DOCUMENT_ROOT'].'/perch/runtime.php'); ?>
<?php perch_layout("global.head"); ?>
<?php perch_layout("global.header"); ?>

<div class="container main-container">
	<main class="main wrapper">

		<h1>/public/services/index.php</h1>
		<?php include(str_replace('/', DIRECTORY_SEPARATOR, '../perch/templates/pages/default.php')); ?>
	
	</main>
</div>
<?php perch_content('Call to action'); ?>
<?php perch_layout('global.footer'); ?>