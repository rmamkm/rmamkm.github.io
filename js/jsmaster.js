$(document).ready(function(){
	//jQuery-driven form interaction
	$('#battle_interest').change(function(){
		if ($('#battle_interest').val() == 'sumter')
		 {
				$('.battle-group .help-block').text('The first battle of the Civil War! CSA General P.G.T. Beauregard attacks and captures Fort Sumter between April 12-14th, 1861.');
			} else if ($('#battle_interest').val() == 'antietam') 
			{
				$('.battle-group .help-block').text('One of America\'s bloodiest day\'s. The Battle of Antietam was fought in Maryland between September 16-18th, 1862.');
			} else if ($('#battle_interest').val() == 'gettysburg') 
			{
				$('.battle-group .help-block').text('A decisive victory for Union General George G. Meade in Pennsylvania between July 1-3, 1863.');
			} else if ($('#battle_interest').val() == 'chickamauga') 
			{
				$('.battle-group .help-block').text('Fought between September 18-20, 1863 in Georgia, Chickamauga was a significant victory for the CSA.');
			} else {
				$('.battle-group .help-block').text('Choose an option!');
			}
	}); //end change

	$('#email').focusout(function(){
		if($('#email').val().length == 0) {
			$('.email-group .help-block').text('An email address is required for sign-up.');
			$('.email-group').attr({
				class: 'form-group email-group has-error'
			}); // end attr
		} else {
			$('.email-group .help-block').text('');
			$('.email-group').attr({
				class: 'form-group email-group'
			}); //end attr
		}
	}); //end focusout for email

	$('button').click(function(submit){
		if($('#email').val().length == 0) {
			$('.email-group .help-block').text('An email address is required for sign-up.');
			$('.email-group').attr({
				class: 'form-group email-group has-error'
			}); // end attr
			submit.preventDefault();
		} //end if/else
	}); //end click
	
	//click effect for union_flag on index.html
	$('#union_flag').click(function(){
		if($('#union_flag').attr('src') == 'images/US_Flag.png' ) {
			$('#union_flag').attr({
				src:'images/Fort_Sumter_Flag.png'
			}); // end attr
			$('.unionflag').text('United States Flag flown at Fort Sumter (1861)');
		} else if($('#union_flag').attr('src') == 'images/Fort_Sumter_Flag.png' ) {
			$('#union_flag').attr({
				src:'images/US_Naval_Jack.png'
			}); // end attr
			$('.unionflag').text('"US Naval Jack 35 stars". Licensed under Creative Commons Attribution');	
		} else {
			$('#union_flag').attr({
				src:'images/US_Flag.png'
			}); // end attr
			$('.unionflag').text('The 34 Star Flag of the United States (1861-1863)');	
		} //end if/else
	});//end click

	//hover effect for union_flag on index.html
	$('#union_flag').hover(function(){
		$('#union_flag').css({
			opacity: '0.75',
			border: '1px dotted grey'
		}); //end css
	}, function(){
		$('#union_flag').css({
			opacity: '1.0',
			border: ''
		}); //end css
	}); //end hover


	//click effect for csa_flag on index.html
	$('#csa_flag').click(function(){
		if($('#csa_flag').attr('src') == 'images/CSA_Flag.png' ) {
			$('#csa_flag').attr({
				src:'images/CSA_Flag_2.png'
			}); // end attr
			$('.flag').text('Stainless Banner, the second flag of the CSA (1863)');
		} else if($('#csa_flag').attr('src') == 'images/CSA_Flag_2.png' ) {
			$('#csa_flag').attr({
				src:'images/bonnieblue.png'
			}); // end attr
			$('.flag').text('Bonnie Blue, the unofficial flag of the CSA (1861)');	
		} else {
			$('#csa_flag').attr({
				src:'images/CSA_Flag.png'
			}); // end attr
			$('.flag').text('The First National Flag of the CSA (1861)');	
		} //end if/else
	});//end click

	//hover effect for csa_flag on index.html
	$('#csa_flag').hover(function(){
		$('#csa_flag').css({
			opacity: '0.75',
			border: '1px dotted grey'
		}); //end css
	}, function(){
		$('#csa_flag').css({
			opacity: '1.0',
			border: 'none'
		}); //end css
	}); //end hover

	//effect that requires filtering
	$('#union_vic').click(function(){
		$('tr:contains("Union Victory")').css({
			color: '#000076' 
		}).show(); //end filtered CSS for Union Victory
		$('tr:contains("Confederate Victory")').css({
			color: '#777' 
		}).hide(); //end filtered CSS for Confederate Victory
		$('tr:contains("Inconclusive")').hide();
	}); //end click

	$('#csa_vic').click(function(){
		$('tr:contains("Confederate Victory")').css({
			color: '#760000' 
		}).show(); //end filtered CSS for Confederate Victory
		$('tr:contains("Union Victory")').css({
			color: '#777' 
		}).hide(); //end filtered CSS for Union Victory
		$('tr:contains("Inconclusive")').hide();
	}); //end click

	$('#all_battles').click(function(){
		$('tr:contains("Confederate Victory")').css({
			color: '#777' 
		}).show(); //end filtered CSS for Confederate Victory
		$('tr:contains("Union Victory")').css({
			color: '#777' 
		}).show(); //end filtered CSS for Union Victory
		$('tr:contains("Inconclusive")').show();
	}); //end click

	//additional effects
	//table row hover to supplement bootstrap js
	$('tr').hover(function(){
		$(this).css({
			fontWeight: '600'
		}); //end css for hover on
	}, function(){
		$(this).css({
			fontWeight: 'normal'
		}); //end css for hover on
	}); //end hover

}); //end ready