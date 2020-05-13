new Vue({
    el: '.ankiety',
    data: {
        formLightbox: false,
        showFeedback: true
    },
    methods: {
        closeFeedbackLightbox() {
            this.showFeedback = false;
        }
    }
});