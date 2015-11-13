<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\Provider;

class ProviderTransformer extends TransformerAbstract
{
    public function transform(Provider $provider)
    {
        return [
            'name' => $provider->name,
            'pretty_name' => $provider->pretty_name,
            'enabled' => (($provider->enabled == 1) ? true : false),
        ];
    }
}