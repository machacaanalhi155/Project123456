var Project123456 = {
  init: function() {
    var universeHistory = this.universeHistory();
    var currentYear = new Date().getFullYear();
    var currentDate = new Date().toLocaleString();
    console.log(currentDate + " - The current year is " + currentYear + ". It's a beautiful day to study the history of the universe!");
    console.log("Here's what we know about the universe:");
    console.log(universeHistory);
  },
  universeHistory: function() {
    var history = "The universe is estimated to be around 13.8 billion years old, and it has been expanding ever since. The big bang theory suggests that the universe began as a single point and then expanded into its current vastness. The universe is made up of about 70% dark energy, 25% dark matter, and 5% ordinary matter. The observable universe contains over 100 billion galaxies, each with billions of stars. The universe is still growing, and it will continue to expand indefinitely.";
    return history;
  }
};
Project123456.init();
