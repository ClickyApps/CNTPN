<?php

        // Connect to Database
        $con = mysqli_connect("localhost","cntpn_admin","kop!43Q8","cntpn_dashboard");
        if (mysqli_connect_errno())
        {
                echo 'Error';
        }

        // Set Up Variables from Feedback Form
        $hospital = $con->real_escape_string($_POST['hospital']);
        $question_1 = $con->real_escape_string($_POST['question_1']);
        $question_2 = $con->real_escape_string($_POST['question_2']);
        $question_3 = $con->real_escape_string($_POST['question_3']);
        $question_4 = $con->real_escape_string($_POST['question_4']);
        $question_5 = $con->real_escape_string($_POST['question_5']);
        $question_6 = $con->real_escape_string($_POST['question_6']);
        $question_7 = $con->real_escape_string($_POST['question_7']);

        if ( $question_5 == '1' ) {
                $question_5 = 'No';
        } else if ( $question_5 == '3' ) {
                $question_5 = 'Yes';
        } else {
                $question_5 = 'Maybe';
        }

        if ( $_POST['hospital'] != '' ) {

                $query = "INSERT INTO data_feedback (Hospital,Question_1,Question_2,Question_3,Question_4,Question_5,Question_6,Question_7) VALUES ('$hospital','$question_1','$question_2','$question_3','$question_4','$question_5','$question_6','$question_7')";
                $con->query($query);

                echo 'Success';

        } else {

                echo 'This area is used by an iOS/Android application, and cannot be visited using a web browser.';

        }

?>