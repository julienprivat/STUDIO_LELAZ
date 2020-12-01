<?php

/**
 * Template Name: CONTACT Template
 */

$context = Timber::get_context();
$context['page'] = new Timber\Post();

Timber::render('contact.twig', $context);
