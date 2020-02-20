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
	})
});