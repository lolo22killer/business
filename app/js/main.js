$(function () {

    /*===========================
       Валидация форм
   ===========================*/

   $('#form1').validate({
   	rules: {
   		name: {
				required: true
   		},
			tel:{
				required: true,
				digits: true,
				rangelength: [10, 10]
    	},
    	"company-name":{
    		required: true
    	}
    },
    messages:{
    	name: {
				required: "Введите ваше имя"
   		},
			tel:{
				required: "Введите ваш номер телефона",
				digits: "Неправильно набран номер",
				rangelength: "Введите десятизначный номер телефона"
    	},
    	"company-name":{
    		required: "Введите название вашей компонии"
    	}
    },
   	errorPlacement: function(error, element) {
      error.insertBefore(element);
  	}

  });	// !validate

  $('#form2').validate({
  	rules: {
   		email: {
				required: true,
				email: true
   		}
    },
    messages:{
    	email: {
				required: "Введите ваш email",
				email: "Введеный email не коректен"
   		}
    },
   	errorPlacement: function(error, element) {
      error.insertBefore(element);
  	}
  });

}); // !Jquery

