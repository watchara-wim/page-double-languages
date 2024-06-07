const langChange = document.querySelector('.checkBox');
const pageTH = document.querySelectorAll('#content-TH');
const pageEN = document.querySelectorAll('#content-EN');

        langChange.addEventListener('change', () => {
            if (langChange.checked) {
                document.querySelector('#lang-TH').classList.add('unselected-lang');
                document.querySelector('#lang-EN').classList.remove('unselected-lang');
            } else {
                document.querySelector('#lang-EN').classList.add('unselected-lang');
                document.querySelector('#lang-TH').classList.remove('unselected-lang');
            }

            pageEN.forEach(component => {
                if (langChange.checked) {
                    component.classList.add('active');
                } else {
                    component.classList.remove('active');
                }
            });
            pageTH.forEach(component => {
                if (!langChange.checked) {
                    component.classList.add('active');
                } else {
                    component.classList.remove('active');
                }
            });
        });