
function converter()
{
    var temp1= Number(document.querySelector("#input1").value);
    var tempType1=document.querySelector("#firsttemp").value;
    var tempType2=document.querySelector("#finaltemp").value;
    
    if(tempType1 ==="Celcius")
    {
        if (tempType2 ==="Celcius") {
            var ans=temp1.toString();
            document.querySelector("#input2").value=ans;
        }
         if(tempType2 ==="Kelvin"){
            var temp2=temp1+273.15;
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
         if(tempType2==="Fahrenheit"){
            var temp2= (temp1*(9/5))+32;
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
    }

    if(tempType1 ==="Kelvin")
    {
        if (tempType2 ==="Kelvin") {
            var ans=temp1.toString();
            document.querySelector("#input2").value=ans;
        }
         if(tempType2 ==="Celcius"){
            var temp2=temp1-273.15;
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
         if(tempType2==="Fahrenheit"){
            var temp2=temp1-273.15;
            temp2= (temp1*(9/5))+32;
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
    }

    if(tempType1 ==="Fahrenheit")
    {
        if (tempType2 ==="Fahrenheit") {
            var ans=temp1.toString();
            document.querySelector("#input2").value=ans;
        }
         if(tempType2 ==="Kelvin"){
            var temp2=(temp1-32)*(5/9)+273.15;
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
         if(tempType2==="Celcius"){
            var temp2=(temp1-32)*(5/9);
            var ans=temp2.toString();
            document.querySelector("#input2").value=ans;
         }
    }

}
