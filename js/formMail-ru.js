$("#sendMail").on("click", function() {
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();

	if(name == "") {
		$("#errorMess").text("Введите вашe имя");
		return false;
	} else if(phone == "") {
		$("#errorMess").text("Введите ваш номер телефона");
		return false;
	} else if(email == "") {
		$("#errorMess").text("Введите ваш Email");
		return false;
	} else if(message == "") {
		$("#errorMess").text("Введите ваше сообщение");
		return false;
	}

	$("#errorMess").text("");

    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "ajax/mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

    });
});


$('.back-to-top').click(function(){
	$('body').animate({'scrollTop':0}, 1000);
	$('html').animate({'scrollTop':0}, 1000);
});

$(window).scroll(function(){
	if($(window).scrollTop() > 200){
		$('.back-to-top').addClass('active');
	}
	else{
		$('.back-to-top').removeClass('active')	
	}
});


Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 15;
var olddata = [34.1035, 34.1459, 32.7233, 33.6427, 33.3896, 32.3018, 31.9239, 31.6963, 30.981, 30.5032, 30.6481, 30.776];
var olddata1 = [28.1929, 27.9301, 27.8852, 27.75, 27.5004, 27.1763, 26.8867, 26.8601, 26.576, 26.3265, 27.1739, 27.2077];
var ctx = document.getElementById('myFirstChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Янв', 'Фев', 'Май', 'Апр', 'Март', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'],
        datasets: [{
            label: 'Евро',
            backgroundColor: 'rgb(0, 99, 132, 0.0)',
            borderColor: 'rgb(0, 99, 132)',
            data: olddata
        },{
            label: 'Доллар',
            backgroundColor: 'rgb(0, 200, 0, 0.0)',
            borderColor: 'rgb(0, 200, 0)',
            data: olddata1
        }
        ]
    },

    // Configuration options go here
    options: {
        fontColor: 'white'
    }
});


var olddata = [, , 3.9984, 5.2402, 5.0568, 4.6695, 5.5328, 6.6622, 7.2174, 5.9716, 6.6508, 7.4194, 10.8554, 11.4488, 10.5731, 10.2980, 10.5371, 11.0415, 19.2329, 26.2231, 28.4226, 33.4954, 31.7141, 26.422, 34.6156, 30.776];
var olddata1 = [1.889, 1.899, 3.427, 5.2163, 5.4345, 5.2985, 5.3324, 5.3315, 5.3054, 5.05, 5.05, 5.05, 7.70, 7.985, 7.9617, 7.9898, 7.993, 7.993, 15.7685, 24.0006, 27.1908, 28.0672, 27.6882, 23.6862, 28.3547, 27.2077];
var ctx = document.getElementById('mySecondChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our datasets
    data: {
        labels: ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Евро',
            backgroundColor: 'rgb(0, 99, 132, 0.0)',
            borderColor: 'rgb(0, 99, 132)',
            data: olddata
        },{
            label: 'Доллар',
            backgroundColor: 'rgb(0, 200, 0, 0.0)',
            borderColor: 'rgb(0, 200, 0)',
            data: olddata1
        }
        ]
    },

    // Configuration options go here
    options: {
        fontColor: 'white'
    }
});
