<?php

namespace AutoResume\Http\Controllers;

use Illuminate\Http\Request;

use AutoResume\Http\Requests;
use AutoResume\Http\Controllers\Controller;

use PDF;

class PDFController extends Controller
{
    /**
     * Turns the view with the resume into pdf.
     *
     * @return \Illuminate\Http\Response
     */
    public function generate()
    {
        $pdf = PDF::loadView('resume');
        return $pdf->stream();
    }

}
