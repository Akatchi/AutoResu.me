<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'mandrill' => [
        'secret' => env('MANDRILL_SECRET'),
    ],

    'ses' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'stripe' => [
        'model'  => AutoResume\User::class,
        'key'    => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'linkedin' => [
        'client_secret' => env('LINKEDIN_SECRET'),
        'client_id' => env('LINKEDIN_CLIENT_ID'),
        'redirect' => env('LINKEDIN_REDIRECT'), 
    ],

    'facebook' => [
        'client_secret' => env('FACEBOOK_SECRET'),
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'redirect' => env('FACEBOOK_REDIRECT'),
    ],

    'github' => [
        'client_secret' => env('GITHUB_SECRET'),
        'client_id' => env('GITHUB_CLIENT_ID'),
        'redirect' => env('GITHUB_REDIRECT'),
    ],
];
