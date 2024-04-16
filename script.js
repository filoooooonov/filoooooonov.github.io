let popup = document.getElementById('popup');
let overlay = document.getElementById('overlay');
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // Calculate scrollbar width

function calculateScrollbarWidth() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
}

function openPopup(popupId) {
    calculateScrollbarWidth(); // Calculate scrollbar width

    let popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollbarWidth + 'px'; // Add padding to offset scrollbar width
        overlay.classList.add('active');
        popup.classList.add('open-popup');
        overlay.style.zIndex = '99';
        popup.style.zIndex = '100';


    }
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    if (popup) {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; 
        document.body.style.paddingRight = ''; // Remove padding
        popup.classList.remove('open-popup');
        overlay.classList.remove('active');        
    }
}

/* close the popup when you click outside the popup window */
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        document.querySelectorAll('.popup').forEach(function(popup) {
            closePopup(popup.id);
        });
    }
});

function copyToClipboard(text, element) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    element.textContent = 'Copied to clipboard!';
    setTimeout(function() {
        element.textContent = text;
    }, 3000); // Change back to the original text after 2 seconds
}

const sections = document.querySelectorAll("section")

sections.forEach((section) => {
    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);
        
    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;


        // console.log("Window Height: " + windowHeight);
        // console.log("Section RectTop: " + sectionRectTop)
        if(sectionRectTop < windowHeight) {
            section.classList.add("active");
        }
    }

    // revealing elements one by one
    window.addEventListener("scroll", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            if(section.classList.contains("active")) {
                const delay = 600;
                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay)
            }
        });
    });
});