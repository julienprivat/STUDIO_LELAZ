<?php

$context = Timber::get_context();
$context['page'] = new Timber\Post();

Timber::render('singlemanagement.twig', $context);
