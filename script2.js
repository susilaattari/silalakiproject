//menukar variabel
document.write(`<h2>cara menukar variabel</h2> <br>`)

var vars1,vars2,vars3,vars //dekerasi vssrisbel untuk minyimpsn dsts dsri keybosrd
vars1 = prompt ("masukan data 1", vars1)//input data pertama simpan ke dalam vars1
vars2 = prompt ("masukan data 2", vars2)//input data pertama simpan ke dalam vars2
document.write("isi variabel sebelum di tukar <br>")
document.write(`vars 1 : ${vars1} <br/> Vars 2 : ${vars2} <br>`) //tampilkan isi
//proses penukaran
vars = vars1
vars1 = vars2
vars2 = vars
document.write("isi variabel yang sudah ditukar <br>")
document.write(`vars 1 : ${vars1} <br/> Vars 2 : ${vars2}`)
11