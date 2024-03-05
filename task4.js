angular.module('eventApp', []).controller('EventController', function ($scope) {
    var vm = this;

    // Initialize moment.js for date manipulation
    vm.currentMonth = moment();
    vm.today = moment();

    // Array of weekdays
    vm.weekdays = moment.weekdaysShort();

    // Function to generate the calendar structure
    function generateCalendar() {
        var calendar = [];
        var startOfMonth = moment(vm.currentMonth).startOf('month').startOf('week');
        var endOfMonth = moment(vm.currentMonth).endOf('month').endOf('week');

        var day = startOfMonth;
        var week = [];

        while (day.isBefore(endOfMonth)) {
            for (var i = 0; i < 7; i++) {
                week.push(moment(day));
                day.add(1, 'day');
            }
            calendar.push(week);
            week = [];
        }

        vm.weeks = calendar;
    }

    // Function to go to the previous month
    vm.prevMonth = function () {
        vm.currentMonth.subtract(1, 'month');
        generateCalendar();
    };

    // Function to go to the next month
    vm.nextMonth = function () {
        vm.currentMonth.add(1, 'month');
        generateCalendar();
    };

    // Mock data for events (replace with your actual data)
    vm.events = {
        '2024-03-05': [{ title: 'Event 1' }, { title: 'Event 2' }],
        '2024-03-10': [{ title: 'Event 3' }],
        // Add more events as needed
    };

    // Generate the initial calendar
    generateCalendar();
});
