function hesapla() {
    const sayi1 = parseFloat(document.getElementById('sayi1').value);
    const sayi2 = parseFloat(document.getElementById('sayi2').value);
    const islem = document.getElementById('islem').value;
    let sonuc;

    // Girişlerin kontrolü
    if (isNaN(sayi1) || isNaN(sayi2)) {
        document.getElementById('sonuc').innerText = 'Lütfen tüm alanları doldurun.';
        return;
    }

    if (islem === '+') {
        sonuc = sayi1 + sayi2;
    } else if (islem === '-') {
        sonuc = sayi1 - sayi2;
    } else if (islem === '*') {
        sonuc = sayi1 * sayi2;
    } else if (islem === '/') {
        if (sayi2 !== 0) {
            sonuc = sayi1 / sayi2;
        } else {
            sonuc = "Bir sayıyı sıfıra bölemezsiniz.";
        }
    }

    document.getElementById('sonuc').innerText = 'Sonuç: ' + sonuc;
}