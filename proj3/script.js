function generate(){
    let quotes = {
        "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        "- Lifeline" : '"Mozambique here."',
        "- Revenant" : '"They Made Me A Killing Machine. Who Am I To Argue With Programming?"',
        "- Crypto" : '"The truth, 나에게 진실을 말해!"',
        "- Mad Maggie" : '"Kia maia, kia manawanui!"',
        "- Gibraltar" : '"Don\’t feel bad brotha, Gibraltar still loves you."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()*authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}