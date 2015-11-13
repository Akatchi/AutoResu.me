<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class SkillTest extends TestCase
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
      $this->get('/api/skill')
        ->seeJson([
             'error' => "token_not_provided",
         ])
        ->seeStatusCode(400);
    }

   /** @test */
    public function it_returns_200_with_empty_data()
    {
      $this->get('http://localhost:8000/api/skill?include=skilltype&token=' . $this->token)
        ->seeJson([
             'data' => 
             []
         ])
        ->seeStatusCode(200);
    }

    /** @test */
    public function add_new_skill_with_succes()
    {
      $this->post('http://localhost:8000/api/skill?include=skilltype&token=' . $this->token, 
        [ 'skill' => 'Test Skill',
          'description' => 'Test Skill Description',
          'type' => 'Work'])
       ->seeStatusCode(200);
    }
}
