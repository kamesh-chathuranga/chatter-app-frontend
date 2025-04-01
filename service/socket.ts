import { Socket, io } from "socket.io-client";

class SocketService {
  private static instance: Socket | null = null;

  static connect() {
    if (!this.instance) {
      this.instance = io(process.env.API_BASE_URL || "http://localhost:7000");
    }
    return this.instance;
  }

  static disconnect() {
    if (this.instance) {
      this.instance.disconnect();
      this.instance = null;
    }
  }
}

export default SocketService;
