<?php
$db = new SQLite3($_POST['db']);

$stmt = $db->prepare( $_POST['query'] );
$result = $stmt->execute();

$ret = [];
while( $fetch = $result->fetchArray() ) {
	$ret[] = $fetch;
}

echo json_encode( $ret );

?>