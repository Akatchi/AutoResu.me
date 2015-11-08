<?php

namespace AutoResume\Transformers;

use League\Fractal\TransformerAbstract;
use AutoResume\Entities\Skill;
use AutoResume\Entities\SkillType;

/**
 * SkillTransformer, handles the data output.
 * This class makes sure that there's only one consistent way to display the data.
 */
class SkillTransformer extends TransformerAbstract
{
    /**
     * $availableIncludes, shows the available words that can trigger the relation
     *
     * @var array
     */
    protected $availableIncludes = [
        'skilltype',
    ];

    /**
     * transform, handles the transformation for the object that's being passed in.
     * This returns an array with the proper fields and names.
     *
     * @param  Skill  $skill    The skill object which is an object.
     *
     * @return array            The output to display.
     */
    public function transform(Skill $skill)
    {
        return [
            'id' => $skill->id,
            'skill' => $skill->name,
            'description' => $skill->description,
            'enabled' => (($skill->enabled == 1) ? true : false) ,
        ];
    }

    /**
     * includeSkiltype returns the relation and transforms it aswel for the output.
     *
     * @param  Skill  $skill    The skill object which is being used.
     *
     * @return Item             The item that's being transformed.
     */
    public function includeSkilltype(Skill $skill)
    {
        $skilltype = $skill->skillType;

        return $this->item($skilltype, new SkillTypeTransformer);
    }
}
