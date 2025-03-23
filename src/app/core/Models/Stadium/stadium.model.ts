export class Stadium {
    id: number;
    name: string;
    capacity: number;
    location: string;
  
    constructor(id: number, name: string, capacity: number, location: string) {
      this.id = id;
      this.name = name;
      this.capacity = capacity;
      this.location = location;
    }
  }