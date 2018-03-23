$(document).ready(function(){ 
    $('.alert').hide();
    $('.myForm').submit(function(){
        var applicant ={};
        applicant.first_name = $('#first_name_input').val();
        applicant.last_name = $('#last_name_input').val();
        applicant.middle = $('#middle_input').val();
        applicant.birth_date = $('#birth_date_input').val();
        applicant.street_address = $('#street_input').val();
        applicant.apt = $('#apt_input').val();
        applicant.city= $('#city_input').val();
        applicant.state = $('#state_input').val();
        applicant.last4 = $('#last4_input').val();
        console.log(applicant);
        // postApplicant(applicant);                
    })

    $('.demo_button').on('click', function(){
        
        sessionStorage.setItem('first_name', $('#first_name_input').val())
    })

    function postApplicant (applicant){
        $.post("/api/applicants", {applicant}).then(function(err,res){
            if(err)
            console.log(err)
            else
            console.log(res)
            $('.alert').show();
        })
    }   
});

//CREATE FUNCTION TO STORE KEY AND VALUE INTO SESSION STORAGE 
// VAR storeLocal = function (key, value){
//     window.setStorage('key', value)
// }

// ***Example: storeLocal('first_name', first_name);


// ***** SESSION STORAGE WILL AUTOMATICALLY STORE ANY VALUE AS STRINGS. MUST INCLUDE SOME LOGIC TO PARSE BACK TO 
// INTEGER IN ORDER TO DO MATH CALCULATIONS*****
// ****MAYBE USE IMPLICIT COERCION TO TURN NUMBERS BACK INTO INTEGERS BEFORE SAVING TO DB. NUMBER * 1 ??? 