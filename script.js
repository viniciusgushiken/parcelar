function Calculate() {
  
    // valor da compra 
    const amount = document.querySelector("#amount").value;
  
    // taxa selic mensal
    const rate = 0.1325/12
  
    // numero de parcelas
    const months = document.querySelector("#months").value;

		const valor_parcela = amount/months;
        
    // calculando o valor futuro com retiradas mensais
    const total = amount * (1+rate)**months - valor_parcela * ((1+rate)**months- 1)/rate;

		const desconto = total/amount*100;
    
		document.querySelector("#total")
        .innerHTML = "Parcelando sua compra de R$"+amount+" em "+months+"x sem juros, você irá economizar R$" + total.toFixed(2)+". Isso equivale a "+desconto.toFixed(1)+"% de desconto!";
}  
