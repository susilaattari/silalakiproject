function infoObject(){
    document.write("ukuran windows browser");
    br();
    document.write("InnerHeight:" + this.innerHeight);
    br();
    document.write("Innerwidth:" + this.innerWidth);
}
function infoTombol (me){
    str="Anda Menekan Tombol";
    str += "\n Nama Tombol:" + me.name;
    str += "\n Text Tombol:" + me.value;
    alert(str);
}
function warna (pilihan){
    // alert("anda memilih awrna" + pilihan);
    document.bgColor =pilihan;
}

















function br (){
    document.write("<br />");
}
