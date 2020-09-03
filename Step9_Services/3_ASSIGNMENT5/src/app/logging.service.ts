export class LoggingService {
  activeCount = 0;
  inactiveCount = 0;

  addActive() {
    this.activeCount++;
    console.log("Active Count is " + this.activeCount);
  }

  addInactive() {
    this.inactiveCount++;
    console.log("Inactive Count is " + this.inactiveCount);
  }
}
