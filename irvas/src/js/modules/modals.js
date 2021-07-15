const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const
            trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        // dla vser triger Selectorov
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                // testing click
                if (e.target) {
                    e.preventDefault();
                }
// TODO: nado eto vse perepisat 100 raz dla proverki
// FIXME: nado koe cto zafiksirovat
// FIXME:
                modal.style.display = 'block';
                // document.body.style.overflow =
                document.body.classList.add('modal-open')
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            // document.body.style.overflow = "";
            document.body.classList.remove('modal-open')
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                // document.body.style.overflow = "";
                document.body.classList.remove('modal-open')
            }
        });
    }

    function showModalBTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    // const
    //     callEngineerBtn = document.querySelector('.popup_engineer_btn'),
    //     modalEngineer = document.querySelector('.popup_engineer'),
    //     modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    showModalBTime('.popup', 60000);
}

export default modals;