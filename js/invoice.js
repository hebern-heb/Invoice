 $(document).ready(function(){
	$(document).on('click', '#checkAll', function() {          	
		$(".itemRow").prop("checked", this.checked);
	});	
	$(document).on('click', '.itemRow', function() {  	
		if ($('.itemRow:checked').length == $('.itemRow').length) {
			$('#checkAll').prop('checked', true);
		} else {
			$('#checkAll').prop('checked', false);
		}
	});  
	var count = $(".itemRow").length;
	$(document).on('click', '#addRows', function() { 
		count++;
		var html = '';
		html += '<tr class="all">';
		html += '<td class="itemRow"></td>';          
		html += '<td><input type="text" name="productName[]" id="productName_'+count+'" class="form-control" autocomplete="off"></td>';	
		html += '<td><input type="number" name="quantity[]" id="quantity_'+count+'" class="form-control quantity" autocomplete="off"></td>';   		
		html += '<td><input type="number" name="price[]" id="price_'+count+'" class="form-control price" autocomplete="off"></td>';		
		html += '<td><div class="input-group"><div class="input-group-addon">'+
							'<select name="taxType[]" id="taxType_'+count+'">'+
							'<option value="">Select</option>'+
							'<option value="0">0%</option>'+
							'<option value="1">1%</option>'+
							'<option value="5">5%</option>'+
							'<option value="10">10%</option>'+
						'</select>'+
					'</div>'+
					'<input value="" type="number" class="form-control" name="taxAmount" id="taxAmount_'+count+'" placeholder="Tax Amount">'+
					'</div>'+
				'</td>';
	    html += '<td><input type="number" name="total[]" id="total_'+count+'" class="form-control total" autocomplete="off"></td>';          

       
		html += '</tr>';
		$('#invoiceItem').append(html);
	}); 

	$(document).on('blur', "[id^=quantity_]", function(){
		calculateTotal();
	});	
	$(document).on('blur', "[id^=price_]", function(){
		calculateTotal();
	});	
	$(document).on('blur', "[id^=taxType_]", function(){		
		calculateTotal();
	});	

	$(document).on('blur', "#discount", function(){
	
		var amountIs 		= $(this).val();//amount
    	var subTotalAmnt = $('#subTotal').val();//after tax
    	var type = $('#discount_type').val();
         
         $('#discountedAmount').val('');

    	if(type == 'amount' && type !=''){
			total = parseFloat(subTotalAmnt)-parseFloat(amountIs);
			discountedAmount = $('#discountedAmount').val();	

    		$('#discountedAmount').val(total);

			discount = $('#discount').val();	

    		$('#discountedAmount').val(parseFloat(subTotalAmnt)-parseFloat(discount));
    		$('#amountDue').val(parseFloat(subTotalAmnt)-parseFloat(discount));//final

    	}else if(type == 'percentage' && type !=''){{

    		total  = subTotalAmnt*(amountIs/100);
    		$('#discountedAmount').val(total);
    		$('#amountDue').val(parseFloat(subTotalAmnt)-parseFloat(total));//final

    	}
    }
	});	
	
});	
function calculateTotal(){
	var totalAmount = 0; 
	var totalTax = 0;
	var withoutTax = 0;
	var taxAll = 0;
	var finalAmount = 0;
	var discountAmountis = 0;

	$("[id^='price_']").each(function() {
		var id = $(this).attr('id');
		id = id.replace("price_",'');
		var price = $('#price_'+id).val();
		var quantity  = $('#quantity_'+id).val();
		if(!quantity) {
			quantity = 1;
		}
		var total = price*quantity;
		$('#total_'+id).val(parseFloat(total));
		totalAmount += total;	
		withoutTax += total;			
		taxAll += total;			

	});

	$("[id^='taxType_']").each(function() {
		var id = $(this).attr('id');
		id = id.replace("taxType_",'');
		var price = $('#taxType_'+id).val();
		var total = $('#total_'+id).val();
		var new_tax = (price / 100) * total;

		$('#taxAmount_'+id).val(parseFloat(new_tax));
		
		 totalTax += new_tax;
	});

	$('#tax_amnt').val(parseFloat(totalTax));

	$('#taxAmount').val(parseFloat(withoutTax));	


	var t = parseFloat(totalTax) + parseFloat(withoutTax);
	$('#subTotal').val(parseFloat(t));	


	var taxRate 	= $("#taxRate").val();
	var subTotal 	= $('#subTotal').val();	

 	taxAll = $('#taxAmount').val();	

 	$('#amountDue').val(subTotal);		
}

 