function Calculate() {
  
    // Extracting value in the amount 
    // section in the variable
    const amount = document.querySelector("#amount").value;
  
    // Extracting value in the interest
    // rate section in the variable
    const rate = 0.1325/12
  
    // Extracting value in the months 
    // section in the variable
    const months = document.querySelector("#months").value;

		const valor_parcela = amount/months;
        
    // Calculating total payment
    const total = amount * (1+rate)**months - valor_parcela * ((1+rate)**months- 1)/rate;

		const desconto = total/amount*100;
    
		document.querySelector("#total")
        .innerHTML = "Parcelando sua compra de R$"+amount+" em "+months+"x sem juros, você irá economizar R$" + total.toFixed(2)+". Isso equivale a "+desconto.toFixed(1)+"% de desconto!";
}  

// total = amount * (1+rate)**months - valor_parcela * ((1+rate)**months- 1)/rate