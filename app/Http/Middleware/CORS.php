<?php

namespace AutoResume\Http\Middleware;

use Closure;
use Response;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $headers = [
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin, x-firephp-version, Authorization'
        ];

        $response = $next($request);

        foreach($headers as $key => $value)
            $response->headers->set($key, $value);
 
        return $response;
    }
}
