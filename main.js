function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jkQbO8iJd/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color= "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";  
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');

    if (results[0].label == "Clap") {
        img.src= 'aliens-01.gif';
        img1.src= 'aliens-02.png';
        img2.src= 'aliens-03.png';
        img3.src= 'aliens-04.png';
    } else if (results[0].label == "Bell") {
        img.src= 'aliens-01.png';
        img1.src= 'aliens-02.gif';
        img2.src= 'aliens-03.png';
        img3.src= 'aliens-04.png';
    } else if (results[0].label == "Idk") {
        img.src= 'aliens-01.png';
        img1.src= 'aliens-02.png';
        img2.src= 'aliens-03.gif';
        img3.src= 'aliens-04.png';
    }else{
        img.src= 'aliens-01.png';
        img1.src= 'aliens-02.png';
        img2.src= 'aliens-03.png';
        img3.src= 'aliens-04.gif';
    }
}
}

/* 𝔡𝔬𝔫𝔱 𝔞𝔰𝔨 𝔴𝔥𝔶 𝔱𝔥𝔦𝔰 𝔦𝔰 𝔥𝔢𝔯𝔢 



 d̷̨̧̛͍͔̥̭͕̮̼̘̖̹̤̱̭͚̱͐͆̎̃̒̎̆̾͊́͜͜ǫ̸̛͎͈͓̯̟͓͇̈́̀̾͐̍̒̒́̐̾͑̂̓̐̐͛̿̾͝͝͝ǹ̸̢̢̧͓̯̲̪̞̣̙̟̙̥͐̄͛͌͒̓͘͠ͅt̵̡̛͍̬̲̰͓͙̪̮͚̠̠̮̳̬̲͙͔̭̖̹̩͚̟̓͒̌̈́͆̿͘͘͜ ̸̢̡̨̢̦̭͍̙̤͓̣̬̯̲̣͇̠̼̪̭̞͍̫̤̤͍̻̙̓͒̄͆͒͐̄̐͋̀͆͌̕̚͘͝ȧ̵̧̛͉̈́̆s̷͙̼̞͎̫̻̻̯̼̦̰̮͈̹̆̿̀͂̅̑̀̅̿̏̓̊̀͋͘̕͘͝k̴̛̻̍̒̄͛̀́̎͑̓͌͂̐̃́̿̃̿͐̚͝͝ ̵̡̺̣̞̯͗̄͝͝w̷̢̙̖̭͍̝͔͙̦̹̦̼͍̹̘̙͇͚̳̘̼͂̑̾̓̄͋̄̏̏͊̂͋̃́̒̿̎̏͌̃̒̈͌͘͜͝h̵̥͕̞͑̓͗̂͛͘̚y̴̨̧̛̫͚̩̤̣͚̲̙̥̤̜̺̫̘̗̠̻̗̦͕͚͈̰͎̥̪̏͐̍̓͝ͅ ̵̧̡̩͚̠͓̖̠̟͎̻̼̞̘̠̹͔̃̅̅̈́̅̈́͐̃̃̄̽̔̈͋̊́̾́̔̊̎̆̈́̄̚͝͝͝͠t̵̡̛̹̣̗͙̲̘͈͇͈̘̮͚̥̟̟͙̬̼͈͖̑̽͐́̂͋ḩ̵̢͔̤͚̫̙̞̦͈̳̘͓̦̞̟̻͎͙̮̗͇̲̞́̓́͜͜ͅͅi̷̢̡̢̛̼̩̺̳͕̻̮̮̩̝͇̤̩̗̘̗̖͙͎̺͓͖̲͍̙̥̊̆̂͊̾̏̔̾̔̈́́̈́́̊̀̄̚̚͘͘͜s̵̡̛̙̞͙̟̟͖͓̙͎̘̙͇̬̥̅̈́̓̈́̿̒̈́̾́̋̈́͌͒̇̈͌̉́͗̇̔̍̑̏͜͠͝͝ͅ ̴̢͖͎̩̘̬͔͙͉̜͔͖̼̹͈̼̃̓̍́͒͗͜͠ͅì̷̧̫̱̻͎̳̲̭̤̪̪͚̱̲̦̭͓̠͕̪̱͍̫̹̰̭̣͕͉̯s̴̢̢͙͖͉͎͎͎͓̯̘͇͓̺̏̈́̎͋̏̚ ̴̡͚̋̉̿̿̀̌̍̾̕͘ḣ̸̢̨̨̛̼̳̗̞̫̣̬͉̝̠͓͖̺̖̟̳̥̘̤͊͑̔̃̔̓́̑̏̀̀̄͑̕͜͜e̵̡̡̢̛̪̺̦̭͍͎̻̺͉̻̗̯̭̞͍̭̠̥̱̤̹̥͎̬̬͐͐̍̅̓̄̌͒͘͜͝͠ͅr̷̨̤̠̮̱̞̜͚͖̰̻̰̬͎̞̙̮͓̥͎̰̤̍̈͋̀͗̄̽̋̔͆̇̉̓̀̕͘͜ͅę̷̧̡̨̰̝͚͚͍̳̼̦̙̻̳̭͓̱̳͚͇̰̝̲̎́̒̉̑̓̋̅́͐̓̓̀́́̀̂̍̿̋͗́̃́̍͘͜͜͝͝ͅ





𝕕𝕠𝕟𝕥 𝕒𝕤𝕜 𝕨𝕙𝕪 𝕥𝕙𝕚𝕤 𝕚𝕤 𝕙𝕖𝕣𝕖

🅳🅾🅽🆃 🅰🆂🅺 🆆🅷🆈 🆃🅷🅸🆂 🅸🆂 🅷🅴🆁🅴







*/