const texte = {
  de: {
    titel: "Blühende Akademie",
    erstefrage:
      "Wird er dich fragen, was er dir gegeben hat!",
    zweitefrage: "Sind die Planeten und Sterne leer? Ist dort nichts?",
    drittefrage:
      "Wie können wir die Überlegenheit des Korans in seiner Ausdrucksweise verstehen?",
    simplenote:
      "Nachdenken ist sehr nützlich! Lasst uns zusammen lesen den Text zum Nachdenken!",
    zurbuecher:
      "Sag ein Stichwort und finde es in deinem Telefon, wähl eine Abschnitt und lies!",
    zumtranskript:
      "Lasst uns ein paar Sätze zu diesem Thema ins Deutsche übersetzen!",
    kahoot: "Kahoot Zeit!",
    suchefaehigkeit:
      "Forschen Sie, wie unser Prophet, Friede sei mit ihm, scherzte!",
    gebetuebung: "Namaz Übung! Rezitier laut!",
    gebetauswendiglernen:
      "Zeit, ein Gebet auswendig zu lernen! Zusammen und 7 Mal in der Reihe laut vorlesen!",
    fazit:
      "Lass uns heute, was wir gefühlen haben, was wir verstanden haben, was wir edachten haben, was wir gelernt haben als einen kurzen Text im Blog auf Deutsch oder auf Türkisch schreiben!",
  },
  tr: {
    titel: "Medresetü'z Zehra",
    erstefrage: "Sana ne verdiyse onu soracak?",
    zweitefrage: "Gezegenler, yıldızlar boş mu? Oralarda hiçbir şey yok mu?",
    drittefrage:
      "Kur'an'ın söz üstünlüğünü nasıl anlayabiliriz?",
    simplenote:
      "Düşünmek çok yararlıdır! Tefekkür için metni birlikte okuyalım!",
    zurbuecher: "Anahtar kelime söyle, bölüm seç ve oku!",
    zumtranskript:
      "Haydi konu ile ilgili bir kaç cümleyi Almanca'ya tercüme edelim!",
    kahoot: "Kahoot Zamanı!",
    suchefaehigkeit:
      "Peygamberimiz aleyhissalatu vesselam'ın nasıl şaka yaptığını araştırın!",
    gebetuebung: "Namaz alıştırması! Yüksek sesle ezberden Kur'an tilaveti!",
    gebetauswendiglernen:
      "Ezberleme zamanı! Birlikte ve sırayla 7 kez yüksek sesle okuyalım!",
    fazit:
      "Bugün hissettiklerimizi, anladıklarımızı, düşündüklerimizi, öğrendiklerimizi Almanca veya Türkçe olarak blogda kısa bir metin halinde yazalım!",
  },
};

function wechselSprache(sprache) {
  for (let elID in texte[sprache]) {
    const el = document.getElementById(elID);

    if (el) {
      el.innerText = texte[sprache][elID];
    }
  }
}

wechselSprache("de");

document.getElementById("sprache").addEventListener("change", function () {
  const sprache = this.value;
  wechselSprache(sprache);
  document.documentElement.lang = sprache; // 'de' oder 'tr'
});
