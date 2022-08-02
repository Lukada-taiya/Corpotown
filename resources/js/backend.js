try {
    window.Popper = require("@popperjs/core").default;
    window.$ = window.jQuery = require("jquery");

    require("bootstrap-material-design");
    require("perfect-scrollbar");
    require("sweetalert2");
    require("bootstrap-datetime-picker");
    require("../../node_modules/jquery.dataTables.min.js/js/jquery.dataTables.min.js");
    require("bootstrap-tagsinput");
    require("../../node_modules/material-dashboard/assets/js/material-dashboard.js");
    require("../js/script.js");
} catch (e) {}