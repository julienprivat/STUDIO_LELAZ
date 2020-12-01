<?php

/**
 * Template Name: CASTING Template
 */

$context = Timber::get_context();
$context['page'] = new Timber\Post();
$args = array('post_type' => 'post', 'posts_per_page' => -1);
$context['castings'] = Timber::get_posts($args);

Timber::render('casting.twig', $context);
