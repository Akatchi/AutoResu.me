<?php

namespace AutoResume\Providers;

use Illuminate\Support\ServiceProvider;

class TransformerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $app['Dingo\Api\Transformer\Factory']->setAdapter(function ($app) {
            $fractal = new League\Fractal\Manager;

            $fractal->setSerializer(new League\Fractal\Serializer\JsonApiSerializer);

            return new Dingo\Api\Transformer\Adapter\Fractal($fractal);
        });

        app('Dingo\Api\Transformer\Factory')->register('AutoResume\Entities\User', 'AutoResume\Transformers\UserTransformer');
    }
}
