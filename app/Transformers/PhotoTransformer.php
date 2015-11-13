<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\Photo;


class PhotoTransformer extends TransformerAbstract
{
    public function transform(Photo $photo)
    {
        return [
            'id' => $photo->id,
            'name' => $photo->name,
            'url' => $photo->url,
            'enabled' => (($photo->enabled == 1) ? true : false),
        ];
    }
}