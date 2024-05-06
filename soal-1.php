<?php

// Menghubungkan db
$dbh = new PDO('mysql:host=localhost;dbname=proyek2', 'root', '');
$db = $dbh->prepare('SELECT * FROM stok');
$db->execute();
$stok = $db->fectchAll(PDO::FETCH_ASSOC);

// Mengubah data pada db menjadi json
$data = json_encode($stok);
echo $data;

?>