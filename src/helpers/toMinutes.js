// Takes in milliseconds. Returns time and proper english as a string
const toMinutes = (milliseconds) => {
  let minutes = Math.ceil(milliseconds / 60000);
  if (minutes >= 2) {
    return `${minutes} minutes`;
  } else if (minutes === 1) {
    return `${minutes} minute`;
  } else if (minutes < 1) {
    // Handles "impossible" case of an instant return (see Math.ceil above, Math.floor doesn't match mockup)
    return `less than 1 minute`;
  }
};

export default toMinutes;
