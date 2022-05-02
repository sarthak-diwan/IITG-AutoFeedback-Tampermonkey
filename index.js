// ==UserScript==
// @name         Auto Feedback
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fill automatic feedback of IITG
// @author       s4r7h4k
// @match        https://online.iitg.ac.in/fb/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iitg.ac.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     if(document.location.pathname == '/fb/student_homepage.jsp'){
       let course_table = document.getElementsByTagName('table')[document.getElementsByTagName('table').length - 1];
       let all_tr = course_table.children[0].children;
       let st = parseInt(4);
       while(st < all_tr.length){
           console.log(all_tr.children);
           if(all_tr[st].children[3].innerText == 'Not Done'){
               let course_name = all_tr[st].children[0].innerText.trim();
               let course = course_name.replace(' ','');
               all_tr[st].children[4].firstChild.checked = true;
               document.getElementById('next').click();
           }
           st++;
       }
     }
    else if(document.location.pathname == '/fb/fill_feedback.jsp'){
     let all_inputs = document.getElementsByTagName('input');
     for(let i=0; i<all_inputs.length; i++){
        if(all_inputs[i].type == 'radio'){
           all_inputs[i].checked = true;
        }
     }
        document.getElementsByName('fbsubmit')[0].click();
    }
    // Your code here...
})();
