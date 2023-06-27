function calaulaterent(){
   const  rentdurationS = parseInt(document.querySelector("#rentduration").value);   
   const  cartype = document.querySelector("#select").value;  
   let rentalcost; 

   if (cartype === "Economy") {
    rentalcost = 4000;
   } else if (cartype === "Midsize") {
    rentalcost = 10000;
   }else if (cartype === "Luxury") {
    rentalcost = 20000;
   }
   const totalcost = rentalcost * rentdurationS;

//    selecting output dom
  const outputscreen =document.querySelector("#output");
  const  spantag = document.createElement("span");
  const  totalcosttext = document.createTextNode("RS." + totalcost +"/-");
  spantag.appendChild(totalcosttext);
  spantag.style.color = "black";
  spantag.style.fontWeight = "bold"
  outputscreen.innerHTML = "Total Rental Cost : ";
  outputscreen.appendChild(spantag);
}