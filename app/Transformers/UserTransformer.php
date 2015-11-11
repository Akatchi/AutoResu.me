<?php 

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\User;

class UserTransformer extends TransformerAbstract
{
    /**
     * $availableIncludes, shows the available words that can trigger the relation
     *
     * @var array
     */
    protected $availableIncludes = [
        'work',
    ];

    public function transform(User $user)
    {
        return [
            'id' => $user->id,
            'email' => $user->email,
            'name' => $user->name,
        ];
    }

    /**
     * includeWork returns the relation and transforms it aswel for the output.
     *
     * @param  Skill  $skill    The skill object which is being used.
     *
     * @return Item             The item that's being transformed.
     */
    public function includeWork(User $user)
    {
        $work = $user->workExperiences;

        return $this->collection($work, new WorkTransformer);
    }
}