$(document).ready(function() {
	var txt;
	$('#txt').keyup(function() {
		txt = $(this).val();
	});

	$('#btn').click(function() {
		if(txt.trim() !== '') {
			$('#show').append('<li>'+ txt +'<span class="delete">&times</span></li>');
			$('#txt').val('');
			txt = '';
		}
	});

	$(document).keyup(function(ev) {
		if(ev.which === 13) {
			if(txt.trim() !== '') {
				$('#show').append('<li>'+ txt +'<span class="delete">&times</span></li>');
				$('#txt').val('');
				txt = '';
			}
		}
	})

	$('ul').on('click', '.delete', function() {
		$(this).parent().remove();
	});

	var styles = [
		{
			name: '#container',
			style : {
				width:"400px",
				margin:"100px auto 0"
			}
		},
		{
			name: "#txt",
			style : {
				width:"350px",
				textIndent:"10px",
				lineHeight:"30px",
				border:"none",
				outline:"none",
				float:"left"
			}
		},
		{
			name: "#btn", 
			style :{
				width:"50px",
				height:"30px",
				border:"none",
				outline:"none",
				borderRadius:"0",
				background:"#16A05D",
				color:"#fff"
			}
		}

	];


	for(var i = 0; i < styles.length; i++) {
		$(styles[i].name).css(styles[i].style);
	}


});