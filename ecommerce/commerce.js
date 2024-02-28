// var iconepanier=document.getElementById("iconepanier");
// var btnpanier1=document.getElementById("panier1");
// var btnpanier2=document.getElementById("panier2");
// var btnpanier3=document.getElementById("panier3");
// var btnpanier4=document.getElementById("panier4");
// var btnpanier5=document.getElementById("panier5");
// var btnpanier6=document.getElementById("panier6");
// var btnpanier7=document.getElementById("panier7");
// var btnpanier8=document.getElementById("panier8");

// var msg = "produits"
// var produitajouter=1;



// btnpanier1.addEventListener('click', ()=> {
//     iconepanier.textContent=msg+produitajouter;
//     produitajouter++;    
// });

// btnpanier2.addEventListener('click', ()=> {
//     iconepanier.textContent=msg+produitajouter;
//     produitajouter++;    
// });
// btnpanier3.addEventListener('click', ()=> {
//     iconepanier.textContent=msg+produitajouter;
//     produitajouter++;    
// });
// btnpanier4.addEventListener('click', ()=> {
//     iconepanier.textContent=msg+produitajouter;
//     produitajouter++;    
// });
document.getElementById("divpay").hidden=true;
document.getElementById("btnpayer").hidden=true;
document.getElementById("prixtotal").hidden=true;
document.getElementById("ttc").hidden=true;
document.getElementById("btnplus").hidden=true;
document.getElementById("btnmoin").hidden=true;
prix1=document.getElementById("prix1");
var totalprix1=0;
prixtotal=document.getElementById("prixtotal");
btnpanier=document.getElementById("btnpanier");


var panier=document.getElementById("panier");
btn1=document.getElementById("btn1");
btn1.addEventListener("click", function(e){
    e.preventDefault();
    panier.innerHTML=parseInt(panier.innerHTML)+1;
    document.getElementById("btnplus").hidden=false;
    document.getElementById("btnmoin").hidden=false;
    prixtotal.innerHTML=parseInt(prixtotal.innerHTML)+parseInt(prix1.innerHTML);
// ---------------------------
    totalprix1+=parseInt(prix1.innerHTML);
// --------------------------------
    document.getElementById("btn1").hidden=true;
// ----------------------------
    let nomproduit1=document.getElementById("nomproduit1");
    

});
btnplus=document.getElementById("btnplus")
btnplus.addEventListener("click", function(e){
    e.preventDefault();
    panier.innerHTML=parseInt(panier.innerHTML)+1;
    prixtotal.innerHTML=parseInt(prixtotal.innerHTML)+parseInt(prix1.innerHTML);
// -------------------------------
    totalprix1+=parseInt(prix1.innerHTML);

// ce code permet d'augmenter le prix du panier dans l'icone panier

});
btnpmoin=document.getElementById("btnmoin")
btnmoin.addEventListener("click", function(e){
    e.preventDefault();
    if(parseInt(panier.innerHTML)>=1){
    panier.innerHTML=parseInt(panier.innerHTML)-1;
    // ce code permet diminuer le prix du panier dans l'icone panier
    prixtotal.innerHTML=parseInt(prixtotal.innerHTML)-parseInt(prix1.innerHTML);
    totalprix1+=parseInt(prix1.innerHTML);
    }
    // ------------------------------------------------
    // ce code permet de cacher les bouton plus et moins quand on a rien mit dans le panier
    if(parseInt(panier.innerHTML)==0){
        document.getElementById("btnplus").hidden=true;
        document.getElementById("btnmoin").hidden=true;
        document.getElementById("btn1").hidden=false;
    }
});
// btnpanier.addEventListener("click", function() {
//     alert("bonjour");
    
// })



 var btnpanier=document.getElementById("btnpanier");
 btnpanier.addEventListener("click", function(e){
     alert("bon");
     e.preventDefault();
     if(parseInt(panier.innerHTML)>=1){
         document.getElementById("prixtotal").hidden=false;
         document.getElementById("ttc").hidden=false;
         document.getElementById("btnpayer").hidden=false;
    
    }

});

// ------------------------------------------------------------------------
tabpay=document.getElementById("tabpay");
btnpayer=document.getElementById("btnpayer");
btnpayer.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("divpay").hidden=false;
    document.getElementById("btnpayer").hidden=true;
    document.getElementById("ttc").hidden=true;
    document.getElementById("prixtotal").hidden=true;
    if(nomproduit1.innerHTML){
        
        tabpay.innerHTML+="<tr><td width='30%'><img src='photo2-removebg-preview.png' alt=''></td><td width='35%'>"+nomproduit1.innerHTML+"</td><td>"+totalprix1+"</td></tr>";
    }
    
});






