<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SkillTypeTest extends TestCase
{
    private $token;

    public function setUp()
    {
        parent::setUp();
        $response = $this->post('/api/authenticate/token', ['email' => 'wahid_kl@hotmail.com', 'password' => 'password']);
        $this->token = json_decode($this->response->getContent())->token;
    }

    /** @test */
    public function it_returns_400_bad_request_no_token_not_provided()
    {
      $this->get('/api/skilltype')
        ->seeJson([
             'error' => "token_not_provided",
         ])
        ->seeStatusCode(400);
    }

    /** @test */
    public function it_returns_200_with_three_skills()
    {
      $this->get('http://localhost:8000/api/skilltype/?token=' . $this->token)
        ->seeJson([
             'data' => 
             [
                ['skill' => 'Work'],
                ['skill' => 'Orgranisational'],
                ['skill' => 'Other'],
             ]
         ])
        ->seeStatusCode(200);
    }
}
