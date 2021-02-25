import ServerRequestService from './ServerRequestService';
import { TicketType } from '../lib/types';

export default class TicketsService {
  private readonly TICKETS_PATH = '/tickets';

  serverService = new ServerRequestService();

  public getTickets(): Promise<{ tickets: TicketType[], stop: boolean }> {
    return this.serverService.getResource(this.TICKETS_PATH);
  }
}
