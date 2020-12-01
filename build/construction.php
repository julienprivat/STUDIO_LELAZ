<?php
/**
 * Template Name: construction
 *
 */

$context = Timber::get_context();
$args = array('post_type' => 'work', 'posts_per_page' => -1);
$context['posts'] = Timber::get_posts($args);

Timber::render('construction.twig', $context);