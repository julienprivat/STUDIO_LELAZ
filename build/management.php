<?php

/**
 * Template Name: MANAGEMENT Template
 */

$context = Timber::get_context();
$context['page'] = new Timber\Post();
$args = array('post_type' => 'model', 'posts_per_page' => -1);
$context['posts'] = Timber::get_posts($args);

Timber::render('management.twig', $context);
