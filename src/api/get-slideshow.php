<?php
header('Content-Type: application/json');
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
header("X-Content-Type-Options: nosniff");
header("Access-Control-Allow-Origin: http://localhost:9000");


$slides = [
    [
        "href" => "#placeholder1",
        "image" => "https://www.krashher.ru/real-estate/images/family.webp",
        "title" => "Family"
    ],
    [
        "href" => "#placeholder2",
        "image" => "https://www.krashher.ru/real-estate/images/keyHome.webp",
        "title" => "Keys"
    ],
    [
        "href" => "#placeholder3",
        "image" => "https://www.krashher.ru/real-estate/images/parking.webp",
        "title" => "Parking"
    ],
    [
        "href" => "#placeholder4",
        "image" => "https://www.krashher.ru/real-estate/images/sold.webp",
        "title" => "Sold"
    ],
];

echo json_encode($slides);
?>
