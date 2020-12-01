<?php

$context = Timber::get_context();
$context['page'] = new Timber\Post();

echo '<script>console.log("$context", ' . json_encode($context['page']) . ');</script>';

Timber::render('home.twig', $context);
