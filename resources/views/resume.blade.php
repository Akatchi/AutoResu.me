<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <style>
            [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak],
            .ng-cloak, .x-ng-cloak,
            .ng-hide {
                display: none !important;
            }

            .active { 
                background: rgb(224,224,224);
            }

            .loading-bar .bar {
                background: #fff;
            }

            .loading-bar-spinner .spinner-icon {
                border-top-color: #fff;
                border-left-color: #fff;
            }

            .menu-item-text {
                text-transform: uppercase;
                font-weight: 500;
            }
            .
            .md-input-container.md-default-theme, md-input-container .md-input {
                color: inherit !important;
            }

            .md-button.md-fab.md-fab-bottom-right {
                top: auto;
                right: 20px;
                bottom: 20px;
                left: auto;
                position: fixed;
            }

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
                    <span class="picture check-element"><img src="http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg" /></span>
                </div>
            </div>

            <div id="personal">
                <div class="item">
                    <label>First Name: </label>
                    <p>Pietje</p>
                </div>

                <div class="item _name">
                    <label>Last Name: </label>
                    <p>Puk</p>
                </div>

                <div class="item er">
                    <label>Gender: </label>
                    <p>Bob Ross</p>
                </div>

                <div class="item hday">
                    <label>Birthday: </label>
                    <p>12-12-12</p>
                </div>

                <div class="item">
                    <label>Place of birth: </label>
                    <p>Radiant</p>
                </div>

                <div class="item">
                    <label>Address: </label>
                    <p>Ghastly Earie</p>
                </div>

                <div class="item">
                    <label>Postal code: </label>
                    <p>Skipped</p>
                </div>

                <div class="item">
                    <label>City / Town: </label>
                    <p>Dire</p>
                </div>

                <div class="item">
                    <label>E-mail: </label>
                    <p>rtz@rtz.dong</p>
                </div>

                <div class="item">
                    <label>Website: </label>
                    <p>www.github.lol</p>
                </div>
            </div>

            <div class="bio">
                <h2 class="gen-title">Personal profile</h2>
                <div class="item">
                    <p>Lorem ipsum</p>
                </div>
            </div>

            <div class="clear">&nbsp;</div>

            <div class="employment">
                <h2 class="gen-title">Employment history</h2>
                <table>
                <tbody>
                    <tr class="first">
                        <td class="date">1- 2</td>
                        <td class="employer">school</td>
                        <td class="industry">asdf</td>
                    </tr>
                    <tr class="second">
                        <td class="position">dev</td>
                        <td class="desc" colspan="2">red</td>
                    </tr>
                </table>
            </div>

            <div class="education">
                <h2 class="gen-title">Education history</h2>
                <table>
                <tbody>
                    <tr class="first">
                        <td class="date">`-12</td>
                        <td class="school">asdf</td>
                        <td class="type">asdfasdf</td>
                    </tr>
                    <tr class="second">
                        <td class="degree">asdfasdf</td>
                        <td class="activities" colspan="2">asdfasdf</td>
                    </tr>
                </table>
            </div>

            <div class="skills">

                <div class="work_skills">
                    <h2 class="gen-title">Skills</h2>
                    <h3 class="gen-sub-title">Professional skills</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td class="skills">nice</td>
                                <td class="level">skills</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="communication_skills">
                    <h3 class="gen-sub-title">Communication skills</h3>
                    <ul>
                        <li>ok</li>
                    </ul>
                </div>

                <div class="organisational_skills">
                    <h3 class="gen-sub-title">Management and organisational skills</h3>
                    <ul>
                        <li>rata</li>
                    </ul>
                </div>
            </div>

            <div class="languages">
                <h2 class="gen-title">Languages</h2>
                <ul>
                    <li>gd</li>
                </ul>
            </div>

            <div class="hobbies">
                <h2 class="gen-title">Hobbies</h2>
                <ul>
                    <li>Fallout</li>
                </ul>
            </div>

        </div>
    </body>
</html>
