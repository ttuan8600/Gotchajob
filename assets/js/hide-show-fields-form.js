$("#seeAnotherField").change(function() {
			if ($(this).val() == "yes") {
				$('#otherFieldDiv1').show();
				$('#otherField1').attr('required','');
				$('#otherField1').attr('data-error', 'This field is required.');
				$('#otherFieldDiv2').hide();
				$('#otherField2').removeAttr('required');
				$('#otherField2').removeAttr('data-error');	
			}else if($(this).val() == "maybe"){
				$('#otherFieldDiv2').show();
				$('#otherField2').attr('required','');
				$('#otherField2').attr('data-error', 'This field is required.');
				$('#otherFieldDiv1').hide();
				$('#otherField1').removeAttr('required');
				$('#otherField1').removeAttr('data-error');
			} else {
				$('#otherFieldDiv1').hide();
				$('#otherField1').removeAttr('required');
				$('#otherField1').removeAttr('data-error');		
				$('#otherFieldDiv2').hide();
				$('#otherField2').removeAttr('required');
				$('#otherField2').removeAttr('data-error');		
			}
		});
		$("#seeAnotherField").trigger("change");
		
$("#seeAnotherFieldGroup").change(function() {
			if ($(this).val() == "yes") {
				$('#otherFieldGroupDiv').show();
				$('#otherField1').attr('required','');
				$('#otherField1').attr('data-error', 'This field is required.');
        		$('#otherField2').attr('required','');
				$('#otherField2').attr('data-error', 'This field is required.');
			} else {
				$('#otherFieldGroupDiv').hide();
				$('#otherField1').removeAttr('required');
				$('#otherField1').removeAttr('data-error');
        $('#otherField2').removeAttr('required');
				$('#otherField2').removeAttr('data-error');	
			}
		});
		$("#seeAnotherFieldGroup").trigger("change");
		