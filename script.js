
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const teamMembers = [
    {
        name: "ASHIS KUMAR PRADHAN",
        position: "Co-coordinator",
        img: "https://res.cloudinary.com/dju84uvhd/image/upload/c_fill,g_face,f_auto,q_auto,fl_progressive/v1741432369/Ashis_Kumar_Pradhan_qxbqua.jpg",
        social: {
            linkedin: "linkedin.com/in/ashis-kumar-pradhan-26b79040",
            twitter: "#"
        }
    },
    {
        name: "Ankita Tyagi",
        position: "Mentor",
        img: "https://res.cloudinary.com/dju84uvhd/image/upload/c_fill,g_face,f_auto,q_auto,fl_progressive/v1741433401/Snapchat-229452271_-_Ankita_Tyagi_jem1ha.jpg",
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Prachi Agarwal",
        position: "General Secretary",
        img: "https://res.cloudinary.com/dju84uvhd/image/upload/c_fill,g_face,f_auto,q_auto,fl_progressive/v1741433391/IMG-20250118-WA0049_-_Prachi_Agarwal_mtycv1.jpg",
        social: {
            linkedin: "#",
            twitter: "#"
        }
    }
];


const events = [
    {
        date: "15 OCT",
        title: "Stock Market Workshop",
        description: "Learn the fundamentals of stock market investing from industry experts.",
        link: "#"
    },
    {
        date: "22 OCT",
        title: "Investment Challenge",
        description: "Compete with peers in our virtual investment competition.",
        link: "#"
    },
    {
        date: "05 NOV",
        title: "Guest Speaker Series",
        description: "Hear from successful alumni about careers in finance.",
        link: "#"
       
    }
];

function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <img src="${member.img}" alt="${member.name}" class="team-img">
            <div class="team-info">
                <h4>${member.name}</h4>
                <p class="text-muted">${member.position}</p>
                <div class="social-links">
                    <a href="${member.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${member.social.twitter}"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}


function renderEvents() {
    const eventsContainer = document.querySelector('.events-container');
    eventsContainer.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-date">${event.date}</div>
            <h4>${event.title}</h4>
            <p>${event.description}</p>
            <a href="${event.link}" class="btn btn-sm btn-outline-primary">Register Now</a>
        </div>
    `).join('');
}


document.addEventListener('DOMContentLoaded', function() {
    renderTeam();
    renderEvents();
    
   
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section, .team-card, .event-card');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

   
    const animatedElements = document.querySelectorAll('.section, .team-card, .event-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});