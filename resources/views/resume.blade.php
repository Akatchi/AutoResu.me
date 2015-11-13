<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style>
            /* General */
            .gen-container a, .gen-container a:visited, .gen-container a:hover, .gen-container a:link { color: #000; text-decoration: none; }
            .gen-container a:hover { text-decoration: underline; }
            div.clear { clear: both; }
            h2.gen-title { width: 100%; border-bottom: 1px solid #000; margin: 0 auto; margin-bottom: 10px; margin-top: 5px; font-size: 1.4em; }
            h3.gen-sub-title { font-size: 1.1em; margin: 5px 0; }
            .item p, .item label { display: inline; }
            /* The different parts */
            .pictures { margin: 6px 40px 20px 0; width: 200px;  }
            .personal { margin: 0px 0 0px 0; width: calc(100% - 240px);  }
            .pictures div.picture {  display: block; max-width: 200px; margin: 0 20px 20px 0; }
            .pictures span.picture img { width: 200px; height: 200px; border: 1px solid black; }
            .picture {
                -webkit-transition:all linear 0.5s;
                transition:all linear 0.5s;
            }
            .picture.ng-hide img { opacity:0 }
            .personal {
                -webkit-column-count: 2;
                -moz-column-count: 2;
                column-count: 2;
            }
            .personal .item { margin-top: 4px; }
            .employment table tr.second td { padding: 5px 0 25px 0; }
            .employment table tr td { padding-right: 10px; }
            .employment table .date { width: 200px; font-style: italic; font-size: 0.8em; text-align: left; }
            .employment table .employer { width: calc(100% - 480px); font-weight: bolder; font-size: 0.9em; text-align: left; }
            .employment table .industry { width: 250px; font-size: 0.9em; text-align: right; }
            .employment table .position { width: 200px; font-style: italic; font-size: 0.9em; text-align: left; vertical-align: top; }
            .employment table .desc { width: calc(100% - 200px); text-align: left; }
            .education table tr.second td { padding: 5px 0 25px 0; }
            .education table tr td { padding-right: 10px; }
            .education table .date { width: 200px; font-style: italic; font-size: 0.8em; text-align: left; }
            .education table .school { width: calc(100% - 530px); font-weight: bolder; font-size: 0.9em; text-align: left; }
            .education table .type { width: 300px; font-size: 0.9em; text-align: right; }
            .education table .degree { width: 200px; font-style: italic; font-size: 0.9em; text-align: left; vertical-align: top; }
            .education table .activities { width: calc(100% - 200px); text-align: left; }
            .skills .work_skills table tr td { padding: 5px 10px 25px 0 ; }
            .skills .work_skills table td.skills { width: 200px; }
            .skills .work_skills table td.level { width: calc(100% - 220px); }
            .skills ul, .languages ul, .hobbies ul { margin: 0 0 25px 0; }
            .gen-container .submit_form { width: 100%; text-align: center; }
            .gen-container .submit_form label,
            .gen-container .submit_form input,
            .gen-container .submit_form button.md-primary { display: block; margin: 0 auto; width: 200px; }
            .gen-container .submit_form button.md-primary { margin-top: 8px; width: 206px; font-weight: bolder; }
        </style>
    </head>
    <body>
        <div class="gen-container">

            <h2 class="gen-title">Resume</h2>
            <div class="pictures">

                <div class="picture">
                    <span class="picture check-element"><img src="data:image/png;base64,{{$data['photo'][0]['url']}}" /></span>
                </div>
            </div>

            <div id="personal">
                <div class="item">
                    <label>First Name: </label>
                    <p>{{ $data['personal']['first_name'] }}</p>
                </div>

                <div class="item _name">
                    <label>Last Name: </label>
                    <p>{{ $data['personal']['last_name'] }}</p>
                </div>

                <div class="item er">
                    <label>Gender: </label>
                    <p>{{ ucfirst($data['personal']['gender']) }}</p>
                </div>

                <div class="item hday">
                    <label>Birthday: </label>
                    <p>{{ $data['personal']['birthday'] }}</p>
                </div>

                <div class="item">
                    <label>Place of birth: </label>
                    <p>{{ $data['personal']['birthplace'] }}</p>
                </div>

                <div class="item">
                    <label>Address: </label>
                    <p>{{ $data['personal']['address'] }}</p>
                </div>

                <div class="item">
                    <label>Postal code: </label>
                    <p>{{ $data['personal']['postalcode'] }}</p>
                </div>

                <div class="item">
                    <label>City / Town: </label>
                    <p>{{ $data['personal']['city'] }}</p>
                </div> 

                <div class="item">
                    <label>E-mail: </label>
                    <p>{{ $data['personal']['email'] }}</p>
                </div>

                <div class="item">
                    <label>Website: </label>
                    <p>{{ $data['personal']['website'] }}</p>
                </div>
            </div>

            <div class="bio">
                <h2 class="gen-title">Personal profile</h2>
                <div class="item">
                    <p>{{ $data['personal']['bio'] }}</p>
                </div>
            </div>

            <div class="clear">&nbsp;</div>

            <div class="employment">
                <h2 class="gen-title">Employment history</h2>
                <table>
                <tbody>
                @forelse($data['work'] as $work)
                    @if($work['enabled'] == 1)
                    <tr class="first">
                        <td class="date">{{ $work['start_date'] }} - {{ (($work['end_date'] != null) ? $work['end_date'] : 'Current' )}}</td>
                        <td class="employer">{{ $work['employer'] }}</td>
                    </tr>
                    <tr class="second">
                        <td class="position">{{ $work['position'] }}</td>
                        <td class="desc" colspan="2">{{ $work['description'] }}</td>
                    </tr>
                    @endif
                </table>
                @empty
                    <tr class="first">
                        <td> No work </td>
                    </tr>
                @endforelse
            </div>

            <div class="education">
                <h2 class="gen-title">Education history</h2>
                <table>
                <tbody>
                @foreach($data['education'] as $education)
                    @if($education['enabled'] == 1)
                    <tr class="first">
                        <td class="date">{{ $education['start_date'] }} - {{ (($education['end_date'] != null ) ? $education['end_date'] : 'Current') }}</td>
                        <td class="school">{{ $education['school'] }}</td>
                        <td class="type">{{ $education['type'] }}</td>
                    </tr>
                    <tr class="second">
                        <td class="degree">{{ $education['degree'] }}</td>
                    </tr>
                    @endif
                @endforeach
                </table>
            </div>

            <div class="skills">
                <div class="work_skills">
                    <h2 class="gen-title">Skills</h2>
                    @foreach($data['skills'] as $skill)
                    @if($skill['enabled'] == 1)
                        <h3 class="gen-sub-title">{{ $skill['skill_type']['name'] }}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="skills">{{ $skill['name'] }}</td>
                                    <td class="level">{{ $skill['description'] }}</td>
                                </tr>
                            </tbody>
                        </table>
                    @endif
                    @endforeach
                </div>
        </div>
    </body>
</html>