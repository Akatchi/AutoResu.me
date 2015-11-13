<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AuthenticateTest extends TestCase
{
    /** @test */
    public function it_returns_an_error_if_invalid_credentials_are_given()
    {
      $this->post('/api/authenticate/token', ['email' => 'invalid@email.com', 'password' => 'invalid-password'])
       ->seeJson([
           'error' => "invalid_credentials",
       ])
       ->seeStatusCode(401);
    }

    /** @test */
    public function it_returns_405_method_not_allowed()
    {
      $this->get('/api/authenticate/token')
        ->seeStatusCode(405);
    }

    /** @test */
    public function it_returns_an_authentication_token()
    {
      $email = 'wahid_kl@hotmail.com';
      $password = 'password';

      $response = $this->post('/api/authenticate/token', ['email' => $email, 'password' => $password])
        ->seeStatusCode(200);
    }
}
