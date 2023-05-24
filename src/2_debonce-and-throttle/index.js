const logScrollY = () => console.log(window.scrollY);

const debounceLogScroll = _.debounce(logScrollY, 1000);

window.addEventListener('scroll', debounceLogScroll);

// window.addEventListener('scroll', _.throttle(logScrollY, 1000));