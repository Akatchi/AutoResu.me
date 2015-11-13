<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;
use AutoResume\Transformers\PersonalInformationTransformer;
use AutoResume\Entities\PersonalInformation;
use AutoResume\Entities\Skill;
use AutoResume\Entities\Work;
use AutoResume\Entities\Education;
use AutoResume\Entities\Photo;
use Auth, PDF;

class PDFController extends Controller
{
    public function generatePdf()
    {

        
        $personalInfo = PersonalInformation::where('user_id', '=', Auth::user()->id)->where('enabled', '=', 1)->first();
        $skills = SKill::with('skillType')->where('user_id', '=', Auth::user()->id)->where('enabled', '=', 1)->get();
        $work = Work::where('user_id', '=', Auth::user()->id)->where('enabled', '=', 1)->get();
        $education = Education::where('user_id', '=', Auth::user()->id)->where('enabled', '=', 1)->get();
        $photo = Photo::where('user_id', '=', Auth::user()->id)->where('enabled', '=', 1)->get();

        $data = [
            'personal' => $personalInfo->toArray(),
            'skills' => $skills->toArray(),
            'work' => $work->toArray(),
            'education' => $education->toArray(),
            'photo' => $photo->toArray(),
        ];


        // $headers = array(
        //     'Content-Type' => 'application/octet-stream',
        //     'Content-Length' => strlen($pdf),
        //     'Content-Dsiposition' => 'attachment; filename="resume.pdf"',
        //     'Authorization' => 'Bearer '.
        // )

        $pdf = PDF::loadView('resume', array('data' => $data));

        return $pdf->download('resume.pdf');

    }
    
}