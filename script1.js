//belajar alert,prompt,dan confirm
document.write(`<h2> Belajar arert,prompt, dan confirm </h2><br>`)
alert ('selamat datang')
var nama = prompt ('silahkan masukan nama'),
    Tanggal = prompt ('silahkan masukan Tanggal lahir'),
    Hobi = prompt ('silahkan masukan Hoby')
   
//     alert(nama)
// belajar pertemuan 1
var tes = confirm ("apakah ingin di save ke halaman")
if ( tes == true){
    document.write(`Nama         : ${nama} <br>
                    Tanggal Lahir: ${Tanggal} <br>
                    Hoby         : ${Hobi} <br>`) 
}else{
    document.write("Nama tidak di save di halaman")
}