<?php
    header('Access-Control-Allow-Origin:*');
    $cn = mysqli_connect("localhost","root", "","dbtksembako");

    $query = "select * from barang ";
    $res = mysqli_query($cn,$query);

    if(mysqli_num_rows($res)>0){
        $response = array();

        while($x = mysqli_fetch_array($res)){
            $r['id_barang'] = $x['id_barang'];
            $r['nama_barang'] = $x['nama_barang'];
            $r['harga'] = $x['harga'];
            $r['stok'] = $x['stok'];
            array_push($response,$r);
        }

        echo json_encode($response);

    }
    else{
        $response['message'] = 'no data';
        echo json_encode($response);
    }
?>