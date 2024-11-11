function sprawdz(){

    const wzrost = parseInt(document.getElementById("wzrost").value);
    const waga = parseInt(document.getElementById("waga").value);

    function BMI(wzrost, waga){

        let newWzrost = wzrost/100;

        return waga/Math.pow(newWzrost, 2);
    }

    const bmi = BMI(wzrost, waga);

    
    if (wzrost < 0 || waga < 0){

        document.getElementById("wynik").innerHTML = "Um... to chyba nie jest twoja waga i wzrost :/";

    }else if (waga > 0 && wzrost > 0){

        document.getElementById("wynik").innerHTML = "Twoje BMI to " + bmi.toFixed(2);

    }


    if(bmi <= 0 || wzrost < 0){

        document.getElementById("wynik1").innerHTML = "(Albo masz nieziemską anoreksje?)";

    }else if (bmi > 0 && bmi < 18.5){

        document.getElementById("wynik1").innerHTML = "Niedowaga";

    }else if (bmi >= 18.5 && bmi <= 24.9){

        document.getElementById("wynik1").innerHTML = "Prawidłowa waga";

    }else if (bmi >=25 && bmi<= 29.9){

        document.getElementById("wynik1").innerHTML = "Nadwaga";

    }else if (bmi >= 30){

        document.getElementById("wynik1").innerHTML = "Otyłość";
    
    }

}
