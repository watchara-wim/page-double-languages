const langChange = document.querySelector('.checkBox');
const pageTH = document.querySelector('#content-TH');
const langTH = document.querySelector('#lang-TH');
const pageEN = document.querySelector('#content-EN');
const langEN = document.querySelector('#lang-EN');

        langChange.addEventListener('change', () => {
            if (langChange.checked) {
                langTH.classList.add('unselected-lang');
                pageTH.classList.remove('active');
                langEN.classList.remove('unselected-lang');
                pageEN.classList.add('active');
            } else {
                langEN.classList.add('unselected-lang');
                pageEN.classList.remove('active');
                langTH.classList.remove('unselected-lang');
                pageTH.classList.add('active');
            };
        });