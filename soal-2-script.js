$(document).ready(function(){
    $.ajax({
        url: 'stok.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
    
            // Menampilkan data stok
            var stok = data.stok;
            for(var i = 0; i < stok.length; i++){
                var id = stok[i].id;
                var nama = stok[i].nama_barang;
                var harga = stok[i].harga;
                var kategori = stok[i].kategori;
                var satuan = stok[i].satuan;
                var newRow = $('<tr>');
                newRow.append('<td>' + id + '</td>');
                newRow.append('<td>' + nama + '</td>');
                newRow.append('<td>' + harga + '</td>');
                newRow.append('<td>' + kategori + '</td>');
                newRow.append('<td>' + satuan + '</td>');
                newRow.append('<button> Hapus </button>');
                $('#daftar-buku').append(newRow);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
});