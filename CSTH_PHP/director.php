<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once './DBConfig.php';

    // if($conn){
    //     echo 'sfsf'
    // }

    $query = 
    '
    SELECT * FROM patient_details
    ';

    $result = mysqli_query($conn, $query);

    if(!mysqli_num_rows($result) > 0) {
        echo json_encode(
            // array('message' => 'No Posts Available')
            mysqli_error($conn)
        );
        return;
    }

    $users_arr = array();
    while($row = mysqli_fetch_assoc($result)) {
        $row = extract($row);

        $patient = array(
            'id' => $id, 
            // 'position' => $position,
            // 'body' => html_entity_decode($body) ,
            // 'author' => $author,
            // 'category_id' => $category_id,
            // 'category_name' => $category_name,
        );
        // echo $title . '<br>';
        array_push($patients_arr, $patient);
    }
    echo json_encode($patients_arr);