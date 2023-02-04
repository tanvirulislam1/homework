document.getElementById('btn').addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const fname = document.getElementById('fName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const division = document.getElementById('division').value;
    const district = document.getElementById('district').value;

    const nameResult = document.getElementById('nameResult');
    const fnameResult = document.getElementById('fnameResult');
    const emailResult = document.getElementById('emailResult');
    const phoneResult = document.getElementById('phoneResult');
    const divisionResult = document.getElementById('divisionResult');
    const districtResult = document.getElementById('districtResult');

    

    if(name != "" && fname != "" && email != "" + "@" + "" && phone != "" && division != "" && district != ""){
        document.getElementById('result').style.display = "block";
        document.getElementById('rgform').style.display = "none";
        nameResult.innerHTML = name;
        fnameResult.innerHTML = fname;
        emailResult.innerHTML = email;
        phoneResult.innerHTML = phone;
        divisionResult.innerHTML = division;
        districtResult.innerHTML = district;
        document.querySelector("title").innerHTML = "Your Information";

    }else{
        alert('Please Input Your All Information')
    }
 
})