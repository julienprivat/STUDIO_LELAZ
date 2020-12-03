<?php

$context = Timber::get_context();
$context['page'] = new Timber\Post();

echo '<script>console.log("$context", ' . json_encode($context['page']->post_name . '.twig') . ');</script>';

Timber::render( array($context['page']->post_name . '.twig'), $context );
