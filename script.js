// Animate on Scroll 
AOS.init();
// Flight,Train,Holiday,Hotel
$(document).ready(function () {
    $('#icon1').hover(function () {
        $('#F1').show(400);
    }, function () {
        $('#F1').hide(400);
    });
    $('#icon2').hover(function () {
        $('#T1').show(400);
    }, function () {
        $('#T1').hide(400);
    });
    $('#icon3').hover(function () {
        $('#HD1').show(400);
    }, function () {
        $('#HD1').hide(400);
    });
    $('#icon4').hover(function () {
        $('#H1').show(400);
    }, function () {
        $('#H1').hide(400);
    });
});
$(document).ready(function () {
    // Initialize datepicker
    $('#flight-dates, #train-dates, #holiday-dates, #hotel-dates').datepicker({
        format: "M dd/yyyy",
        startDate: "0d",
        autoclose: true
    });
    $("#icon1").click(function () {
        $("#bookingTabContent1").show()
        $("#bookingTabContent2,#bookingTabContent3,#bookingTabContent4").hide()
    })
    $("#icon2").click(function () {
        $("#bookingTabContent2").show()
        $("#bookingTabContent1,#bookingTabContent3,#bookingTabContent4").hide()
    })
    $("#icon3").click(function () {
        $("#bookingTabContent3").show()
        $("#bookingTabContent1,#bookingTabContent2,#bookingTabContent4").hide()
    })
    $("#icon4").click(function () {
        $("#bookingTabContent4").show()
        $("#bookingTabContent1,#bookingTabContent2,#bookingTabContent3").hide()
    })
    $(".btn").click(function () {
        $(".").show(400);
    })
})
// Active Page
$(document).ready(function() {
    var current = location.pathname;
    $('.navbar-nav li a').each(function(){
        var $this = $(this);
        // If the current path is equal to the href attribute of the anchor
        if($this.attr('href').indexOf(current) != -1){
            $this.addClass('active');
            $this.css('text-decoration', 'underline'); 
        }
    })
});
// Counter function
$('.counter').each(function () {
    var $this = $(this);
    var countTo = $this.text().replace('+', ''); // Remove the "+" for counting
    $this.prop('Counter', 0).animate({
        Counter: countTo
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $this.text(Math.ceil(now) + '+');
        }
    });
});
// BAck to top
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 300) { // Adjust the scroll position as needed
        $('#back-to-top').addClass('show');
    } else {
        $('#back-to-top').removeClass('show');
    }
});

$('#back-to-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
});
// typing 
document.addEventListener("DOMContentLoaded", function() {
    var firstText = "Why Choose Us?";
    var secondText = "Let Us Show The Beauty Of The World.";
    var typewriterElement = document.getElementById("typewriter");
    var typewriterSecondElement = document.getElementById("typewriter-second");
    let i = 0, j = 0;

    function typeFirst() {
        if (i < firstText.length) {
            typewriterElement.innerHTML += firstText.charAt(i);
            i++;
            setTimeout(typeFirst, 100); // Adjust typing speed here
        } else {
            setTimeout(typeSecond, 1000); // Pause before typing the second line
        }
    }

    function typeSecond() {
        if (j < secondText.length) {
            typewriterSecondElement.innerHTML += secondText.charAt(j);
            j++;
            setTimeout(typeSecond, 100);
        } else {
            setTimeout(resetTypewriter, 2000); // Pause before resetting
        }
    }

    function resetTypewriter() {
        typewriterElement.innerHTML = ""; // Clear first line
        typewriterSecondElement.innerHTML = ""; // Clear second line
        i = 0; // Reset counters
        j = 0;
        setTimeout(typeFirst, 500); // Restart typing
    }

    typeFirst(); // Start the typing animation
});

// typeWritter
const text = "Let's Travel The World Together!";
let index = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenCycles = 1500;

function typeWriter() {
    const element = document.getElementById("typewriter-text");
    
    if (!isDeleting) {
        element.innerHTML = text.substring(0, index);
        index++;
        
        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenCycles); // Pause before deleting
            return;
        }
    } else {
        element.innerHTML = text.substring(0, index);
        index--;
        
        if (index < 0) {
            isDeleting = false;
        }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
}

window.onload = typeWriter;



