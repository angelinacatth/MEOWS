function calculateMEOWS() {
    // Ambil input dari form
    const systolicBP = parseInt(document.getElementById("systolicBP").value);
    const diastolicBP = parseInt(document.getElementById("diastolicBP").value);
    const heartRate = parseInt(document.getElementById("heartRate").value);
    const respiratoryRate = parseInt(document.getElementById("respiratoryRate").value);
    const oxygenSaturation = parseInt(document.getElementById("oxygenSaturation").value);
    const oxygenSupplement = document.getElementById("oxygenSupplement").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    const consciousness = document.getElementById("consciousness").value;
    const pain = document.getElementById("pain").value;
    const discharge = document.getElementById("discharge").value;
    const proteinuria = document.getElementById("proteinuria").value;

    let score = 0;

    // Penilaian berdasarkan tekanan darah sistolik
    if (systolicBP < 90) {
        score += 3; // Tekanan darah sistolik sangat rendah
    } else if (systolicBP >= 90 && systolicBP <= 100) {
        score += 2; // Tekanan darah sistolik rendah
    } else if (systolicBP > 100 && systolicBP <= 160) {
        score += 1; // Tekanan darah sistolik normal
    } else {
        score += 3; // Tekanan darah sistolik sangat tinggi
    }

    // Penilaian berdasarkan tekanan darah diastolik
    if (diastolicBP < 60) {
        score += 3; // Tekanan darah diastolik sangat rendah
    } else if (diastolicBP >= 60 && diastolicBP <= 80) {
        score += 1; // Tekanan darah diastolik normal
    } else if (diastolicBP > 80 && diastolicBP <= 100) {
        score += 2; // Tekanan darah diastolik tinggi
    } else {
        score += 3; // Tekanan darah diastolik sangat tinggi
    }

    // Penilaian berdasarkan denyut nadi
    if (heartRate < 40 || heartRate > 120) {
        score += 3; // Denyut nadi sangat rendah atau tinggi
    } else if (heartRate >= 40 && heartRate < 60 || heartRate > 100 && heartRate <= 120) {
        score += 2; // Denyut nadi agak rendah atau agak tinggi
    } else {
        score += 1; // Denyut nadi normal
    }

    // Penilaian berdasarkan frekuensi pernapasan
    if (respiratoryRate < 8 || respiratoryRate > 30) {
        score += 3; // Frekuensi pernapasan sangat rendah atau tinggi
    } else if (respiratoryRate >= 8 && respiratoryRate < 12 || respiratoryRate > 24 && respiratoryRate <= 30) {
        score += 2; // Frekuensi pernapasan agak rendah atau agak tinggi
    } else {
        score += 1; // Frekuensi pernapasan normal
    }

    // Penilaian berdasarkan saturasi oksigen
    if (oxygenSaturation < 90) {
        score += 3; // Saturasi oksigen sangat rendah
    } else if (oxygenSaturation >= 90 && oxygenSaturation <= 94) {
        score += 2; // Saturasi oksigen rendah
    } else {
        score += 1; // Saturasi oksigen normal
    }

    // Penilaian berdasarkan penggunaan oksigen tambahan
    if (oxygenSupplement === "yes") {
        score += 2; // Skor 2 jika menggunakan oksigen tambahan
    }

    // Penilaian berdasarkan suhu tubuh
    if (temperature < 36 || temperature > 38) {
        score += 3; // Suhu tubuh sangat rendah atau tinggi
    } else if (temperature >= 36 && temperature < 36.5 || temperature > 37.5 && temperature <= 38) {
        score += 2; // Suhu tubuh agak rendah atau agak tinggi
    } else {
        score += 1; // Suhu tubuh normal
    }

    // Penilaian berdasarkan kesadaran
    if (consciousness === "U") {
        score += 3; // Tidak responsif
    } else if (consciousness === "P") {
        score += 2; // Responsif terhadap rasa sakit
    } else if (consciousness === "V") {
        score += 2; // Responsif terhadap suara
    } else {
        score += 1; // Alert
    }

    // Penilaian berdasarkan rasa sakit
    if (pain === "abnormal") {
        score += 3; // Rasa sakit abnormal
    }

    // Penilaian berdasarkan discharge/lochia
    if (discharge === "abnormal") {
        score += 3; // Discharge/Lochia abnormal
    }

    // Penilaian berdasarkan proteinuria
    if (proteinuria === "2") {
        score += 3; // Proteinuria ++
    } else if (proteinuria === "1") {
        score += 2; // Proteinuria +
    }

    // Menampilkan hasil
    document.getElementById("meowsScore").innerHTML = "Skor MEOWS Anda: " + score;

    // Menentukan kategori berdasarkan skor
    let category = "";
    if (score >= 18) {
        category = "Tindakan Darurat Diperlukan!";
    } else if (score >= 12) {
        category = "Pemantauan Ketat Diperlukan.";
    } else if (score >= 6) {
        category = "Pemantauan Rutin Diperlukan.";
    } else {
        category = "Kondisi Stabil.";
    }

    document.getElementById("scoreCategory").innerHTML = "Kategori: " + category;

    // Menampilkan hasil
    document.getElementById("result").style.display = "block";
}
